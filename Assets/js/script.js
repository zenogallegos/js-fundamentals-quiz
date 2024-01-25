"use strict";

// gave variables to existing HTML elements to manipulate
const main = document.querySelector("main")
const quizCont = document.getElementById("quiz-cont");
const startBtn = document.getElementById("start-btn");
const quizPrompt = document.getElementById("prompt");
const scoresBtn = document.getElementById("scores");
const timerEl = document.getElementById("timer");
const optionsCont = document.getElementById("options-cont");
const newScore = document.createElement("p")
const restartBtn = document.createElement("button")

// Defines prompt text for each question
const promptNum = 'Question #';

const promptOne = promptNum + '1) Which of the following is not a variable type?';
const promptTwo = promptNum + '2) What index number is assigned to the last value in the following array: const arr = [2, 60, 35, 6, 84, 92];?';
const promptThree = promptNum + '3) Which of the following is not neither an intialization, condition, nor afterthought within a “for” statement?';
const promptFour = promptNum + '4) If the following conditional statements were used one after the other, which order of conditional statements would be correct? (assume left to right is top to bottom in actual code)';
const promptFive = promptNum + '5) Which of the following is an array method?';
const promptSix = promptNum + '6) Which bracket type is used to hold array values?';
const promptSeven = promptNum + '7) If we wanted to create an element in javascript, which line of JavaScript code would we use?';
const promptEight = promptNum + '8) Which of the following is used in JavaScript to listen for a certain event such as a click?';
const promptNine = promptNum + '9) How do you nest a an element within another element by manipulating the DOM in JavaScript?';
const promptTen = promptNum + '10) What is the airspeed velocity of an unladen swallow?';

// Creates options for each question
let optionOne = document.createElement("p");
let optionTwo = document.createElement("p");
let optionThree = document.createElement("p");
let optionFour = document.createElement("p");

let currentScore = 0;
let secondsLeft = 60;

// Function to begin the quiz, remove the starting section,
// start the timer, and initialize the first question
function startQuiz(event) {

    timerEl.textContent = "Good Luck!";

    // Sets the timer for the quiz
    const timer = setInterval(function() {
        timerEl.textContent = secondsLeft + " seconds left";
        secondsLeft--;
    
        if(secondsLeft < 0) {
            // Stops execution
            clearInterval(timer);
            timerEl.textContent = "Time's Up!";
            showScores();
        }
    }, 1000);

    quizPrompt.innerHTML = promptOne;
    startBtn.remove();

    optionOne.setAttribute("class", "option");
    optionTwo.setAttribute("class", "option");
    optionThree.setAttribute("class", "option");
    optionFour.setAttribute("class", "option");

    optionOne.innerHTML = "Boolean";
    optionTwo.innerHTML = "Rope";
    optionThree.innerHTML = "String";
    optionFour.innerHTML = "Number";

    optionsCont.appendChild(optionOne);
    optionsCont.appendChild(optionTwo);
    optionsCont.appendChild(optionThree);
    optionsCont.appendChild(optionFour);

    optionTwo.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionFour.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionOne.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionThree.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", questionTwo)
    }
}

function questionTwo() {

    quizPrompt.innerHTML = promptTwo;

    optionOne.innerHTML = "arr[5]";
    optionTwo.innerHTML = "arr[0]";
    optionThree.innerHTML = "arr[1]";
    optionFour.innerHTML = "arr[6]";

    optionOne.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionTwo.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionThree.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionFour.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", questionThree)
    }
}

function questionThree() {
    quizPrompt.innerHTML = promptThree;

    optionOne.innerHTML = "i = 0";
    optionTwo.innerHTML = "i++";
    optionThree.innerHTML = "i < array.length";
    optionFour.innerHTML = "function(x)";

    optionFour.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionOne.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionTwo.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionThree.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", questionFour)
    }
}

function questionFour() {
    quizPrompt.innerHTML = promptFour;

    optionOne.innerHTML = "if, else if, else if, else";
    optionTwo.innerHTML = "if, else, else if, else if";
    optionThree.innerHTML = "else if, else if, if, else";
    optionFour.innerHTML = "else if, else if, else, if";

    optionOne.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionTwo.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionThree.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionFour.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", questionFive)
    }
}

