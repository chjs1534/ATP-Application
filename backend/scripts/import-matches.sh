#!/bin/bash
set -a
source ../.env
set +a

for file in ../data/csv-files/matches/*.csv; do
    filename=$(basename "$file")
    echo "Importing $filename"
    docker exec -it postgres-db psql -U postgres -d atp-db -c "\
    COPY \"Matches\" \
    (tourney_id,tourney_name,surface,draw_size,tourney_level,tourney_date, \
    match_num,winner_id,winner_seed,winner_entry,winner_name,winner_hand, \
    winner_ht,winner_ioc,winner_age,loser_id,loser_seed,loser_entry,loser_name, \
    loser_hand,loser_ht,loser_ioc,loser_age,score,best_of,round,minutes,w_ace,w_df, \
    w_svpt,w_1stIn,w_1stWon,w_2ndWon,w_SvGms,w_bpSaved,w_bpFaced,l_ace,l_df,l_svpt,l_1stIn, \
    l_1stWon,l_2ndWon,l_SvGms,l_bpSaved,l_bpFaced,winner_rank,winner_rank_points, \
    loser_rank,loser_rank_points) \
    FROM '/csv-files/matches/$filename' \
    DELIMITER ',' \
    CSV HEADER;"
done


