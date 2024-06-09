const questions = {
    general: [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: ["Shakespeare", "Dickens", "Hemingway", "Orwell"],
            correctAnswer: "Shakespeare"
        },
        // Add more general questions here
    ],
    science: [
        {
            question: "What planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the chemical symbol for water?",
            choices: ["H2O", "O2", "CO2", "HO"],
            correctAnswer: "H2O"
        },
        // Add more science questions here
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            choices: ["George Washington", "Thomas Jefferson", "John Adams", "James Madison"],
            correctAnswer: "George Washington"
        },
        {
            question: "In which year did the Titanic sink?",
            choices: ["1912", "1905", "1898", "1923"],
            correctAnswer: "1912"
        },
        // Add more history questions here
    ]
};

function getRandomQuestion(category) {
    const categoryQuestions = questions[category];
    const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    return categoryQuestions[randomIndex];
}
