interface PlayerMatchesProps {
    playerMatches: Array<{
        player1: {
            firstName: string;
            lastName: string;
            rank: number;
        };
        player2: {
            firstName: string;
            lastName: string;
            rank: number;
        };
        tournament: string;
        date: string;
        victory: string;
        time: string;
        round: string;
        score: string;
    }>;
}

export default function PlayerMatches({ playerMatches }: PlayerMatchesProps) {
    if (!playerMatches || playerMatches.length === 0) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div>
            {playerMatches.slice(0,10).map((curr, index) => (
                <div 
                    key={index} 
                    className="relative w-[1200px]" 
                    style={{ top: `${712 + 24 * index}px` }}
                >
                    <div className="flex justify-between shadow-lg p-[16px] rounded-[15px]">
                        <div className="flex flex-col gap-[8px]">
                            <h5 className="text-grass-2">
                                {curr.tournament}
                            </h5>
                            <h6 className="text-blacks-75">
                                {curr.round}
                            </h6>
                            <h6 className="text-blacks-75">
                                {curr.score}
                            </h6>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <p>
                                Rank {curr.player1.rank}
                            </p>
                            <h6>
                                {curr.player1.firstName} {curr.player1.lastName}
                            </h6>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <p>
                                Rank {curr.player2.rank}
                            </p>
                            <h6 className="text-blacks-50">
                                {curr.player2.firstName} {curr.player2.lastName}
                            </h6>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <p className="text-blacks-50">{curr.date}</p>
                            <p className="text-blacks-50">{curr.victory}</p>
                            <p className="text-blacks-50">{curr.time} minutes</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}