function questionFive() {
    quizPrompt.innerHTML = promptFive;

    optionOne.innerHTML = "conquer()";
    optionTwo.innerHTML = "deliver()";
    optionThree.innerHTML = "congregate()";
    optionFour.innerHTML = "splice()";

    optionFour.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionOne.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionTwo.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionThree.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", questionSix)
    }
}

function questionSix() {
    quizPrompt.innerHTML = promptSix;

    optionOne.innerHTML = "{}";
    optionTwo.innerHTML = "[]";
    optionThree.innerHTML = "()";
    optionFour.innerHTML = "<>";

    optionTwo.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionOne.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionThree.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionFour.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", questionSeven)
    }
}

function questionSeven() {
    quizPrompt.innerHTML = promptSeven;

    optionOne.innerHTML = "element.makeElement(“p”)";
    optionTwo.innerHTML = "element.existElement(“p”)";
    optionThree.innerHTML = "element.createElement(“p”)";
    optionFour.innerHTML = "element.spawnElement(“p”)";

    optionThree.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionOne.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionTwo.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionFour.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", questionEight)
    }
}

function questionEight() {
    quizPrompt.innerHTML = promptEight;

    optionOne.innerHTML = "includeEventHandler";
    optionTwo.innerHTML = "addEventListener";
    optionThree.innerHTML = "includeEventListener";
    optionFour.innerHTML = "addEventHandler";

    optionTwo.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionOne.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionThree.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionFour.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", questionNine)
    }
}

function questionNine() {
    quizPrompt.innerHTML = promptNine;

    optionOne.innerHTML = "element.attachChild(“p”) ";
    optionTwo.innerHTML = "element.connectChild(“p”)";
    optionThree.innerHTML = "element.appendChild(“p”)";
    optionFour.innerHTML = "element.nestChild(“p”)";

    optionThree.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionOne.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionTwo.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionFour.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", questionTen)
    }
}

function questionTen() {
    quizPrompt.innerHTML = promptTen;

    optionOne.innerHTML = "What do you mean, and African or European Swallow?";
    optionTwo.innerHTML = "I don’t know";
    optionThree.innerHTML = "20.1 mph";
    optionFour.innerHTML = "I don’t care";

    optionOne.onclick = function () {
        currentScore++;
        localStorage.setItem("currentScore", JSON.stringify(currentScore));
    }

    optionTwo.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionThree.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }
    optionFour.onclick = function() {
        secondsLeft = secondsLeft-=5;
    }

    const optionClick = [optionOne, optionTwo, optionThree, optionFour];

    for(let i = 0; i < optionClick.length; i++){
        optionClick[i].addEventListener("click", function clearTimer () {secondsLeft = 0; timerEl.textContent = "What a speedy little fella!";}, showScores)
    }
}

function showScores() {

    timerEl.textContent = " ";
    quizCont.remove();

    const scoresCont = document.createElement('div');
    const scoreInst = document.createElement('p')
    const initialInpt = document.createElement('input')
    const inputBtn = document.createElement('button')

    scoresCont.setAttribute("id", "score-sheet");
    main.appendChild(scoresCont);

    scoresCont.appendChild(quizPrompt);
    scoresCont.appendChild(scoreInst);
    scoresCont.appendChild(initialInpt);
    scoresCont.appendChild(inputBtn);
    scoresCont.appendChild(restartBtn);

    scoreInst.textContent = "Enter your initials (or whatever) to keep your high score and play again!";
    inputBtn.textContent = "Save Score"
    restartBtn.textContent = "Restart Quiz";

    scoreInst.setAttribute("style", "font-size: 16px; margin-top: 0px;");
    initialInpt.setAttribute("id", "input-field")
    inputBtn.setAttribute("id", "restart-submit-btn");
    restartBtn.setAttribute("id", "restart-submit-btn");
    quizPrompt.setAttribute("style", "margin: 0px; font-size: 40px;");

    let currentScore = localStorage.getItem("currentScore");

    // The total score will be entered here
    quizPrompt.textContent = "Your Score: " + currentScore;

    // Event listener for the "restart button" to start the quiz again
    restartBtn.addEventListener("click", function restartQuiz() {
        location.reload()
    });

}

function highScoresSection () {

}

// Event listener for the "start button" to begin the quiz
startBtn.addEventListener("click", startQuiz);

scoresBtn.addEventListener('click', highScoresSection);