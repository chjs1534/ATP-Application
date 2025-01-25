import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import PlayerDetails from './PlayerDetails';
import PlayerMatches from './PlayerMatches';
import { useState, useEffect } from 'react';

interface PlayerProps {
    playerId: number;
    setPlayerId: React.Dispatch<React.SetStateAction<number>>; 
}

function Player({ playerId, setPlayerId }: PlayerProps) {
    const [playerDetails, setPlayerDetails] = useState<{}>({});
	const [playerMatches, setPlayerMatches] = useState<Array<{}>>([]);

    useEffect(() => {
        async function fetchPlayerDetails() {
            const url = `http://localhost:8080/player/getPlayerDetails/${playerId}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                setPlayerDetails(json.playerDetails);
            } catch (err) {
                console.error(err);
            }
        }

        if (playerId) fetchPlayerDetails();
    }, [playerId]);

    useEffect(() => {
        async function fetchPlayerMatches() {
            const url = `http://localhost:8080/player/getPlayerMatches/${playerId}}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
    
                const json = await response.json();
                setPlayerMatches(json.matches);
            } catch (err) {
                console.error(err);
            }
        }

        if (playerId) fetchPlayerMatches();
    }, [playerId]);

    return playerId && playerDetails && playerMatches ?
        (
            <div>
                <NavBar />
                <div className="flex justify-center">
                    <div className="w-[1200px]">
                        <Search sizeStyles="top-[152px]" playerId={playerId} setPlayerId={setPlayerId} /> 
                        <h3 className="text-blacks-75 absolute top-[392px]">
                            {playerDetails.firstName} {playerDetails.lastName}
                        </h3>
                        <PlayerDetails playerDetails={playerDetails} />
                        <h4 className="text-blacks-75 absolute top-[686px]">Recent Matches</h4>
                        <PlayerMatches playerMatches={playerMatches} />
                    </div>
                </div>
            </div>
        ) :
        (
            <div>
                <NavBar />
                <div className="flex justify-center">
                    <div className="w-[1200px] flex justify-center">
                        <Search sizeStyles="top-[152px]" playerId={playerId} setPlayerId={setPlayerId} /> 
                    </div>
                </div>
            </div>
        )
}

export default Player;