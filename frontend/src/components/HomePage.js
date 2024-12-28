import React from 'react'
import SearchContainer from './Search'

export default function HomePage(props) {
    const { playerId, setPlayerId, setPlayerDetails, setPlayerMatches } = props;

    return (
        <SearchContainer 
            playerId={playerId} 
            setPlayerId={setPlayerId} 
            setPlayerDetails={setPlayerDetails} 
            setPlayerMatches={setPlayerMatches}
        />
    )
}