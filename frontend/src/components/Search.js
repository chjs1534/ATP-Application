import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Search(props) {
    const navigate = useNavigate();
    const { playerId, setPlayerId, setPlayerDetails, setPlayerMatches } = props;
    const [playerName, setPlayerName] = useState("");

    const searchPlayer = async () => {
        if (!playerName) return;

        let url = `http://localhost:8080/player/getPlayerId/${playerName}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setPlayerId(json.playerId);
        } catch (err) {
            console.error(err); 
        }

        url = `http://localhost:8080/player/getPlayerDetails/${playerId}`;
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

        url = `http://localhost:8080/player/getPlayerMatches/${playerId}}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setPlayerMatches(json.matches);
            navigate(`/player/${playerId}`);
        } catch (err) {
            console.error(err);
        }
    }

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        <div id="search__container">
            <img src="/icons/noun-tennis-1671480.svg" alt="ATP Stats"/>
            <input 
                type="text" 
                className="search__bar" 
                value={playerName}
                onChange={handleInputChange}
                placeholder="Enter player name"
            />
            <button id="search__button" onClick={searchPlayer}></button>
        </div>
    )
}