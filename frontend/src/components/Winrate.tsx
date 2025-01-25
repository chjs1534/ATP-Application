import React from "react";

export default function Winrate() {
    const winrate = 0.9;
    const hardWinrate = 0.8;
    const grassWinrate = 0.7;
    const clayWinrate = 0.74

    return (
        <div className="flex items-center gap-[16px]">
            <div className="w-[136px] h-[136px] bg-indigo-600 rounded-full 
                flex justify-center items-center">
                <div className="w-[88px] h-[88px] bg-gray-300 rounded-full 
                    flex justify-center items-center">
                    <p className="text-black-100">90%</p>
                </div>
            </div>
            <div className="flex flex-col gap-[16px]"> 
                <div className="flex items-center gap-[8px]">
                    <p className="text-black-100">Hard</p>
                    <div className="bg-gray-300 w-[136px] h-[24px]">
                        <div className="bg-blue-600 w-[80px] h-[24px]"/> 
                    </div>
                </div>
                <div className="flex items-center gap-[8px]">
                    <p className="text-black-100">Grass</p>
                    <div className="bg-gray-300 w-[136px] h-[24px]">
                        <div className="bg-green-200 w-[90px] h-[24px]"/> 
                    </div>
                </div>
                <div className="flex items-center gap-[8px]">
                    <p className="text-black-100">Clay</p>
                    <div className="bg-gray-300 w-[136px] h-[24px]">
                        <div className="bg-orange-400 w-[100px] h-[24px]"/> 
                    </div>
                </div>
            </div>
        </div>
    );
}