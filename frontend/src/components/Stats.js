import React from 'react'
import Winrate from './Winrate'
import RankingChart from './RankingChart'

function Stats(props) {
    const { playerDetails } = props;

    return (
        <div id="stats__container">
            <Winrate playerDetails={playerDetails} />
            <RankingChart playerDetails={playerDetails} />
        </div>
    )
}

export default Stats