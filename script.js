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
    question: 'When is the last day of the bootcamp?',
    answers: [
      { text: 'Ehh Who Knows', correct: false },
      { text: 'February 9, 2023', correct: false },
      { text: 'March 9, 2023', correct: true },
      { text: 'Neverrr!', correct: false }
    ]
  },
  {
    question: 'How has the bootcamp been so far?',
    answers: [
      { text: 'FUN!!', correct: true },
      { text: 'Super Stressful!!', correct: true},
      { text: 'Educative', correct: true },
      { text: 'Difficult!', correct: true }
    ]
  },
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hyper Text Processor', correct: false },
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'Hyper Text Multiple Langauge', correct: false },
      { text: 'Hyper Tool Multi Language', correct: false }
    ]
  }
]