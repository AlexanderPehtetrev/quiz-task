const startWrapper = document.querySelector(".start-wrapper");
const quizWrapper = document.querySelector(".quiz-wrapper");
const startButton = document.querySelector(".start-button");
const questionHeading = document.querySelector(".question-heading");
const resultHeading = document.querySelector(".result-heading");
const buttons = document.querySelectorAll(".answer-row button");

let overallCounter = 0;
let correctCounter = 0;
let wrongCounter = 0;
let answer=0;
buttons.forEach((button) => {
    button.addEventListener("click", countAnswers(button));
})

function countAnswers(button) {
    return function () {
     overallCounter += 1;  
     
     if (String(answer) === button.innerText) {
        correctCounter += 1;
     } else {
        wrongCounter += 1;
     }
    }
}

function showResults () {
    quizWrapper.classList.add("hide");
    startWrapper.classList.remove("hide");
    resultHeading.classList.remove("hide");
    resultHeading.innerText = `overall answers: ${overallCounter}, correct: ${correctCounter}, wrong: ${wrongCounter}, `;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateCorrectButton(answer) {

    

    buttons.forEach ((button) => {
        button.addEventListener("click", generateQuastion);

        let value = getRandomInt(100);
        while (value === answer) {
            value = getRandomInt(100);
        }
        button.innerText = value;

     button.classList.remove("correct-button");
     button.classList.add("wrong-button");
    })

    const index = getRandomInt(buttons.length);
    const correctButton = buttons[index];
    correctButton.innerText = answer;
    correctButton.classList.remove("wrong-button");
    correctButton.classList.add("correct-button");
}

function startQuiz() {
 overallCounter = 0;
 correctCounter = 0;
 wrongCounter = 0;
startWrapper.classList.add("hide");
quizWrapper.classList.remove("hide");
generateQuastion();
setTimeout(showResults, 10000);
}


function generateSign() {
    if (getRandomInt(2) == 0) {
        return "-"
    }
    else {
        return "+"
    }
}

function generateQuastion() {
    const number1 = getRandomInt(50);
    const number2 = getRandomInt(50);
    const sign = generateSign();
    
    if (sign === "+") {
         answer = number1 + number2
    }
    else {
        answer = number1 - number2
    }

    questionHeading.innerText = `${number1} ${sign} ${number2}`;
    generateCorrectButton(answer)
}

startButton.addEventListener("click", startQuiz);