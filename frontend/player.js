

document.addEventListener("DOMContentLoaded", async () => {
    // Display matches
    const numMatches = 9
    const matchesContainer = document.querySelector('#matches__container')

    for (let i = 0; i < numMatches; i++) {
        const matchHTML = `
        <div class="match__container">
            <div class="match__left">
                <h2 class="match__tournament">Loading...</h2>
                <p class="match__date">Loading...</p>
                <h3 class="match__result">Loading...</h3>
                <p class="match__length">Loading...</p>
            </div>
            <img src="/icons/noun-tennis-court-7346269.svg" alt="ATP Stats" style="width:90px;height:90px;"/>
            <div id="match__middle">
                <h1 class="match__round">Loading...</h1>
                <h1 id="match__score">Loading...</h1>
            </div>
            <div id="match__right">
                <p class="player1__rank">Loading...</p>
                <h1 class="player1__name">Loading...</h1>
                <h1 class="player2__name">Loading...</h1>
                <p class="player2__rank">Loading...</p>
            </div>
        </div>
        `
        matchesContainer.innerHTML += matchHTML
    }

    // Get player id
    const playerId = window.location.href.split('/').pop()

    // Get player details
    url = `http://localhost:3000/player/getPlayerDetails/${playerId}}`
    let playerDetails
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        playerDetails = json.playerDetails
    } catch (err) {
        console.error(err)
    }

    const statsObj = {
        "#winrate" : Math.round(playerDetails.winrate * 100) + '%',
        "#hard__winrate" : Math.round(playerDetails.hardWinrate * 100) + '%',
        "#clay__winrate" : Math.round(playerDetails.clayWinrate * 100) + '%',
        '#grass__winrate' : Math.round(playerDetails.grassWinrate * 100) + '%',
        '#num__titles' : playerDetails.titles,
        '#num__grandslams' : playerDetails.grandSlams,
        '#num__masters' : playerDetails.masters,
        '#age' : playerDetails.age,
        '#height' : playerDetails.height,
        '#country' : playerDetails.country
    }

    for (const [key, val] of Object.entries(statsObj)) {
        const element = document.querySelector(key)
        element.innerHTML += val;
    }

    // Winrate bars
    document.querySelector('#hard__stats').style.width = statsObj['#hard__winrate']
    document.querySelector('#grass__stats').style.width = statsObj['#grass__winrate']
    document.querySelector('#clay__stats').style.width = statsObj['#clay__winrate']

    // Winrate wheel
    document.querySelector('#winrate__wheel').style.background = 
        `conic-gradient(#5237E8 0% ${statsObj['#winrate']}, #dfe8ed ${statsObj['#winrate']} 100%)`

    // Head to head
    document.querySelector('#headtohead__player1').innerHTML = playerDetails.firstName[0] + playerDetails.lastName[0]

    // Rank chart
    // TODO
    const years = Object.keys(playerDetails.rankingChart).map(Number)
    const ranks = Object.values(playerDetails.rankingChart)

    const chartWidth = 400
    const chartHeight = 200
    const padding = 20

    const xScale = (chartWidth - 2 * padding) / (years.length - 1)
    const yScale = (chartHeight - 2 * padding) / (Math.max(...ranks) - Math.min(...ranks))

    const points = years.map((year, index) => {
        const x = padding + index * xScale
        const y = padding + playerDetails.rankingChart[year] * yScale
        return `${x},${y}`
    }).join(' ')

    document.querySelector('#line__plot').setAttribute('points', points)

    // Get player matches
    url = `http://localhost:3000/player/getPlayerMatches/${playerId}}`
    let playerMatches
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        playerMatches = json.matches
    } catch (err) {
        console.error(err)
    }
    for (let i = 0; i < numMatches; i++) {
        const currMatch = playerMatches[i]
        const matchObj = {
            ".player1__name" : currMatch.player1.firstName + " " + currMatch.player1.lastName,
            ".player2__name" : currMatch.player2.firstName + " " + currMatch.player2.lastName,
            ".player1__rank" : "rank " + currMatch.player1.rank,
            ".player2__rank" : "rank " + currMatch.player2.rank,
            ".match__tournament" : currMatch.tournament,
            ".match__date" : currMatch.date.slice(0,4) + "/" + currMatch.date.slice(4,6) + "/" + currMatch.date.slice(6,8),
            ".match__result" : currMatch.victory ? "Victory" : "Defeat",
            ".match__length" : currMatch.time + " minutes",
            ".match__round" : currMatch.round,
            ".match__score" : currMatch.score
        }

        const matchElements = document.querySelectorAll(Object.keys(matchObj))
        for (let j = 0; j < Object.keys(matchObj).length; j++) {
            const id = i * Object.keys(matchObj).length + j
            matchElements[id].innerHTML = matchObj['.' + matchElements[id].className]
        }
    }
})
