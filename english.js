let currentScore = 0;
let currentQuestionIndex = 0;
let timeLeft = 30; 
let timerInterval;
let selectedSubject = "English";

const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const startButton = document.getElementById("start-btn");
const leaderboardElement = document.getElementById("leaderboard");
const playerListElement = document.getElementById("player-list");

const hardcodedQuestions = [
    { question: "What is the past tense of 'run'?", options: ["Ran", "Runned", "Run", "Running"], correct: 0 },
    { question: "Which sentence is correct?", options: ["She don't like apples.", "She doesn't like apples.", "She don't likes apples.", "She doesn't likes apples."], correct: 1 },
    { question: "What is the plural of 'child'?", options: ["Children", "Childs", "Childer", "Childes"], correct: 0 },
    { question: "Which of these is a compound sentence?", options: ["I like tea.", "She likes coffee and tea.", "I went to the store, and I bought bread.", "The cat is sleeping."], correct: 2 },
    { question: "Which word is an antonym of 'difficult'?", options: ["Easy", "Hard", "Complex", "Complicated"], correct: 0 },
    { question: "What does the word 'benevolent' mean?", options: ["Evil", "Kind-hearted", "Angry", "Indifferent"], correct: 1 },
    { question: "Which of the following is a possessive adjective?", options: ["My", "I", "Mine", "Me"], correct: 0 },
    { question: "Which of the following is a question word?", options: ["Run", "Quickly", "Where", "Good"], correct: 2 },
    { question: "Which of these is an example of a simile?", options: ["He is a lion.", "She is as fast as a cheetah.", "The wind is strong.", "It is raining heavily."], correct: 1 },
    { question: "Which sentence is in the passive voice?", options: ["The teacher teaches the class.", "The class is taught by the teacher.", "I read the book.", "She is reading the book."], correct: 1 },
    { question: "What is the meaning of the idiom 'break the ice'?", options: ["To end a relationship", "To start a conversation", "To make someone angry", "To freeze a drink"], correct: 1 },
    { question: "Which is a synonym for 'happy'?", options: ["Sad", "Angry", "Joyful", "Tired"], correct: 2 },
    { question: "What is the past tense of 'go'?", options: ["Went", "Gone", "Goes", "Going"], correct: 0 },
    { question: "Which sentence is correct?", options: ["Him and I went to the store.", "He and I went to the store.", "I and he went to the store.", "Me and him went to the store."], correct: 1 },
    { question: "What type of word is 'quickly'?", options: ["Adverb", "Noun", "Adjective", "Verb"], correct: 0 },
    { question: "Which of the following sentences contains a metaphor?", options: ["She is as fast as a cheetah.", "Time is a thief.", "He is running quickly.", "The flowers smell sweet."], correct: 1 },
    { question: "Which word is a synonym for 'strong'?", options: ["Weak", "Powerful", "Gentle", "Feeble"], correct: 1 },
    { question: "What is the subject of the sentence: 'The dog barked loudly'?", options: ["Barked", "Loudly", "The dog", "Dog barked"], correct: 2 },
    { question: "What is the plural form of 'mouse'?", options: ["Mices", "Mice", "Mouses", "Mouse"], correct: 1 },
    { question: "Which of the following is a proper noun?", options: ["city", "car", "John", "dog"], correct: 2 },
    { question: "Which sentence is an example of a conditional sentence?", options: ["If it rains, we will stay home.", "I like to swim.", "She is my best friend.", "He went to the store."], correct: 0 },
    { question: "Which of these is an example of alliteration?", options: ["Peter Piper picked a peck of pickled peppers.", "She sells seashells by the seashore.", "The quick brown fox jumped over the lazy dog.", "He is a slow and steady worker."], correct: 0 },
    { question: "Which of these is a complex sentence?", options: ["I went to the store.", "I went to the store and bought some milk.", "Although I was tired, I went to the store.", "She plays the piano every day."], correct: 2 },
    { question: "What does the word 'pessimistic' mean?", options: ["Hopeful", "Negative", "Optimistic", "Excited"], correct: 1 },
    { question: "Which of these is an example of a preposition?", options: ["Quickly", "Under", "Happy", "Run"], correct: 1 },
    { question: "Which of these is a conjunction?", options: ["And", "Quickly", "Under", "Beautiful"], correct: 0 },
    { question: "Which sentence is correct?", options: ["I have less books than you.", "I have fewer books than you.", "I have less book than you.", "I have fewer book than you."], correct: 1 },
    { question: "Which sentence uses the correct form of 'there'?", options: ["Their is a cat on the roof.", "There is a cat on the roof.", "They're is a cat on the roof.", "There are a cat on the roof."], correct: 1 },
    { question: "Which of these words is an adjective?", options: ["Happy", "Jump", "Run", "Quickly"], correct: 0 },
    { question: "Which word is a synonym for 'quick'?", options: ["Fast", "Slow", "Heavy", "Loud"], correct: 0 },
    { question: "What is the direct object in the sentence: 'She ate the apple'?", options: ["She", "Ate", "Apple", "The"], correct: 2 },
    { question: "What is the meaning of the idiom 'hit the nail on the head'?", options: ["Make a mistake", "Do something perfectly", "Fix a problem", "Say something irrelevant"], correct: 1 },
    { question: "Which of these is an example of an oxymoron?", options: ["Jumbo shrimp", "Bright night", "Cold heat", "Living dead"], correct: 0 },
    { question: "Which is the correct form of 'to be' in the sentence: 'I ___ happy'?", options: ["Am", "Is", "Are", "Be"], correct: 0 },
    { question: "Which sentence is in future tense?", options: ["She will go to the store tomorrow.", "She went to the store yesterday.", "She is going to the store.", "She goes to the store every day."], correct: 0 },
    { question: "Which sentence uses the word 'effect' correctly?", options: ["The effect of the storm was terrible.", "The storm will affect us tomorrow.", "The effect of the storm will be clear.", "She affects the storm every year."], correct: 0 },
    { question: "What is the comparative form of 'good'?", options: ["Better", "Gooder", "Best", "Well"], correct: 0 },
    { question: "Which of these is an interjection?", options: ["Wow", "Running", "Very", "Quickly"], correct: 0 },
    { question: "Which word is an example of a homophone?", options: ["Right", "Straight", "Bright", "Light"], correct: 0 },
    { question: "Which of the following is a correct sentence?", options: ["Him and I went to the store.", "He and I went to the store.", "I and him went to the store.", "Me and he went to the store."], correct: 1 },
    { question: "What is the superlative form of 'bad'?", options: ["Worst", "Badder", "Baddest", "More bad"], correct: 0 },
    { question: "Which of these is an example of a past perfect sentence?", options: ["She had finished her work before I arrived.", "She finished her work yesterday.", "She is finishing her work now.", "She will finish her work soon."], correct: 0 },
    { question: "Which sentence contains an apostrophe used for possession?", options: ["The dogs barked loudly.", "The dog's bark was loud.", "The dogs' bark was loud.", "The dog barked loud."], correct: 1 },
    { question: "Which word is an example of a synonym for 'small'?", options: ["Tiny", "Big", "Large", "Huge"], correct: 0 },
    { question: "Which of these is a countable noun?", options: ["Milk", "Water", "Apple", "Air"], correct: 2 },
    { question: "Which is the correct form of 'to be' in the sentence: 'They ___ excited'?", options: ["Am", "Is", "Are", "Be"], correct: 2 },
    { question: "What is the synonym for 'difficult'?", options: ["Hard", "Easy", "Simple", "Unclear"], correct: 0 },
    { question: "Which of these is an example of a reflexive pronoun?", options: ["I", "Myself", "You", "Them"], correct: 1 },
    { question: "Which of the following is an example of the future perfect tense?", options: ["She will have finished the work by tomorrow.", "She finishes the work.", "She is finishing the work.", "She has finished the work."], correct: 0 },
    { question: "Who wrote the play 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], correct: 0 },
    { question: "What is the central theme of 'The Great Gatsby'?", options: ["The American Dream", "War and Peace", "The importance of family", "Survival"], correct: 0 },
    { question: "What type of figurative language is used in the phrase 'The wind whispered through the trees'?", options: ["Simile", "Metaphor", "Personification", "Alliteration"], correct: 2 },
    { question: "What is the meaning of the word 'elusive'?", options: ["Easy to understand", "Difficult to catch or define", "Friendly", "Sharp"], correct: 1 },
    { question: "What is the main idea of a story called?", options: ["Plot", "Theme", "Setting", "Character"], correct: 1 },
    { question: "Which of these words is a synonym for 'important'?", options: ["Minor", "Trivial", "Significant", "Unnecessary"], correct: 2 },
    { question: "Which of these is a simile?", options: ["The cat is a lion.", "The cat is like a lion.", "The lion is in the cat.", "The cat roars like a lion."], correct: 1 },
    { question: "What does the idiom 'burning the midnight oil' mean?", options: ["Working late into the night", "Reading books by candlelight", "Wasting time", "Feeling tired"], correct: 0 },
    { question: "Who is the protagonist in the story 'To Kill a Mockingbird'?", options: ["Atticus Finch", "Scout Finch", "Tom Robinson", "Jem Finch"], correct: 1 },
    { question: "What is the term for the highest point of a story's plot?", options: ["Climax", "Exposition", "Resolution", "Conflict"], correct: 0 },
    { question: "Which of these is an example of irony?", options: ["A fire station burning down", "A teacher winning a prize", "A dog chasing its tail", "A person singing a happy song"], correct: 0 },
    { question: "In literature, what is a metaphor?", options: ["A direct comparison between two unlike things", "A type of rhyme", "A repeated phrase", "A character's internal conflict"], correct: 0 },
    { question: "What is the meaning of the word 'candid'?", options: ["Friendly", "Dishonest", "Secretive", "Truthful and open"], correct: 3 },
    { question: "Which sentence uses an adjective correctly?", options: ["The blue sky is clear.", "He ran quickly to the store.", "She sings beautifully.", "They arrived late to the party."], correct: 0 },
    { question: "What is the main character in a story called?", options: ["Protagonist", "Antagonist", "Hero", "Villain"], correct: 0 },
    { question: "Which of these sentences is an example of a metaphor?", options: ["The world is a stage.", "She is as brave as a lion.", "The wind whispered through the trees.", "His smile is bright as the sun."], correct: 0 },
    { question: "What is the purpose of a thesis statement in an essay?", options: ["To introduce the topic", "To summarize the conclusion", "To state the main argument", "To list the sources used"], correct: 2 },
    { question: "Which of these words means 'to examine closely'?", options: ["Inspect", "Ignore", "Admire", "Judge"], correct: 0 },
    { question: "Which of the following is a symbol for love?", options: ["A dove", "A heart", "A ring", "A crown"], correct: 1 },
    { question: "Which of these is an example of personification?", options: ["The sun smiled down on us.", "The sky is blue.", "She is as tall as a tree.", "The chair was very uncomfortable."], correct: 0 },
    { question: "What is the term for the time and place in which a story occurs?", options: ["Setting", "Theme", "Character", "Plot"], correct: 0 },
    { question: "Which of the following is an example of an allusion?", options: ["He was a real Romeo with the ladies.", "She ran quickly to the store.", "The mountain was covered with snow.", "They were best friends."], correct: 0 },
    { question: "What does the word 'ephemeral' mean?", options: ["Permanent", "Lasting a short time", "Dull", "Eternal"], correct: 1 },
    { question: "Which of these is a genre of fiction?", options: ["Poetry", "Biography", "Fantasy", "Nonfiction"], correct: 2 },
    { question: "What is the term for a recurring element in a story?", options: ["Theme", "Motif", "Plot", "Conflict"], correct: 1 },
    { question: "Which word is an example of an adverb?", options: ["Quickly", "Run", "Bright", "Book"], correct: 0 },
    { question: "What is the meaning of the idiom 'a penny for your thoughts'?", options: ["Share your thoughts", "Keep quiet", "Save money", "Think carefully"], correct: 0 },
    { question: "What is the role of the antagonist in a story?", options: ["To support the protagonist", "To create conflict", "To resolve the conflict", "To provide a moral lesson"], correct: 1 },
    { question: "What is the meaning of the word 'rejuvenate'?", options: ["To make something old", "To make something new again", "To destroy", "To improve quality"], correct: 1 },
    { question: "Which of the following is an example of an onomatopoeia?", options: ["Buzz", "Loud", "Bright", "Soft"], correct: 0 },
    { question: "Which type of figurative language involves exaggeration?", options: ["Hyperbole", "Metaphor", "Simile", "Personification"], correct: 0 },
    { question: "What is the primary purpose of a topic sentence in a paragraph?", options: ["To explain the main idea", "To introduce a new character", "To conclude the paragraph", "To describe an event"], correct: 0 },
    { question: "What is a common theme in fables?", options: ["Friendship", "Love", "Moral lessons", "War"], correct: 2 },
    { question: "What does the term 'cliffhanger' refer to in literature?", options: ["A suspenseful ending", "A description of a mountain", "A surprising plot twist", "A character's action"], correct: 0 },
    { question: "Which of the following is an example of dramatic irony?", options: ["The reader knows something that the character doesn't", "A character is very smart", "The plot is predictable", "A character speaks directly to the reader"], correct: 0 },
    { question: "What is the meaning of the word 'benevolent'?", options: ["Evil", "Kind", "Angry", "Dishonest"], correct: 1 },
    { question: "What type of writing is 'To Kill a Mockingbird'?", options: ["Novel", "Short story", "Poem", "Play"], correct: 0 },
    { question: "What is a 'flashback' in a story?", options: ["A break in the story where past events are shown", "A sudden plot twist", "The climax of the story", "A flash of light in the story"], correct: 0 },
    { question: "Which of the following is a metaphor?", options: ["The classroom was a zoo.", "He is like a lion.", "The wind is soft.", "She is as fast as a cheetah."], correct: 0 },
    { question: "What is the meaning of the word 'vivid'?", options: ["Dull", "Bright and clear", "Boring", "Faint"], correct: 1 },
    { question: "What is the term for the underlying message or lesson in a literary work?", options: ["Theme", "Plot", "Setting", "Character"], correct: 0 },
    { question: "What does the word 'altruistic' mean?", options: ["Selfish", "Kind and generous", "Unreliable", "Aggressive"], correct: 1 },
    { question: "What is the definition of 'omniscient'?", options: ["All-knowing", "Limited in perspective", "First-person perspective", "Outside view"], correct: 0 },
    { question: "Which of these words is an antonym for 'brave'?", options: ["Fearless", "Cowardly", "Bold", "Courageous"], correct: 1 },
    { question: "What does 'unreliable narration' refer to in literature?", options: ["A narrator who is trustworthy", "A narrator whose credibility is compromised", "A character who cannot speak", "A narrator who is omniscient"], correct: 1 },
    { question: "What is an allegory?", options: ["A story with hidden meanings", "A short story", "A factual account", "A realistic novel"], correct: 0 }
];

let allQuestions = JSON.parse(localStorage.getItem("quizQuestions")) || {};
let storedQuestions = allQuestions["English"];

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
    timeLeft = 10; 
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

    // Get player data from localStorage
    const playerName = localStorage.getItem("playerName") || "Player";
    const playerPhoto = localStorage.getItem("playerPhoto") || "";

    // Update player data with current score
    let playerList = JSON.parse(localStorage.getItem("playerList")) || [];
    const existingIndex = playerList.findIndex(p => p.name === playerName);

    // If the player is not already in the list, add them; otherwise, update their score
    if (existingIndex === -1) {
        playerList.push({ name: playerName, score: Number(currentScore), photo: playerPhoto });
    } else {
        playerList[existingIndex].score = Number(currentScore); // Update score if already exists
    }

    // Save the updated player list back to localStorage
    localStorage.setItem("playerList", JSON.stringify(playerList));

    // Display the leaderboard and player list
    displayLeaderboard();
    displayPlayerList();

    // Show the start button again to allow a new quiz
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
