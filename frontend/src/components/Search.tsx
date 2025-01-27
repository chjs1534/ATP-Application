import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface SearchProps {
    sizeStyles: string;
    playerId: number;
    setPlayerId:React.Dispatch<React.SetStateAction<number>>; 
}

export default function Search({ sizeStyles, playerId, setPlayerId }: SearchProps) {
    const navigate = useNavigate();
    const [playerName, setPlayerName] = useState<string>("");
    const [players, setPlayers] = useState<Array<string>>([]);
    const [suggestions, setSuggestions] = useState<Array<string>>([]);
    const [doSearch, setDoSearch] = useState<Boolean>(false);

    useEffect(() => {
        const loadPlayers = async() => {
            setPlayers(["Novak Djokovic", "Tommy Paul", "Carlos Alcaraz"]);
        }

        loadPlayers();
    }, [playerName])

    useEffect(() => {
        const searchPlayer = async () => {

            let url = `http://localhost:8080/player/getPlayerId/${playerName}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
    
                const json = await response.json();
                setPlayerId(json.playerId);
                setPlayerName("");
                setDoSearch(false);
                navigate(`/player/${playerId}`);
            } catch (err) {
                console.error(err); 
            }
        }

        if (doSearch && playerName) searchPlayer();
    }, [doSearch]);

    useEffect(() => {
        let matches : Array<string> = [];
        if (playerName.length > 0) {
            matches = players.filter(player => {
                const regex = new RegExp(`${playerName}.*`, "i");
                return regex.test(player);
            })
        }
        setSuggestions(matches);

    }, [playerName])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setDoSearch(true);
        }
    };

    const handleSearchPress = () => {
        setDoSearch(true);
    }

    const handleSuggestionClick = (index: number) => {
        console.log(players[index]);
        setPlayerName(players[index]);
        setDoSearch(true);
    };

    return (
            <div 
                className={
                    `flex justify-center
                    absolute w-[1200px] ${sizeStyles} 
                    shadow-lg rounded-[15px] z-50 bg-white`
                }
                style={{ height: `${80 + 48 * suggestions.length}px` }}    
            >
                <input 
                    className="
                        absolute h-[80px] w-full 
                        text-center text-blacks-100 placeholder-blacks-75 
                        "
                    type='text'
                    placeholder='Enter Player Name'
                    value={playerName}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyPress}
                />
                <i 
                    className="fa-solid fa-magnifying-glass absolute top-[40px] 
                    -translate-y-1/2 right-[16px] cursor-pointer"
                    onClick={handleSearchPress} 
                />
                {suggestions && suggestions.map((currSuggestions, index) => 
                    <div 
                        key={index} 
                        className="absolute cursor-pointer"
                        style={{ top: `${88 + 48 * index}px` }}
                        onClick={() => handleSuggestionClick(index)} 
                    >
                        <p>{currSuggestions}</p>
                    </div>
                )}
            </div>
    ); 
}