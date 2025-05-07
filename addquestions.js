// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const subjectSelect = document.getElementById("subject");
    const questionInput = document.getElementById("question-input");
    const optionA = document.getElementById("option-a");
    const optionB = document.getElementById("option-b");
    const optionC = document.getElementById("option-c");
    const optionD = document.getElementById("option-d");
    const correctAnswer = document.getElementById("correct-answer");
    const addQuestionBtn = document.getElementById("add-question");
    const questionList = document.getElementById("question-list");

    // Load existing questions from localStorage
    let questions = JSON.parse(localStorage.getItem("quizQuestions")) || { "English": [], "Science": [], "Math": [] };

    // Function to save questions to localStorage
    function saveQuestions() {
        localStorage.setItem("quizQuestions", JSON.stringify(questions));
    }

    // Function to display questions
    function displayQuestions() {
        questionList.innerHTML = ""; // Clear previous list
        const selectedSubject = subjectSelect.value;

        if (questions[selectedSubject] && questions[selectedSubject].length > 0) {
            questions[selectedSubject].forEach((q, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${q.question}</strong><br>
                    A: ${q.options[0]} | B: ${q.options[1]} | C: ${q.options[2]} | D: ${q.options[3]}<br>
                    <em>Correct Answer: ${["A", "B", "C", "D"][q.correct]}</em>
                    <button class="delete-btn" data-subject="${selectedSubject}" data-index="${index}">Delete</button>`;
                questionList.appendChild(li);
            });
        }

        // Attach event listeners to delete buttons
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                const subject = this.getAttribute("data-subject");
                const index = parseInt(this.getAttribute("data-index"));
                deleteQuestion(subject, index);
            });
        });
    }

    // Function to add a question
    addQuestionBtn.addEventListener("click", function () {
        const subject = subjectSelect.value;
        const questionText = questionInput.value.trim();
        const options = [optionA.value.trim(), optionB.value.trim(), optionC.value.trim(), optionD.value.trim()];
        const correct = parseInt(correctAnswer.value);

        if (questionText === "" || options.some(opt => opt === "")) {
            alert("Please fill out all fields.");
            return;
        }

        if (!questions[subject]) {
            questions[subject] = [];
        }

        questions[subject].push({ question: questionText, options, correct });
        saveQuestions();
        displayQuestions();

        // Debugging: Check if the data is stored
        console.log("Updated Questions:", JSON.parse(localStorage.getItem("quizQuestions")));

        // Clear input fields
        questionInput.value = "";
        optionA.value = "";
        optionB.value = "";
        optionC.value = "";
        optionD.value = "";
        correctAnswer.value = "0";

        // Reload the page to update quiz
        setTimeout(() => location.reload(), 500);
    });

    // Function to delete a question
    function deleteQuestion(subject, index) {
        questions[subject].splice(index, 1);
        saveQuestions();
        displayQuestions();

        // Debugging: Check if deletion worked
        console.log("After Deletion:", JSON.parse(localStorage.getItem("quizQuestions")));
    }

    // Display initial questions
    subjectSelect.addEventListener("change", displayQuestions);
    displayQuestions();
});
