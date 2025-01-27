import { useState, useEffect } from "react";
import NavBar from "./NavBar";

interface Player {
    playerId?: number;
    firstName?: string;
    lastName?: string;
    age?: number;
    winrate?: number;
}

export default function Rankings() {    
    const [players, setPlayers] = useState<Array<Player>>([]);
    const [playersDetails, setPlayersDetails] = useState<Array<Player>>([]);

    useEffect(() => {
        const fetchTopPlayerIds = async() => {
            const url = `http://localhost:8080/rankings`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                setPlayers(json.topPlayers);
            } catch (err) {
                console.error(err);
            }
        }

        fetchTopPlayerIds();
    }, []);

    useEffect(() => {
        async function fetchPlayerDetails() {
            const url = `http://localhost:8080/rankings/getPlayersDetails`;
            const playerIds: Array<number> = players.map((player) => player.playerId)
                .filter((id) => id !== undefined);

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json", 
                    },
                    body: JSON.stringify({ playerIds}),
                });
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                setPlayersDetails(json.playersDetails);
            } catch (err) {
                console.error(err);
            }
        }

        if (players.length > 0) fetchPlayerDetails();
    }, [players])

    return (
        <div>
            <NavBar />
            <div className="flex justify-center">
                <h3 className="text-blacks-75 absolute top-[152px]">Player Rankings</h3>
                <div className="flex flex-col absolute w-[952px] top-[240px] bg-blacks-50 
                    rounded-[15px] p-[8px]">
                    <div className="flex justify-around">
                        <h6 className="text-white">Rank</h6>
                        <h6 className="text-white">Player</h6>
                        <h6 className="text-white">Age</h6>
                        <h6 className="text-white">Winrate</h6>
                    </div>
                    {playersDetails && playersDetails.length > 0 ? (
                        playersDetails.map((player, index) => 
                            index % 2 === 1 ? 
                            <div key={index} className="rounded-[15px] flex justify-around">
                                <p className="text-white">{index + 1}</p>
                                <p className="text-white">{player.firstName} {player.lastName}</p>
                                <p className="text-white">{player.age}</p>
                                <p className="text-white">{player.winrate.toFixed(2)}</p>
                            </div> :
                            <div key={index} className="bg-blacks-25 rounded-[15px] flex justify-around">
                                <p className="text-white">{index + 1}</p>
                                <p className="text-white">{player.firstName} {player.lastName}</p>
                                <p className="text-white">{player.age}</p>
                                <p className="text-white">{player.winrate.toFixed(2)}</p>
                            </div>
                        )
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}