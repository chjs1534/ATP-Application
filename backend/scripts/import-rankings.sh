#!/bin/bash
set -a
source ../.env
set +a

for file in ../data/csv-files/rankings/*.csv; do
    filename=$(basename "$file")
    echo "Importing $filename"
    docker exec -it postgres-db psql -U postgres -d atp-db -c "\
    COPY \"Rankings\" (ranking_date, rank, player, points) \
    FROM '/csv-files/rankings/$filename' \
    DELIMITER ',' \
    CSV HEADER;"
done
