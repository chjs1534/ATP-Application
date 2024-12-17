import React from 'react'

function Matches(props) {
    const { playerMatches } = props;
    const numMatches = 10;

    const matchObjs = [];
    for (let i = 0; i < numMatches; i++) {
        const currMatch = playerMatches[i]
        const matchObj = {
            "player1__name" : currMatch.player1.firstName + " " + currMatch.player1.lastName,
            "player2__name" : currMatch.player2.firstName + " " + currMatch.player2.lastName,
            "player1__rank" : "rank " + currMatch.player1.rank,
            "player2__rank" : "rank " + currMatch.player2.rank,
            "match__tournament" : currMatch.tournament,
            "match__date" : currMatch.date.slice(0,4) + "/" + currMatch.date.slice(4,6) + "/" + currMatch.date.slice(6,8),
            "match__result" : currMatch.victory ? "Victory" : "Defeat",
            "match__length" : currMatch.time + " minutes",
            "match__round" : currMatch.round,
            "match__score" : currMatch.score
        }
        matchObjs.push(matchObj);
    }

    return (
        <div id="matches__container">
            {Array.from({ length: numMatches }).map((_, index) => (
                <div className="match__container" key={index}>
                    <div className="match__left">
                        <h2 className="match__tournament">{matchObjs[index]["match__tournament"]}.</h2>
                        <p className="match__date">{matchObjs[index]["match__date"]}</p>
                        <h3 className="match__result">{matchObjs[index]["match__result"]}</h3>
                        <p className="match__length">{matchObjs[index]["match__length"]}</p>
                    </div>
                    <img src="/icons/noun-tennis-court-7346269.svg" alt="ATP Stats"/>
                    <div className="match__middle">
                        <h1 className="match__round">{matchObjs[index]["match__round"]}</h1>
                        <h1 className="match__score">{matchObjs[index]["match__score"]}</h1>
                    </div>
                    <div className="match__right">
                        <p className="player1__rank">{matchObjs[index]["player1__rank"]}</p>
                        <h1 className="player1__name">{matchObjs[index]["player1__name"]}</h1>
                        <h1 className="player2__name">{matchObjs[index]["player2__name"]}</h1>
                        <p className="player2__rank">{matchObjs[index]["player2__rank"]}</p>
                    </div>
                </div>
            ))}     
        </div>
    )
}

export default Matches