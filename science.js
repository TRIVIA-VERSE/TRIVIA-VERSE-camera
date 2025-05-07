let currentScore = 0;
let currentQuestionIndex = 0;
let timeLeft = 30; 
let timerInterval;
let selectedSubject = "Science";

const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const startButton = document.getElementById("start-btn");
const leaderboardElement = document.getElementById("leaderboard");
const playerListElement = document.getElementById("player-list");

const hardcodedQuestions = [
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "CH4"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        correct: 2
    },
    {
        question: "What is the main gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correct: 2
    },
    {
        question: "Who proposed the theory of evolution by natural selection?",
        options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Marie Curie"],
        correct: 2
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["3,000 km/s", "300,000 km/s", "30,000 km/s", "3,000,000 km/s"],
        correct: 1
    },
    {
        question: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correct: 0
    },
    {
        question: "What is the primary function of red blood cells?",
        options: ["Fight infections", "Transport oxygen", "Clot blood", "Store energy"],
        correct: 1
    },
    {
        question: "Which organ is responsible for pumping blood in the human body?",
        options: ["Liver", "Heart", "Lungs", "Kidney"],
        correct: 1
    },
    {
        question: "What is the process by which plants make food?",
        options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
        correct: 1
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
        correct: 2
    },
    {
        question: "What is the largest planet in the Solar System?",
        options: ["Earth", "Saturn", "Jupiter", "Mars"],
        correct: 2
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["0°C", "50°C", "100°C", "200°C"],
        correct: 2
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
        correct: 0
    },
    {
        question: "What is the process of converting a liquid to a gas called?",
        options: ["Condensation", "Evaporation", "Freezing", "Sublimation"],
        correct: 1
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Organ", "Tissue", "Cell", "Atom"],
        correct: 2
    },
    {
        question: "What does DNA stand for?",
        options: ["Deoxyribonucleic Acid", "Dinucleotide Acid", "Deoxynitro Acid", "Dynamic Acid"],
        correct: 0
    },
    {
        question: "What is the function of white blood cells?",
        options: ["Transport oxygen", "Store nutrients", "Fight infections", "Produce energy"],
        correct: 2
    },
    {
        question: "What is the Earth's only natural satellite?",
        options: ["Mars", "Venus", "The Moon", "The Sun"],
        correct: 2
    },
    {
        question: "What is the process of water cycling through the environment called?",
        options: ["Carbon cycle", "Nitrogen cycle", "Water cycle", "Oxygen cycle"],
        correct: 2
    },
    {
        question: "What is the study of plants called?",
        options: ["Zoology", "Botany", "Geology", "Ecology"],
        correct: 1
    },
    {
        question: "What is the term for a change in an organism's DNA?",
        options: ["Mutation", "Evolution", "Adaptation", "Selection"],
        correct: 0
    },
    {
        question: "What is the main function of the liver?",
        options: ["Filter blood", "Store oxygen", "Pump blood", "Absorb nutrients"],
        correct: 0
    },
    {
        question: "What does a thermometer measure?",
        options: ["Pressure", "Temperature", "Humidity", "Velocity"],
        correct: 1
    },
    {
        question: "Which type of rock is formed from cooled magma?",
        options: ["Sedimentary", "Igneous", "Metamorphic", "Limestone"],
        correct: 1
    },
    {
        question: "What is the term for the outermost layer of Earth?",
        options: ["Mantle", "Core", "Crust", "Lithosphere"],
        correct: 2
    },
    {
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Heart"],
        correct: 1
    },
    {
        question: "What is the term for animals that eat only plants?",
        options: ["Carnivores", "Herbivores", "Omnivores", "Insectivores"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        correct: 0
    },
    {
        question: "What is the main gas responsible for global warming?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correct: 1
    },
    {
        question: "What is the term for a scientist who studies weather?",
        options: ["Biologist", "Geologist", "Meteorologist", "Oceanographer"],
        correct: 2
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "CH4"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        correct: 2
    },
    {
        question: "What is the main gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correct: 2
    },
    {
        question: "Who proposed the theory of evolution by natural selection?",
        options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Marie Curie"],
        correct: 2
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["3,000 km/s", "300,000 km/s", "30,000 km/s", "3,000,000 km/s"],
        correct: 1
    },
    {
        question: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correct: 0
    },
    {
        question: "What is the primary function of red blood cells?",
        options: ["Fight infections", "Transport oxygen", "Clot blood", "Store energy"],
        correct: 1
    },
    {
        question: "Which organ is responsible for pumping blood in the human body?",
        options: ["Liver", "Heart", "Lungs", "Kidney"],
        correct: 1
    },
    {
        question: "What is the process by which plants make food?",
        options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
        correct: 1
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
        correct: 2
    },
    {
        question: "What is the largest planet in the Solar System?",
        options: ["Earth", "Saturn", "Jupiter", "Mars"],
        correct: 2
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["0°C", "50°C", "100°C", "200°C"],
        correct: 2
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
        correct: 0
    },
    {
        question: "What is the process of converting a liquid to a gas called?",
        options: ["Condensation", "Evaporation", "Freezing", "Sublimation"],
        correct: 1
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Organ", "Tissue", "Cell", "Atom"],
        correct: 2
    },
    {
        question: "What does DNA stand for?",
        options: ["Deoxyribonucleic Acid", "Dinucleotide Acid", "Deoxynitro Acid", "Dynamic Acid"],
        correct: 0
    },
    {
        question: "What is the function of white blood cells?",
        options: ["Transport oxygen", "Store nutrients", "Fight infections", "Produce energy"],
        correct: 2
    },
    {
        question: "What is the Earth's only natural satellite?",
        options: ["Mars", "Venus", "The Moon", "The Sun"],
        correct: 2
    },
    {
        question: "What is the process of water cycling through the environment called?",
        options: ["Carbon cycle", "Nitrogen cycle", "Water cycle", "Oxygen cycle"],
        correct: 2
    },
    {
        question: "What is the study of plants called?",
        options: ["Zoology", "Botany", "Geology", "Ecology"],
        correct: 1
    },
    {
        question: "What is the term for a change in an organism's DNA?",
        options: ["Mutation", "Evolution", "Adaptation", "Selection"],
        correct: 0
    },
    {
        question: "What is the main function of the liver?",
        options: ["Filter blood", "Store oxygen", "Pump blood", "Absorb nutrients"],
        correct: 0
    },
    {
        question: "What does a thermometer measure?",
        options: ["Pressure", "Temperature", "Humidity", "Velocity"],
        correct: 1
    },
    {
        question: "Which type of rock is formed from cooled magma?",
        options: ["Sedimentary", "Igneous", "Metamorphic", "Limestone"],
        correct: 1
    },
    {
        question: "What is the term for the outermost layer of Earth?",
        options: ["Mantle", "Core", "Crust", "Lithosphere"],
        correct: 2
    },
    {
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Heart"],
        correct: 1
    },
    {
        question: "What is the term for animals that eat only plants?",
        options: ["Carnivores", "Herbivores", "Omnivores", "Insectivores"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        correct: 0
    },
    {
        question: "What is the main gas responsible for global warming?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correct: 1
    },
    {
        question: "What is the term for a scientist who studies weather?",
        options: ["Biologist", "Geologist", "Meteorologist", "Oceanographer"],
        correct: 2
    },
    {
        question: "What is the chemical formula for methane?",
        options: ["CO2", "CH4", "C6H12O6", "H2O"],
        correct: 1
    },
    {
        question: "What is the SI unit of energy?",
        options: ["Joule", "Calorie", "Watt", "Newton"],
        correct: 0
    },
    {
        question: "What is the chemical element with the symbol 'Na'?",
        options: ["Nitrogen", "Sodium", "Nickel", "Neon"],
        correct: 1
    },
    {
        question: "What is the force that pulls objects towards the Earth?",
        options: ["Magnetism", "Friction", "Gravity", "Inertia"],
        correct: 2
    },
    {
        question: "Which element is most abundant in Earth's crust?",
        options: ["Iron", "Oxygen", "Silicon", "Aluminum"],
        correct: 1
    },
    {
        question: "What type of energy is stored in an object due to its position?",
        options: ["Kinetic energy", "Thermal energy", "Potential energy", "Chemical energy"],
        correct: 2
    },
    {
        question: "Which gas is essential for human respiration?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        correct: 0
    },
    {
        question: "What is the main component of the Sun?",
        options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
        correct: 1
    },
    {
        question: "What does the Law of Conservation of Mass state?",
        options: ["Mass can be created or destroyed", "Mass remains constant in chemical reactions", "Mass is always lost in reactions", "Mass increases with temperature"],
        correct: 1
    },
    {
        question: "What is the term for a material that does not conduct electricity?",
        options: ["Conductor", "Insulator", "Magnet", "Resistor"],
        correct: 1
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Mercury", "Venus", "Mars"],
        correct: 1
    },
    {
        question: "What is the atomic number of carbon?",
        options: ["1", "6", "12", "8"],
        correct: 1
    },
    {
        question: "What is the unit of frequency?",
        options: ["Hertz", "Watt", "Joule", "Newton"],
        correct: 0
    },
    {
        question: "What is the chemical process used to create energy in the Sun?",
        options: ["Fusion", "Fission", "Combustion", "Respiration"],
        correct: 0
    },
    {
        question: "What is the process by which an organism maintains stable internal conditions?",
        options: ["Homeostasis", "Metabolism", "Evolution", "Reproduction"],
        correct: 0
    },
    {
        question: "What is the process of a solid turning directly into a gas?",
        options: ["Sublimation", "Evaporation", "Condensation", "Freezing"],
        correct: 0
    },
    {
        question: "What is the primary function of the roots in plants?",
        options: ["To produce flowers", "To absorb water and nutrients", "To generate energy", "To produce seeds"],
        correct: 1
    },
    {
        question: "What type of bond involves the sharing of electron pairs between atoms?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
        correct: 1
    },
    {
        question: "Which part of the atom has a positive charge?",
        options: ["Electron", "Neutron", "Proton", "Photon"],
        correct: 2
    },
    {
        question: "What is the main difference between plant and animal cells?",
        options: ["Plant cells have chloroplasts", "Animal cells have cell walls", "Plant cells are larger", "Animal cells lack nuclei"],
        correct: 0
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Si", "Al"],
        correct: 0
    },
    {
        question: "Which of these is a renewable energy source?",
        options: ["Coal", "Natural Gas", "Solar", "Oil"],
        correct: 2
    },
    {
        question: "What is the force that resists the motion of an object through a fluid?",
        options: ["Friction", "Buoyancy", "Gravity", "Drag"],
        correct: 3
    },
    {
        question: "What type of energy is stored in food?",
        options: ["Thermal energy", "Chemical energy", "Mechanical energy", "Electrical energy"],
        correct: 1
    },
    {
        question: "What is the process of cell division that results in two identical daughter cells?",
        options: ["Mitosis", "Meiosis", "Fission", "Fertilization"],
        correct: 0
    },
    {
        question: "What is the main function of chlorophyll in plants?",
        options: ["Absorb sunlight", "Absorb water", "Absorb nutrients", "Transport food"],
        correct: 0
    },
    {
        question: "Which of the following is a non-metal?",
        options: ["Copper", "Iron", "Oxygen", "Gold"],
        correct: 2
    },
    {
        question: "What is the term for a mixture of gases that makes up the Earth's atmosphere?",
        options: ["Air", "Ozone", "Nitrogen", "Smog"],
        correct: 0
    },
    {
        question: "Which planet is known as the Morning Star or Evening Star?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 0
    },
    {
        question: "What is the primary function of the small intestine?",
        options: ["Absorb water", "Digest food", "Absorb nutrients", "Filter blood"],
        correct: 2
    },
    {
        question: "Which law states that energy cannot be created or destroyed, only transformed?",
        options: ["Newton's First Law", "Second Law of Thermodynamics", "Conservation of Energy", "Law of Gravity"],
        correct: 2
    },
    {
        question: "What is the second most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correct: 0
    },
    {
        question: "Which scientist is credited with the discovery of the law of gravity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correct: 0
    },
    {
        question: "What is the process by which plants lose water through their leaves?",
        options: ["Absorption", "Transpiration", "Evaporation", "Condensation"],
        correct: 1
    },
    {
        question: "Which of the following is a characteristic of metals?",
        options: ["Good conductors of heat", "Brittle", "Poor conductors of electricity", "Dull appearance"],
        correct: 0
    },
    {
        question: "What type of energy is associated with an object's motion?",
        options: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"],
        correct: 0
    },
    {
        question: "Which element is the most abundant in the human body?",
        options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
        correct: 0
    },
    {
        question: "What type of radiation is emitted by the Sun?",
        options: ["Radio waves", "Ultraviolet rays", "Gamma rays", "Microwaves"],
        correct: 1
    },
    {
        question: "What is the term for the movement of particles from an area of high concentration to an area of low concentration?",
        options: ["Diffusion", "Osmosis", "Active transport", "Endocytosis"],
        correct: 0
    },
    {
        question: "What is the basic unit of length in the metric system?",
        options: ["Meter", "Centimeter", "Kilometer", "Inch"],
        correct: 0
    },
    {
        question: "What is the element with atomic number 6?",
        options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
        correct: 0
    },
    {
        question: "What is the most common element in the Earth's crust?",
        options: ["Iron", "Oxygen", "Aluminum", "Silicon"],
        correct: 3
    },
    {
        question: "Which of the following is a type of electromagnetic radiation?",
        options: ["Sound waves", "X-rays", "Water waves", "Ocean currents"],
        correct: 1
    },
    {
        question: "What is the term for a scientist who studies rocks and the Earth's crust?",
        options: ["Geologist", "Biologist", "Astronomer", "Physicist"],
        correct: 0
    },
    {
        question: "Which of these is a property of acids?",
        options: ["Bitter taste", "Slippery feel", "Turns litmus paper red", "Turns litmus paper blue"],
        correct: 2
    },
    {
        question: "What is the primary function of the kidneys?",
        options: ["Filter waste from blood", "Pump blood", "Aid digestion", "Produce hormones"],
        correct: 0
    },
    {
        question: "What is the term for the increase in temperature and atmospheric gases due to human activity?",
        options: ["Global warming", "Greenhouse effect", "Climate change", "Ozone depletion"],
        correct: 0
    },
    {
        question: "What is the molecule that carries genetic information?",
        options: ["RNA", "DNA", "Protein", "Enzyme"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a function of the skeletal system?",
        options: ["Support the body", "Produce blood cells", "Store fat", "Filter toxins"],
        correct: 3
    },
    {
        question: "What is the first law of thermodynamics?",
        options: ["Energy cannot be created or destroyed", "Energy always flows downhill", "Energy decreases over time", "Energy can be converted to matter"],
        correct: 0
    },
    {
        question: "What is the term for a mixture in which the components are uniformly distributed?",
        options: ["Solution", "Suspension", "Colloid", "Emulsion"],
        correct: 0
    },
    {
        question: "What is the term for a change in the shape of a rock due to stress?",
        options: ["Erosion", "Metamorphism", "Weathering", "Deformation"],
        correct: 3
    },
    {
        question: "What is the primary function of the circulatory system?",
        options: ["Transport oxygen and nutrients", "Pump blood", "Regulate body temperature", "Help digestion"],
        correct: 0
    },
    {
        question: "What is the symbol for the element potassium?",
        options: ["P", "K", "Po", "Pt"],
        correct: 1
    },
    {
        question: "What is the term for the study of the universe and its celestial bodies?",
        options: ["Astrology", "Geology", "Astronomy", "Meteorology"],
        correct: 2
    },
    {
        question: "Which type of bond involves the transfer of electrons between atoms?",
        options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Metallic bond"],
        correct: 1
    },
    {
        question: "What is the process by which an organism produces offspring?",
        options: ["Reproduction", "Metabolism", "Adaptation", "Evolution"],
        correct: 0
    },
    {
        question: "What is the common name for sodium chloride?",
        options: ["Table salt", "Baking soda", "Lime", "Epsom salt"],
        correct: 0
    },
    {
        question: "Which of the following is a type of physical change?",
        options: ["Burning wood", "Dissolving sugar in water", "Rusting iron", "Cooking an egg"],
        correct: 1
    },
    {
        question: "What is the force that attracts objects toward the center of the Earth?",
        options: ["Friction", "Gravity", "Magnetism", "Electromagnetism"],
        correct: 1
    },
    {
        question: "What is the name of the force that opposes the motion of objects in contact with each other?",
        options: ["Inertia", "Friction", "Gravity", "Magnetism"],
        correct: 1
    }
];

let allQuestions = JSON.parse(localStorage.getItem("quizQuestions")) || {};
let storedQuestions = allQuestions["Science"];

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
