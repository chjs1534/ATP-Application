import React from 'react'

function Details(props) {
    const { playerDetails }= props;

    return (
        <div id="details__container">
            <div id="personaldetails__container">
                <h3>Personal Details</h3>
                <p>Age - {playerDetails.age}</p>
                <p>Height - {playerDetails.height}</p>
                <p id="country">Country - {playerDetails.ioc}</p>
            </div>
            <div id="titles__container">
                <h3>Titles</h3>
                <p >Titles - {playerDetails.titles}</p>
                <p >Grand Slams - {playerDetails.grandSlams}</p>
                <p >Masters - {playerDetails.masters}</p>
            </div>
            <div id="headtohead__container">
                <h3>Head to Head</h3>
                <div id="headtohead__box">
                    <div className="headtohead__circle" id="headtohead__player1"></div>
                    <span>VS</span>
                    <div className="headtohead__circle" id="headtohead__player1"></div>
                </div>
            </div>
        </div>
    )
}

export default Details