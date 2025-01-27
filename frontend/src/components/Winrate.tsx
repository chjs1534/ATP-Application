interface WinrateProps {
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

export default function Winrate({ playerDetails }: WinrateProps) {

    return (
        <div className="flex items-center gap-[16px]">
            <div className="relative w-[136px] h-[136px] rounded-full bg-gray-300">
                <div 
                    className="absolute w-full h-full rounded-full" 
                    style={{
                        background: `conic-gradient(#4F46E5 ${playerDetails.winrate * 100}%, #FF6347 0)`
                    }}
                ></div>
                <div className="absolute top-[24px] left-[24px] w-[88px] h-[88px] 
                    bg-gray-300 rounded-full flex justify-center items-center">
                    <p className="text-black text-lg font-semibold">
                        {Math.round(playerDetails.winrate * 100)}%
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-[16px]"> 
                <div className="flex items-center gap-[8px]">
                    <p className="text-black-100 w-[48px]">Hard</p>
                    <div className="bg-gray-300 w-[136px] h-[24px]">
                        <div 
                            className={`bg-blue-600 h-[24px]`} 
                            style={{ width: `${playerDetails.hardWinrate * 100}%` }} 
                        /> 
                    </div>
                </div>
                <div className="flex items-center gap-[8px]">
                    <p className="text-black-100 w-[48px]">Grass</p>
                    <div className="bg-gray-300 w-[136px] h-[24px]">
                        <div 
                            className="bg-green-200 h-[24px]"
                            style={{ width: `${playerDetails.grassWinrate * 100}%` }} 
                        /> 
                    </div>
                </div>
                <div className="flex items-center gap-[8px]">
                    <p className="text-black-100 w-[48px]">Clay</p>
                    <div className="bg-gray-300 w-[136px] h-[24px]">
                        <div 
                            className="bg-orange-400 h-[24px]"
                            style={{ width: `${playerDetails.clayWinrate * 100}%` }} 
                        /> 
                    </div>
                </div>
            </div>
        </div>
    );
}