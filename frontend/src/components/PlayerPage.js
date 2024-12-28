import React from 'react'
import SearchContainer from './Search'
import Footer from './Footer'
import Navbar from './Navbar'
import Body from './Body'

export default function PlayerPage(props) {
    const { playerId, setPlayerId, playerDetails, setPlayerDetails, playerMatches, setPlayerMatches } = props;

    return (
        <div>
            <SearchContainer 
                playerId={playerId} 
                setPlayerId={setPlayerId} 
                setPlayerDetails={setPlayerDetails} 
                setPlayerMatches={setPlayerMatches}
            />
            <Navbar />
            <Body 
                playerId={playerId} 
                playerDetails={playerDetails} 
                playerMatches={playerMatches} 
            />   
            <Footer />
        </div>
    )
}