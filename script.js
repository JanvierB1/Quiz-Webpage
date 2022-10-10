var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')

var questionContainerElement = document.getElementById
('question-container')

var questionEl = document.getElementById('question')
var answerButtonEl = document.getElementById('answer-button')

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex ++
    nextQuestion()
})

function startGame () {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionsIndex = 0
questionContainerElement.classList.remove('hide')
nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestions(shuffledQuestions[currentQuestionsIndex]);
}

function showQuestions(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild
        (answerButtonEl.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
       nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('Correct')
    element.classList.remove('wrong')
}


var questions =[
    {
       question:'What does WWW stand for?',
       answers: [
        {text:  'World Wide Web', correct: true },
        {text:  'Web World Wide', correct: false },
        {text:  'Wide Web World', correct: false},
        {text:  'World Web Wide', correct: false}
       ]
},
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]