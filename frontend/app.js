const searchPlayer = async () => {
    const playerName = document.querySelector('.search__bar').value

    let url = `http://localhost:3000/player/getPlayerId/${playerName}`
    let playerId
    try {
        const response = await fetch(url)
        if (!response.ok) {
            if (response.status === 404) {
                window.location.assign(`http://localhost:3000/noplayer`)
            } else {
                throw new Error(`Response status: ${response.status}`)
            }
        }

        const json = await response.json()
        playerId = json.playerId
        window.location.assign(`http://localhost:3000/player/${playerId}`)
    } catch (err) {
        console.error(err);
    }
}