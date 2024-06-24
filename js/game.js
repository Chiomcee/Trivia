// Questions data
const questions = {
science: [
    {
        question: "What is the chemical symbol for water?",
        answers: ["H2O", "CO2", "O2", "H2"],
        correct: 0
    },
    {
        question: "What planet is known as the Red Planet?",
        answers: ["Mars", "Jupiter", "Saturn", "Venus"],
        correct: 0
    },
    {
        question: "What is the speed of light?",
        answers: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "3,000 km/s"],
        correct: 0
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correct: 0
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
        correct: 0
    }
],
history: [
    {
        question: "Who was the first president of the United States?",
        answers: ["George Washington", "Thomas Jefferson", "John Adams", "James Madison"],
        correct: 0
    },
    {
        question: "In which year did the Titanic sink?",
        answers: ["1912", "1905", "1918", "1925"],
        correct: 0
    },
    {
        question: "Who discovered America?",
        answers: ["Christopher Columbus", "Leif Erikson", "Amerigo Vespucci", "Ferdinand Magellan"],
        correct: 0
    },
    {
        question: "What was the ancient Egyptian writing system called?",
        answers: ["Hieroglyphics", "Cuneiform", "Sanskrit", "Alphabet"],
        correct: 0
    },
    {
        question: "Who was the first man to walk on the moon?",
        answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        correct: 0
    }
],
general: [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "How many continents are there?",
        answers: ["7", "5", "6", "8"],
        correct: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        correct: 0
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        correct: 0
    },
    {
        question: "What is the smallest country in the world?",
        answers: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
        correct: 0
    }
]
};

let currentCategory;
let currentQuestionIndex = 0; // Default category, change this based on user's choice
const totalQuestions = 5; // Total questions to be asked
let timer;

function loadQuestion() {
const question = questions[currentCategory][currentQuestionIndex];
document.getElementById('question-text').textContent = question.question;

const answersContainer = document.getElementById('answers');
answersContainer.innerHTML = '';
question.answers.forEach((answer, index) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = 'answer' + (index + 1);
    input.name = 'answer';
    input.value = index;

    const label = document.createElement('label');
    label.setAttribute('for', 'answer' + (index + 1));
    label.textContent = answer;

    answersContainer.appendChild(input);
    answersContainer.appendChild(label);
    answersContainer.appendChild(document.createElement('br'));
});
}

function handleSubmit(event) {
event.preventDefault();

const selectedAnswer = document.querySelector('input[name="answer"]:checked');
if (selectedAnswer) {
    const isCorrect = questions[currentCategory][currentQuestionIndex].correct == selectedAnswer.value;
    if (isCorrect) {
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions && currentQuestionIndex < questions[currentCategory].length) {
        loadQuestion();
        resetTimer();
    } else {
        window.location.href = './point_redemption.html';
    }
} else {
    alert('Please select an answer!');
}
}

function resetTimer() {
clearInterval(timer);
let timeLeft = 10;
document.getElementById('time').textContent = timeLeft;
timer = setInterval(() => {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert('Time\'s up!');
        handleSubmit(new Event('submit')); // Automatically submit when time is up
    }
}, 1000);
}

window.onload = function () {
currentCategory = localStorage.getItem('selectedCategory') || 'general'; // Get the category from localStorage or default to 'general'
loadQuestion();
resetTimer();
};

