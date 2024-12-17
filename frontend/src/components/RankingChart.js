import React from 'react'

function RankingChart(props) {
    const { playerDetails } = props;
    
    const years = Object.keys(playerDetails.rankingChart).map(Number);
    const ranks = Object.values(playerDetails.rankingChart);

    const chartWidth = 400;
    const chartHeight = 200;
    const padding = 20;

    const minRank = Math.min(...ranks);
    const maxRank = Math.max(...ranks);

    const xScale = (chartWidth - 2 * padding) / (years.length - 1);
    const yScale = (chartHeight - 2 * padding) / (maxRank - minRank);

    const points = years
        .map((year, index) => {
            const x = padding + index * xScale;
            const y = padding + (maxRank - playerDetails.rankingChart[year]) * yScale;
            return `${x},${y}`;
        })
        .join(" ");


    return (
        <div id="rankingchart__container">
            <svg
                id="line__chart"
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            >
                <line
                    x1={padding}
                    y1={chartHeight - padding}
                    x2={chartWidth - padding}
                    y2={chartHeight - padding}
                    stroke="#333"
                    strokeWidth="2"
                />
                <line
                    x1={padding}
                    y1={padding}
                    x2={padding}
                    y2={chartHeight - padding}
                    stroke="#333"
                    strokeWidth="2"
                />

                <polyline
                    fill="none"
                    stroke="#0116D3"
                    strokeWidth="2"
                    points={points}
                />
            </svg>
        </div>
    )
}

export default RankingChart