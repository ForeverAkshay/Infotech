// Quiz data with questions, choices, and correct answers
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal on Earth?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "In which year did the Titanic sink?",
        choices: ["1912", "1920", "1935", "1941"],
        correctAnswer: "1912"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the capital of Japan?",
        choices: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
        correctAnswer: "Tokyo"
    }
];


let currentQuestion = 0;
let score = 0;
let timer;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const choicesContainer = document.getElementById("choices-container");

    questionContainer.textContent = quizData[currentQuestion].question;

    choicesContainer.innerHTML = "";
    for (let i = 0; i < quizData[currentQuestion].choices.length; i++) {
        const choice = document.createElement("div");
        choice.className = "choice";
        choice.textContent = quizData[currentQuestion].choices[i];
        choice.onclick = () => selectAnswer(i);
        choicesContainer.appendChild(choice);
    }
}

function selectAnswer(choiceIndex) {
    const selectedAnswer = quizData[currentQuestion].choices[choiceIndex];
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
        displayFeedback("Correct!", "green");
    } else {
        displayFeedback("Incorrect. The correct answer is: " + correctAnswer, "red");
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function displayFeedback(message, color) {
    const feedbackContainer = document.getElementById("feedback-container");
    feedbackContainer.textContent = message;
    feedbackContainer.style.color = color;
}

function startTimer() {
    let timeLeft = 10;
    timer = setInterval(() => {
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
        timeLeft--;
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    displayQuestion(); // Display the last question before showing the final score
    displayFeedback("Quiz completed! Your final score is: " + score, "black");
    document.getElementById("timer-container").textContent = "Quiz completed!";
    document.getElementById("score-container").textContent = "Final Score: " + score;
}
