// Const = constant, the value cannot be redeclared/reassigned 
// As a general rule declare a variable with Const unless you know the value will change
// Below declares the const objects which are the buttons to make the game playable
// Q: why does 'startButton' not need 'Element' after it?

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// Don't know what this does or how it works!
// Q: what is 'let'?  How is it different to Const?

let shuffledQuestions, currentQuestionIndex


// The below starts the game when the button is clicked (Event listener)
// Q: what is 'classList.add'?

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')

    // 
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()

}

// This bit doesn't appear to work as the questions don't show and the 'next' button is hidden

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innterText = question.question

}

function selectAnswer() {

    
}

// The below are the questions.  Currently don't work!
// Q: how do I add another question?

const questions = [
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Computer Syntax Selectors', correct: false }
]
    }
]

