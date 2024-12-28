import React from 'react'
import Stats from './Stats'
import Details from './Details';
import Matches from './Matches';

function Body(props) {
    // Get player details
    const { playerDetails, playerMatches } = props;

    return (
        <div id="body__container">
                <Stats playerDetails={playerDetails} />

                <div id="main__container">
                    <Details playerDetails={playerDetails} />
                    <Matches playerMatches={playerMatches} />
                </div>    
            </div>
    )
}

export default Body