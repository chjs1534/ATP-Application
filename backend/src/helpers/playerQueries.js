export const getPlayerById = async (prisma, playerId) => {
    return await prisma.player.findUnique({
        where: {
            player_id: playerId
        }
    })
}

export const getPlayerRank = async(prisma, playerId) => {
    return await prisma.rankings.findFirst({
        where: { player: playerId },
        orderBy: { ranking_date: 'desc' },
    })
}

export const getPlayerTitles = async (prisma, playerId, tourneyLevel = null) => {
    return await prisma.matches.count({
        where: {
            winner_id: playerId,
            round: 'F',
            ...(tourneyLevel && { tourney_level: tourneyLevel })
        }
    })
}

export const getPlayerWinrate = async(prisma, playerId, surface = null) => {
    const wins = await prisma.matches.count({
        where: {
            winner_id: playerId,
            ...(surface && { surface: surface })
        }
    })

    const losses = await prisma.matches.count({
        where: {
            loser_id: playerId,
            ...(surface && { surface: surface })
        }
    })

    return wins / (wins + losses)
}