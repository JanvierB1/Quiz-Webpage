var startButton = document.getElementById('start-btn')

var questionContainerElement = document.getElementById
('question-container')

startButton.addEventListener('click', startGame)

function startGame () {
console.log("STARTED")
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
nextQuestion()
}

function nextQuestion() {

}

function selectAnswer() {

}

var questions =[
    {
       question:' What does www stand for? ',
       answers: [
        {text: 'World Wide Web', correct: true },
        {text: 'Web World Wide', correct: false }
       ]
    }
]