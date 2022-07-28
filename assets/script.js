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
let index=0;




//Timer

const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown()  {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${seconds}`;
    time--;
}

//Hides the timer before start button is pressed

countdownEl.classList.add('hide')



// The below starts the game when the button is clicked (Event listener)

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    countdownEl.classList.remove('hide')

    questionContainerElement.classList.remove('hide')
showQuestion()
}


// Questions and correct answers

function showQuestion() {
console.log(questions[0])
console.log(questions[0].choices)
let questionEl=document.getElementById('question')
console.log(questionEl)
questionEl.textContent=questions[index].question

let choiceOneEl = document.getElementById('btn-1')
console.log(choiceOneEl)
choiceOneEl.textContent=questions[index].choices[0]

let choiceTwoEl = document.getElementById('btn-2')
console.log(choiceTwoEl)
choiceTwoEl.textContent=questions[index].choices[1]

let choiceThreeEl = document.getElementById('btn-3')
console.log(choiceThreeEl)
choiceThreeEl.textContent=questions[index].choices[2]

let choiceFourEl = document.getElementById('btn-4')
console.log(choiceFourEl)
choiceFourEl.textContent=questions[index].choices[3]


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
    nextButton.classList.add('hide');
    index++
    showQuestion();

}


// The below are the questions.  Currently don't work!
// Q: how do I add another question?

const questions = [
    {
        question: 'What does CSS stand for?',
        choices: ['Cascading Style Sheets', 'Computer Syntax Selectors', 'Crypto Currency Savings', 'Cherry Chocolate Sundae'],
        correctAnswer: 'Cascading Style Sheets'

    }, 
    {
        question: 'Which of these is a programming language?',
        choices: ['Cobra', 'Viper', 'Python', 'Black Mamba'],
        correctAnswer: 'Python'
    },
    {
        question: 'In HTML, the acronym DOM precedes which type of foliage?',
        choices: ['Bush', 'Vine', 'Plant', 'Tree'],
        correctAnswer: 'Tree'
    },
    {
        question: 'How fun is Javascript?',
        choices: ['So fun', 'So so fun', 'So so so fun', 'The most fun of all time'],
        correctAnswer: 'The most fun of all time'
    }
]

// for (const choices=0; choices < questions.length; choices++){

// if(response==questions[choices].correctAnswer){
//     score++;

// }

// ]
