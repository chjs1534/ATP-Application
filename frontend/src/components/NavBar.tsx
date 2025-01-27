import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    
    const navigateHome = () => {
        try {
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    }
    
    const navigateRankings = () => {
        try {
            navigate("/rankings");
        } catch (err) {
            console.error(err);
        }
    }

    const navigateHeadToHead = () => {
        try {
            navigate("/headToHead");
        } catch (err) {
            console.error(err);
        }
    }

    const navigateMatchPredictions = () => {
        try {
            navigate("/matchPredictions");
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div className='flex gap-4 md:gap-16 absolute top-[36px] md:left-[64px] text-blacks-100'>
                <h6 className="cursor-pointer" onClick={navigateHome}>Home</h6>
                <h6 className="cursor-pointer" onClick={navigateRankings}>Player Rankings</h6>
                <h6 className="cursor-pointer" onClick={navigateHeadToHead}>Head To Head</h6>
                <h6 className="cursor-pointer" onClick={navigateMatchPredictions}>Match Predictions</h6>
            </div>
            <hr className='absolute top-[96px] w-full h-[2px] bg-blacks-25'></hr>
        </div>
    );
}

export default NavBar;