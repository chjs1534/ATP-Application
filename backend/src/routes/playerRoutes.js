import express from 'express'
import prisma from '../prismaClient.js'
import { getPlayerTitles, getPlayerWinrate, getPlayerById, getPlayerRank } from '../helpers/playerQueries.js'

const router = express.Router()

// Get player id given player name
router.get('/getPlayerId/:playerName', async (req, res) => {
    const fullName = req.params.playerName

    const [firstName, lastName] = fullName.split(" ");

    // Get player
    let player
    try {
        player = await prisma.player.findFirst({
            where: {
                name_first: {
                    equals: firstName,
                    mode: 'insensitive',
                },
                name_last: {
                    equals: lastName,
                    mode: 'insensitive',
                },
            }
        })

        if (!player) { 
            return res.status(404).json({ message: "Player not found" }) 
        }
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    res.json( {playerId: player.player_id} )
})

// Gets player details given player id
router.get('/getPlayerDetails/:playerId', async (req, res) => {
    const playerId = parseInt(req.params.playerId);

    // Get player
    let player = {
        name_first: "",
        name_last: "",
        age: 0,
        height: 0,
        country: "" 
    }
    try {
        player = await getPlayerById(prisma, playerId)
        if (!player) { 
            return res.status(404).json({ message: "Player not found" }) 
        }
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    // Get player rank
    let rank = 0
    try {
        rank = await getPlayerRank(prisma, playerId)
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }
    
    // Get player titles
    let titlesCount = 0
    try {
        titlesCount = await getPlayerTitles(prisma, playerId)
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    let grandSlamsCount = 0
    try {
        grandSlamsCount = await getPlayerTitles(prisma, playerId, 'G')
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    let mastersCount = 0
    try {
        mastersCount = await getPlayerTitles(prisma, playerId, 'G')
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }
    
    // Get player winrates
    let winrate = 0
    try {
        winrate = await getPlayerWinrate(prisma, playerId)
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }
    
    let hardWinrate = 0
    try {
        hardWinrate = await getPlayerWinrate(prisma, playerId, 'Hard')
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    let clayWinrate = 0
    try {
        clayWinrate = await getPlayerWinrate(prisma, playerId, 'Clay')
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    let grassWinrate = 0
    try {
        grassWinrate = await getPlayerWinrate(prisma, playerId, 'Grass')
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    // Get rank history
    let rankHistory
    try {
        rankHistory = await prisma.rankings.findMany({
            where: { player: playerId },
            orderBy: { ranking_date: 'desc' }
        })
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    // Latest rankings by year
    const latestRankingsByYear =
        rankHistory.reduce((acc, ranking) => {
            const year = ranking.ranking_date.substring(0, 4);
            if (!acc[year]) {
                acc[year] = ranking.rank;
            }
            return acc;
        }, {})

    // Player details
    let playerDetails = {
        firstName: player.name_first,
        lastName: player.name_last,
        age: player.dob,
        height: player.height,
        country: player.ioc,
        rank: rank.rank,
        titles: titlesCount,
        grandSlams: grandSlamsCount,
        masters: mastersCount,
        winrate: winrate,
        hardWinrate: hardWinrate,
        clayWinrate: clayWinrate,
        grassWinrate: grassWinrate,
        rankingChart: latestRankingsByYear
    }

    res.json( {playerDetails} )
})

// Gets player matches given player id
router.get('/getPlayerMatches/:playerId', async (req, res) => {
    const playerId = parseInt(req.params.playerId);

    // Get player1
    let player1
    try {
        player1 = await getPlayerById(prisma, playerId)

        if (!player1) { 
            return res.status(404).json({ message: "Player not found" }) 
        }
    } catch {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    // Get player1 rank
    let player1Rank
    try {
        player1Rank = await getPlayerRank(prisma, playerId)

        if (!player1Rank) { 
            return res.status(404).json({ message: "Player rank not found" }) 
        }

    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    // Get matches
    let matches
    try {
        matches = await prisma.matches.findMany({
            where: {
                OR: [
                    {
                        winner_id : playerId
                    },
                    {
                        loser_id : playerId
                    }
                ],
            },
            orderBy: {tourney_date : 'desc'},
            take: 10
        })

        if (!matches) { 
            return res.status(404).json({ message: "Matches not found" }) 
        }
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }

    // Get matches
    let matchesDetails = []
    for (const match of matches) {
        // Get player2
        let player2
        try {
            player2 = await getPlayerById(prisma, match.winner_id == player1.player_id ? match.loser_id : match.winner_id)
    
            if (!player2) { 
                return res.status(404).json({ message: "Player not found" }) 
            }
        } catch {
            console.log(err.message)
            return res.status(503).json({ message: "Service unavailable" })
        }

        // Get player2 rank
        let player2Rank
        try {
            player2Rank = await getPlayerRank(prisma, match.winner_id == player1.player_id ? match.loser_id : match.winner_id)

            if (!player2Rank) { 
                return res.status(404).json({ message: "Player rank not found" }) 
            }

        } catch (err) {
            console.log(err.message)
            return res.status(503).json({ message: "Service unavailable" })
        }

        // Get match details
        const matchDetails = {
            tournament: match.tourney_name,
            round: match.round,
            score: match.score,
            date: match.tourney_date,
            time: match.minutes,
            victory: match.winner_id == player1.player_id ? true : false,
            player1: {
                id: player1.player_id,
                firstName: player1.name_first,
                lastName: player1.name_last,
                rank: player1Rank.rank
            },
            player2: {
                id: player2.player_id,
                firstName: player2.name_first,
                lastName: player2.name_last,
                rank: player2Rank.rank
            }

        }
        matchesDetails.push(matchDetails)
    }
    
    res.json( {matches: matchesDetails} )
})

export default router