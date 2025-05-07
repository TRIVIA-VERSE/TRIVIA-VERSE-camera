let currentScore = 0;
let currentQuestionIndex = 0;
let timeLeft = 30; 
let timerInterval;
let selectedSubject = "Math";

const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const startButton = document.getElementById("start-btn");
const leaderboardElement = document.getElementById("leaderboard");
const playerListElement = document.getElementById("player-list");

const hardcodedQuestions = [
    { question: "What is 5 + 3?", options: ["5", "8", "10", "3"], correct: 1 },
    { question: "What is the square root of 16?", options: ["2", "4", "6", "8"], correct: 1 },
    { question: "What is 12 × 6?", options: ["72", "78", "60", "66"], correct: 0 },
    { question: "What is 144 ÷ 12?", options: ["12", "10", "16", "14"], correct: 0 },
    { question: "What is 7 × 9?", options: ["56", "63", "72", "81"], correct: 1 },
    { question: "What is 18 ÷ 3?", options: ["5", "6", "7", "8"], correct: 1 },
    { question: "What is 25 + 17?", options: ["42", "40", "37", "35"], correct: 0 },
    { question: "What is 9²?", options: ["18", "81", "72", "45"], correct: 1 },
    { question: "What is 15 × 8?", options: ["110", "120", "130", "140"], correct: 1 },
    { question: "What is 50 ÷ 5?", options: ["10", "12", "15", "20"], correct: 0 },
    { question: "What is 7 × 7?", options: ["42", "56", "63", "49"], correct: 3 },
    { question: "What is 8 + 12?", options: ["19", "20", "22", "18"], correct: 1 },
    { question: "What is 32 ÷ 8?", options: ["4", "5", "6", "3"], correct: 0 },
    { question: "What is 45 ÷ 9?", options: ["5", "6", "7", "8"], correct: 0 },
    { question: "What is 6 × 11?", options: ["66", "72", "60", "55"], correct: 0 },
    { question: "What is 12 × 5?", options: ["55", "60", "70", "50"], correct: 1 },
    { question: "What is 49 ÷ 7?", options: ["6", "7", "8", "9"], correct: 1 },
    { question: "What is 14 × 3?", options: ["42", "40", "38", "30"], correct: 0 },
    { question: "What is 16 ÷ 4?", options: ["4", "3", "2", "5"], correct: 0 },
    { question: "What is 22 + 19?", options: ["41", "42", "40", "44"], correct: 0 },
    { question: "What is 9 × 8?", options: ["64", "72", "56", "63"], correct: 1 },
    { question: "What is 5 × 12?", options: ["55", "60", "70", "50"], correct: 1 },
    { question: "What is 32 + 18?", options: ["40", "50", "60", "45"], correct: 1 },
    { question: "What is 24 ÷ 6?", options: ["4", "5", "6", "3"], correct: 0 },
    { question: "What is 7 + 15?", options: ["21", "22", "23", "25"], correct: 1 },
    { question: "What is 6 × 10?", options: ["60", "50", "70", "65"], correct: 0 },
    { question: "What is 9 + 14?", options: ["23", "22", "24", "20"], correct: 0 },
    { question: "What is 40 ÷ 8?", options: ["4", "5", "6", "7"], correct: 1 },
    { question: "What is 13 × 3?", options: ["39", "40", "45", "36"], correct: 0 },
    { question: "What is 28 ÷ 7?", options: ["3", "4", "5", "6"], correct: 1 },
    { question: "What is 10 × 12?", options: ["120", "110", "130", "140"], correct: 0 },
    { question: "What is 23 + 11?", options: ["34", "32", "35", "36"], correct: 0 },
    { question: "What is 18 ÷ 6?", options: ["3", "4", "5", "6"], correct: 0 },
    { question: "What is 19 × 5?", options: ["95", "100", "105", "110"], correct: 0 },
    { question: "What is 4 × 5?", options: ["15", "18", "20", "25"], correct: 2 },
    { question: "What is 100 ÷ 10?", options: ["5", "10", "15", "20"], correct: 1 },
    { question: "What is 15 + 9?", options: ["25", "23", "24", "22"], correct: 2 },
    { question: "What is 20 × 2?", options: ["40", "30", "50", "45"], correct: 0 },
    { question: "What is 18 ÷ 3?", options: ["7", "5", "6", "4"], correct: 2 },
    { question: "What is 14 × 6?", options: ["72", "84", "70", "65"], correct: 1 },
    { question: "What is 16 ÷ 2?", options: ["8", "7", "6", "10"], correct: 0 },
    { question: "What is 11 × 11?", options: ["121", "111", "122", "110"], correct: 0 },
    { question: "What is 27 + 8?", options: ["35", "34", "30", "36"], correct: 0 },
    { question: "What is 5 × 5?", options: ["20", "25", "30", "15"], correct: 1 },
    { question: "What is 63 ÷ 9?", options: ["8", "7", "9", "6"], correct: 1 },
    { question: "What is 72 ÷ 8?", options: ["9", "8", "7", "6"], correct: 0 },
    { question: "What is 24 + 16?", options: ["38", "39", "40", "41"], correct: 2 },
    { question: "What is 5 × 15?", options: ["75", "80", "70", "65"], correct: 0 },
    { question: "What is 44 ÷ 4?", options: ["10", "11", "12", "9"], correct: 1 },
    { question: "What is 30 ÷ 6?", options: ["6", "5", "7", "4"], correct: 1 },
    { question: "What is 80 ÷ 10?", options: ["8", "9", "7", "6"], correct: 0 },
    { question: "What is 18 × 2?", options: ["36", "32", "40", "45"], correct: 0 },
    { question: "What is 8 + 13?", options: ["21", "19", "22", "20"], correct: 0},
    { question: "What is 10 × 15?", options: ["150", "140", "130", "120"], correct: 0 },
    { question: "What is 6 × 8?", options: ["48", "40", "50", "45"], correct: 0 },
    { question: "What is 36 ÷ 6?", options: ["6", "7", "8", "9"], correct: 0 },
    { question: "What is 50 ÷ 10?", options: ["4", "5", "6", "7"], correct: 1 },
    { question: "What is 4 + 9?", options: ["12", "13", "14", "15"], correct: 1 },
    { question: "What is the square root of 81?", options: ["7", "8", "9", "10"], correct: 2 },
    { question: "What is 15 × 4?", options: ["60", "58", "56", "55"], correct: 0 },
    { question: "What is 72 ÷ 9?", options: ["8", "7", "6", "5"], correct: 0 },
    { question: "What is 13 + 14?", options: ["26", "27", "28", "29"], correct: 1 },
    { question: "What is 12 ÷ 3?", options: ["4", "5", "3", "6"], correct: 0 },
    { question: "What is 25 × 2?", options: ["50", "48", "55", "52"], correct: 0 },
    { question: "What is 7 + 16?", options: ["24", "23", "21", "22"], correct: 1 },
    { question: "What is 5²?", options: ["25", "20", "22", "30"], correct: 0 },
    { question: "What is 18 + 9?", options: ["28", "27", "26", "25"], correct: 1 },
    { question: "What is 45 ÷ 5?", options: ["8", "9", "10", "7"], correct: 1 },
    { question: "What is 24 × 3?", options: ["72", "68", "76", "74"], correct: 0 },
    { question: "What is 64 ÷ 8?", options: ["7", "8", "9", "10"], correct: 1 },
    { question: "What is 5 × 6?", options: ["30", "35", "40", "25"], correct: 0 },
    { question: "What is 36 ÷ 4?", options: ["9", "8", "7", "6"], correct: 0 },
    { question: "What is 15 + 19?", options: ["33", "32", "34", "31"], correct: 2 },
    { question: "What is 8 × 9?", options: ["70", "72", "75", "78"], correct: 1 },
    { question: "What is 28 ÷ 4?", options: ["7", "8", "6", "5"], correct: 0 },
    { question: "What is 12 × 7?", options: ["84", "86", "80", "75"], correct: 0 },
    { question: "What is 30 ÷ 5?", options: ["5", "6", "7", "8"], correct: 1 },
    { question: "What is 100 ÷ 4?", options: ["25", "30", "35", "40"], correct: 0 },
    { question: "What is 14 + 11?", options: ["24", "25", "26", "27"], correct: 1 },
    { question: "What is 9 × 6?", options: ["54", "53", "56", "52"], correct: 0 },
    { question: "What is 12 ÷ 2?", options: ["5", "6", "7", "8"], correct: 1 },
    { question: "What is 15 + 8?", options: ["22", "23", "24", "21"], correct: 1 },
    { question: "What is 27 ÷ 3?", options: ["9", "8", "7", "6"], correct: 2 },
    { question: "What is 7 × 13?", options: ["90", "91", "92", "93"], correct: 1 },
    { question: "What is 10 + 15?", options: ["23", "24", "25", "26"], correct: 2 },
    { question: "What is 18 ÷ 2?", options: ["9", "8", "7", "10"], correct: 0 },
    { question: "What is 17 × 4?", options: ["68", "69", "70", "65"], correct: 0 },
    { question: "What is 16 + 14?", options: ["30", "32", "33", "34"], correct: 0 },
    { question: "What is 12 × 8?", options: ["96", "98", "100", "94"], correct: 0 },
    { question: "What is 25 ÷ 5?", options: ["5", "6", "7", "8"], correct: 0 },
    { question: "What is 45 + 13?", options: ["57", "58", "59", "60"], correct: 1 },
    { question: "What is 63 ÷ 7?", options: ["8", "9", "10", "7"], correct: 1 },
    { question: "What is 11 × 5?", options: ["55", "50", "60", "45"], correct: 0 },
    { question: "What is 100 ÷ 5?", options: ["20", "25", "30", "15"], correct: 0 },
    { question: "What is 9 × 4?", options: ["35", "36", "37", "38"], correct: 1 },
    { question: "What is 11 + 23?", options: ["34", "35", "36", "33"], correct: 0 },
    { question: "What is 27 + 13?", options: ["40", "41", "42", "43"], correct: 0 },
    { question: "What is 3 × 5?", options: ["15", "10", "12", "14"], correct: 0 },
    { question: "What is 36 ÷ 9?", options: ["4", "5", "6", "7"], correct: 0 },
];

