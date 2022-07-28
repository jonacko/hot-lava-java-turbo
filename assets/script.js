// Const = constant, the value cannot be redeclared/reassigned 
// As a general rule declare a variable with Const unless you know the value will change
// Below declares the const objects which are the buttons to make the game playable
// Q: why does 'startButton' not need 'Element' after it?

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

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
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    //currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
showQuestion()
}

// This bit doesn't appear to work as the questions don't show and the 'next' button is hidden

// function nextQuestion() {
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// Question 1 buttons - choice one displays but the rest don't

function showQuestion() {
console.log(questions[0])
console.log(questions[0].choices)
let questionEl=document.getElementById('question')
console.log(questionEl)
questionEl.textContent=questions[0].question

let choiceOneEl = document.getElementById('btn-1')
console.log(choiceOneEl)
choiceOneEl.textContent=questions[0].choices[0]

let choiceTwoEl = document.getElementById('btn-2')
console.log(choiceTwoEl)
choiceTwoEl.textContent=questions[0].choices[1]

let choiceThreeEl = document.getElementById('btn-3')
console.log(choiceThreeEl)
choiceThreeEl.textContent=questions[0].choices[2]

let choiceFourEl = document.getElementById('btn-4')
console.log(choiceFourEl)
choiceFourEl.textContent=questions[0].choices[3]

}

function selectAnswer() {
let answerEl=document.getElementById('answer-buttons') 
    
}

// When an answer is clicked the 'next' button shows

answerButtonsElement.addEventListener('click', questionAnswered)

function questionAnswered() {
    console.log('Question 1 Answered')
    nextButton.classList.remove('hide')


}

nextButton.addEventListener('click', nextQuestion)

function nextQuestion() {
    console.log('Question 2')
    nextButton.classList.add('hide')

}


// The below are the questions.  Currently don't work!
// Q: how do I add another question?

const questions = [
    {
        question: 'What does CSS stand for?',
        choices: ['Cascading Style Sheets', 'Computer Syntax Selectors', 'Q1 choice C', 'Q1 choice D'],
        correctAnswer: 'Cascading Style Sheets'

    }, 
    {
        question: 'This is question 2',
        choices: ['Q2 choice A', 'Q2 choice B', 'Q2 choice C', 'Q2 choice D'],
        correctAnswer: 'Q2 choice A'
    },
    {
        question: 'This is question 3',
        choices: ['Q3 choice A', 'Q3 choice B', 'Q3 choice C', 'Q3 choice D'],
        correctAnswer: 'Q3 choice A'
    },
    {
        question: 'This is question 4',
        choices: ['Q4 choice A', 'Q4 choice B', 'Q4 choice C', 'Q4 choice D'],
        correctAnswer: 'Q3 choice A'
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4


