import { questions } from "./questions.js";

// Pages
const suffix = ['one', 'two', 'three', 'four', 'five', 'six'];

let pageElement = document.querySelector('.page-'+suffix[0]);
let questionElement = document.querySelector('#question-'+suffix[0]);
let answerButton = document.querySelector('#answer-buttons'+suffix[0]);

let currentQuestion = 0;
let currentPage = 0;

export default function start() {
    showQuestion();
};

function showQuestion() {

    for (let i = 0; i <= questions.length; i++) {

        currentQuestion = questions[i];
        questionElement = document.querySelector('#question-'+suffix[i]);
        answerButton = document.querySelector('#answer-buttons-'+suffix[i]);
        questionElement.innerHTML = currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerHTML = answer.text;
            button.classList.add('btn__answer');
            answerButton.appendChild(button);
    
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectedAnswer);
        })
    }
};

function selectedAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        selectedBtn.setAttribute('disabled', 'true');
        nextPage(currentPage);
        currentPage++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
}

function nextPage(page) {
    for (let i = 0; i < suffix.length; i++) {
        pageElement = document.querySelector('.page-'+suffix[page]);

        switch(pageElement.className) {
            case 'page page-one':
                pageElement.classList.add('visible')
                break;
            case 'page page-two':
                pageElement.classList.add('visible')
                break;
            case 'page page-three':
                pageElement.classList.add('visible')
                break;
            case 'page page-four':
                pageElement.classList.add('visible')
                break;
            case 'page page-five':
                pageElement.classList.add('visible')
                break;
            case 'page page-six':
                pageElement.classList.add('visible')
                break;
            default:
                console.log(pageElement.className)
        }
    }
}
