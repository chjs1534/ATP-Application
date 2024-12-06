const player1Stats = ["91%", "72%", "63%", "7", "0", "2", "25", "186cm", "83kg"]

const matches = 
    [
        {
            player1Name: "Francis Tiafoe",
            player2Name: "Jannik Sinner",
            player1Rank: "Rank 3",
            player2Rank: "Rank 5",
            tournament: "Wimbledon",
            round: "R16",
            date: "03/11/24",
            result: "Loss",
            time: "182 minutes",
            score: "6-3 4-6 6-2"
        },
        {
            player1Name: "Francis Tiafoe",
            player2Name: "Taylor Fritz",
            player1Rank: "Rank 3",
            player2Rank: "Rank 5",
            tournament: "Wimbledon",
            round: "R32",
            date: "03/11/24",
            result: "Win",
            time: "120 minutes",
            score: "6-3 6-4"
        },
        {
            player1Name: "Francis Tiafoe",
            player2Name: "Jannik Sinner",
            player1Rank: "Rank 3",
            player2Rank: "Rank 5",
            tournament: "Wimbledon",
            round: "R16",
            date: "03/11/24",
            result: "Loss",
            time: "182 minutes",
            score: "6-3 4-6 6-2"
        },
        {
            player1Name: "Francis Tiafoe",
            player2Name: "Taylor Fritz",
            player1Rank: "Rank 3",
            player2Rank: "Rank 5",
            tournament: "Wimbledon",
            round: "R32",
            date: "03/11/24",
            result: "Win",
            time: "120 minutes",
            score: "6-3 6-4"
        },
        {
            player1Name: "Francis Tiafoe",
            player2Name: "Jannik Sinner",
            player1Rank: "Rank 3",
            player2Rank: "Rank 5",
            tournament: "Wimbledon",
            round: "R16",
            date: "03/11/24",
            result: "Loss",
            time: "182 minutes",
            score: "6-3 4-6 6-2"
        },
        {
            player1Name: "Francis Tiafoe",
            player2Name: "Taylor Fritz",
            player1Rank: "Rank 3",
            player2Rank: "Rank 5",
            tournament: "Wimbledon",
            round: "R32",
            date: "03/11/24",
            result: "Win",
            time: "120 minutes",
            score: "6-3 6-4"
        }
    ]

// General Player Stats
const statsElements = document.querySelectorAll(".stats__text");
for (let i = 0; i < statsElements.length; i++) {
    statsElements[i].innerHTML += player1Stats[i];
}

// Match Stats
const updateElements = (classVariablePairs) => {
    classVariablePairs.forEach(({ className, variable }) => {
        const elements = document.querySelectorAll(className);
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = matches[i][variable];
        }
    });
};

updateElements([
    { className: ".player1__name", variable: "player1Name" },
    { className: ".player2__name", variable: "player2Name" },
    { className: ".player1__rank", variable: "player1Rank" },
    { className: ".player2__rank", variable: "player2Rank" },
    { className: ".match__tournament", variable: "tournament" },
    { className: ".match__date", variable: "date" },
    { className: ".match__result", variable: "result" },
    { className: ".match__length", variable: "time" },
    { className: ".match__round", variable: "round" },
    { className: ".match__score", variable: "score" },
]);


