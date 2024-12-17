import React from 'react'

function Winrate(props) {
    const { playerDetails } = props;
    const winrate = Math.round(playerDetails.winrate * 100) + "%";

    return (
        <div id="winrate__container">
            <div 
                id="winrate__wheel"
                style={{
                    background: `conic-gradient(#5237E8 0% ${winrate}, #dfe8ed ${winrate} 100%)`
                }}
            >
                <div id="wheel__inner" >
                    <span id="winrate">{winrate}</span>
                </div>
            </div>
            <div id="winrate__bars"> 
                <div className="surface__stats">
                    <span id="hard__winrate">Hard - </span>
                    <div className="winrate__bar">
                        <div 
                            className="surface__winrate"
                            style={{
                                backgroundColor: "#0116D3",
                                width: Math.round(playerDetails.hardWinrate * 100) + "%"
                            }}
                        /> 
                    </div>
                </div>
                <div className="surface__stats">
                    <span id="grass__winrate">Grass - </span>
                    <div className="winrate__bar">
                        <div 
                            className="surface__winrate"
                            style={{
                                backgroundColor: "#778435",
                                width: Math.round(playerDetails.grassWinrate * 100) + "%"
                            }}
                        /> 
                    </div>
                </div>
                <div className="surface__stats">
                    <span id="clay__winrate">Clay - </span>
                    <div className="winrate__bar">
                        <div 
                            className="surface__winrate"
                            style={{
                                backgroundColor: "#BD5327",
                                width: Math.round(playerDetails.clayWinrate * 100) + "%"
                            }}
                        /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Winrate