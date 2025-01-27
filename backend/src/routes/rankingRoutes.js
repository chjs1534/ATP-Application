import express from 'express'
import prisma from '../prismaClient.js'
import { getPlayerWinrate, getPlayerById, getPlayerRank} from '../helpers/playerQueries.js'

const router = express.Router()

router.get('/', async (req, res) => {
    // Get rankings 1 to 100
    let topPlayerIds
    try {
        topPlayerIds = await prisma.rankings.findMany({
            select: {
                player: true
            },
            orderBy: [{
                ranking_date: 'desc',
            },
            {
                rank: 'asc',
            }
            ],
            take: 100
        })

        if (!topPlayerIds) { 
            return res.status(404).json({ message: "Players not found" }) 
        }

        topPlayerIds = topPlayerIds.map(item => ({ playerId: item.player }));
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: "Service unavailable" })
    }
    res.json( {topPlayers: topPlayerIds} )
})

router.post('/getPlayersDetails', async (req, res) => {
    const playerIds = req.body.playerIds;
    const playersDetails = await Promise.all(playerIds.map(async(playerId) => {
        try {
            // Player details
            const player = await getPlayerById(prisma, playerId);
            if (!player) { 
                return res.status(404).json({ message: "Player not found" }) 
            }

            // Rank and winrate
            const rank = await getPlayerRank(prisma, playerId);
            const winrate = await getPlayerWinrate(prisma, playerId);
            
            // Player details
            return {
                id: playerId,
                firstName: player.name_first,
                lastName: player.name_last,
                age: player.dob,
                rank: rank.rank,
                winrate: winrate,
            };
        } catch (error) {
            console.log(err.message)
            return res.status(503).json({ message: "Service unavailable" })
        }
    }));
    res.json({ playersDetails });
});



export default router
