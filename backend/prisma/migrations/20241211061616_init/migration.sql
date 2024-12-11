/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Player" (
    "player_id" INTEGER NOT NULL,
    "name_first" TEXT,
    "name_last" TEXT,
    "hand" TEXT,
    "dob" TEXT,
    "ioc" TEXT,
    "height" INTEGER,
    "wikidata_id" TEXT,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "Rankings" (
    "id" SERIAL NOT NULL,
    "ranking_date" TEXT,
    "rank" INTEGER,
    "player" INTEGER,
    "points" INTEGER,

    CONSTRAINT "Rankings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matches" (
    "id" SERIAL NOT NULL,
    "tourney_id" TEXT,
    "tourney_name" TEXT,
    "surface" TEXT,
    "draw_size" INTEGER,
    "tourney_level" TEXT,
    "tourney_date" TEXT,
    "match_num" INTEGER,
    "winner_id" INTEGER,
    "winner_seed" TEXT,
    "winner_entry" TEXT,
    "winner_name" TEXT,
    "winner_hand" TEXT,
    "winner_ht" INTEGER,
    "winner_ioc" TEXT,
    "winner_age" DOUBLE PRECISION,
    "loser_id" INTEGER,
    "loser_seed" TEXT,
    "loser_entry" TEXT,
    "loser_name" TEXT,
    "loser_hand" TEXT,
    "loser_ht" INTEGER,
    "loser_ioc" TEXT,
    "loser_age" DOUBLE PRECISION,
    "score" TEXT,
    "best_of" INTEGER,
    "round" TEXT,
    "minutes" INTEGER,
    "w_ace" INTEGER,
    "w_df" INTEGER,
    "w_svpt" INTEGER,
    "w_1stin" INTEGER,
    "w_1stwon" INTEGER,
    "w_2ndwon" INTEGER,
    "w_svgms" INTEGER,
    "w_bpsaved" INTEGER,
    "w_bpfaced" INTEGER,
    "l_ace" INTEGER,
    "l_df" INTEGER,
    "l_svpt" INTEGER,
    "l_1stin" INTEGER,
    "l_1stwon" INTEGER,
    "l_2ndwon" INTEGER,
    "l_svgms" INTEGER,
    "l_bpsaved" INTEGER,
    "l_bpfaced" INTEGER,
    "winner_rank" INTEGER,
    "winner_rank_points" INTEGER,
    "loser_rank" INTEGER,
    "loser_rank_points" INTEGER,

    CONSTRAINT "Matches_pkey" PRIMARY KEY ("id")
);
