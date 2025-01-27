import Winrate from "./Winrate";

interface PlayerDetailsProps {
    playerDetails: {
        playerId?: number;
        firstName?: string;
        lastName?: string;
        age?: number;
        height?: string;
        country?: string;
        titles?: number;
        grandSlams?: number;
        masters?: number;
        winrate?: number;
        hardWinrate?: number;
        clayWinrate?: number;
        grassWinrate?: number;
    };
}

export default function PlayerDetails({ playerDetails }: PlayerDetailsProps) {
    return (
        <div className="absolute top-[400px] w-[1200px] h-[208px] flex items-center
            justify-around gap-[70px] rounded-[15px] shadow-lg p-[16px]">
            <div className="flex flex-col gap-[16px]">
                <p>Age - {playerDetails.age}</p>
                <p>Height - {playerDetails.height}</p>
                <p>Country - {playerDetails.country}</p>
            </div>
            <div className="flex flex-col gap-[16px]">
                <p >Titles - {playerDetails.titles}</p>
                <p >Grand Slams - {playerDetails.grandSlams}</p>
                <p >Masters - {playerDetails.masters}</p>
            </div>
            <Winrate playerDetails={playerDetails} />
        </div>
    );
}