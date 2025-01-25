import Winrate from "./Winrate";

interface PlayerDetailsProps {
    playerDetails: {
        age?: number;
        height?: string;
        country?: string;
        titles?: number;
        grandSlams?: number;
        masters?: number;
    };
}

export default function PlayerDetails({ playerDetails }: PlayerDetailsProps) {
    return (
        <div className="absolute top-[448px] w-[1200px] h-[208px] flex items-center
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
            <Winrate />
        </div>
    );
}