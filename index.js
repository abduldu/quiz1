document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const exitBtn = document.getElementById('exitBtn');
    const continueBtn = document.getElementById('continueBtn');
    const startQuizBtn = document.getElementById('startQuizBtn');

    // Display the popup
    overlay.style.display = 'block';

    exitBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    continueBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    // Redirect to quiz page when Start Quiz button is clicked
    startQuizBtn.addEventListener('click', function () {
        window.location.href = 'quiz.html';
    });
});

// Define quiz questions and answers
// Define quiz questions and answers
const quizQuestions = [
    {
        question: 'What is the capital of Russia?',
        options: ['Moscow', 'Saint Petersburg'],
        answer: 'Moscow'
    },
    {
        question: 'What is the capital of Pakistan?',
        options: ['Islamabad', 'Karachi'],
        answer: 'Islamabad'
    },
    {
        question: 'Which of the following is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Lion'],
        answer: 'Blue Whale'
    },
    {
        question: 'Who is known as the "Father of Computers"?',
        options: ['Alan Turing', 'Charles Babbage', 'Bill Gates', 'Steve Jobs'],
        answer: 'Charles Babbage'
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe', 'Cu'],
        answer: 'Au'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        answer: 'Mars'
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
        answer: 'Leonardo da Vinci'
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const question = document.getElementById('question');
    const optionsContainer = document.getElementById('optionsContainer');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    
    // Function to load the question
    function loadQuestion() {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        question.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Create and append options
        currentQuestion.options.forEach((option, index) => {
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = 'option';
            optionInput.id = `option${index + 1}`;
            optionInput.value = option;
            
            const optionLabel = document.createElement('label');
            optionLabel.htmlFor = `option${index + 1}`;
            optionLabel.textContent = option;
            
            optionsContainer.appendChild(optionInput);
            optionsContainer.appendChild(optionLabel);
            optionsContainer.appendChild(document.createElement('br'));
        });
    }
    
    // Load the first question
    loadQuestion();
    
    // Event listener for the Next button
    nextBtn.addEventListener('click', function () {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) {
            return;
        }
        
        const userAnswer = selectedOption.value;
        const correctAnswer = quizQuestions[currentQuestionIndex].answer;
        
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
        
        // Move to the next question
        currentQuestionIndex++;
        
        // Check if quiz is completed
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            // Quiz Completed, redirect to results page
            localStorage.setItem('correctAnswers', correctAnswers);
            localStorage.setItem('incorrectAnswers', incorrectAnswers);
            window.location.href = 'results.html';
        }
    });
});