let allQuestions = JSON.parse(localStorage.getItem("quizQuestions")) || {};
let storedQuestions = allQuestions["Math"];

let questions = Array.isArray(storedQuestions)
    ? [...hardcodedQuestions, ...storedQuestions]
    : hardcodedQuestions;

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
let playerList = JSON.parse(localStorage.getItem("playerList")) || [];

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

function startQuiz() {
    currentScore = 0;
    timeLeft = 30; 
    currentQuestionIndex = 0;
    startButton.style.display = "none";
    feedbackElement.textContent = "";
    scoreElement.textContent = `Score: ${currentScore}`;
    timerElement.textContent = `Time: ${formatTime(timeLeft)}`;
    shuffleQuestions();
    showQuestion();
    startTimer();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const correctIndex = question.correct;
    const correctButton = optionsElement.children[correctIndex];
    const selectedButton = optionsElement.children[selectedIndex];

    if (selectedIndex === correctIndex) {
        currentScore++;
        timeLeft += 1;
        feedbackElement.textContent = "🎉 Correct! +1s";
        feedbackElement.style.color = "green";
        selectedButton.style.backgroundColor = "green";
        selectedButton.style.color = "white";
    } else {
        feedbackElement.textContent = "❌ Wrong answer.";
        feedbackElement.style.color = "red";
        selectedButton.style.backgroundColor = "red";
        selectedButton.style.color = "white";
        correctButton.style.backgroundColor = "green";
        correctButton.style.color = "white";
    }

    scoreElement.textContent = `Score: ${currentScore}`;
    timerElement.textContent = `Time: ${formatTime(Math.max(timeLeft, 0))}`;

    Array.from(optionsElement.children).forEach((button) => (button.disabled = true));

    currentQuestionIndex++;
    setTimeout(() => {
        feedbackElement.textContent = "";
        showQuestion();
    }, 1000);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time: ${formatTime(Math.max(timeLeft, 0))}`;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    questionElement.textContent = "Quiz Over!";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = `Your final score is ${currentScore}.`;

    const playerName = localStorage.getItem("playerName") || "Player";
    const playerPhoto = localStorage.getItem("playerPhoto") || "";

    const playerData = {
        name: playerName,
        score: Number(currentScore),
        photo: playerPhoto
    };

    leaderboard.push({ name: playerName, score: currentScore });
    playerList.push(playerData);

    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    localStorage.setItem("playerList", JSON.stringify(playerList));

    displayLeaderboard();
    displayPlayerList();
    startButton.style.display = "block";
}

function displayLeaderboard() {
    leaderboardElement.innerHTML = "<h3>Leaderboard (Top 10)</h3>";
    leaderboard.forEach((entry, index) => {
        const entryElement = document.createElement("div");
        entryElement.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
        leaderboardElement.appendChild(entryElement);
    });
}

function displayPlayerList() {
    playerListElement.innerHTML = "<h3>All Players</h3>";
    playerList.forEach((entry, index) => {
        const entryElement = document.createElement("div");
        entryElement.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
        playerListElement.appendChild(entryElement);
    });
}

startButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    startQuiz();
});

displayLeaderboard();
displayPlayerList();
