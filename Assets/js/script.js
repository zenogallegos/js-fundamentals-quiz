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

const promptOne = promptNum + '1: What is your favorite color?';
const promptTwo = promptNum + '2: What is your favorite animal?';
const promptThree = promptNum + '3: What is your favorite food?';
const promptFour = promptNum + '4: What is your favorite place to travel?';
const promptFive = promptNum + '5: What is your favorite planet?';
const promptSix = promptNum + '6: What is your favorite dinosaur?';
const promptSeven = promptNum + '7: What is your favorite thing about space?';
const promptEight = promptNum + '8: What is your favorite pastime?';
const promptNine = promptNum + '9: What is your favorite game?';
const promptTen = promptNum + '10: What is your favorite show?';

let currentScore = 0;

// Function to begin the quiz, remove the starting section,
// start the timer, and initialize the first question
function startQuiz(event) {

    timerEl.textContent = "Good Luck!";

    let secondsLeft = 60;

    // Sets the timer for the quiz
    const timer = setInterval(function() {
        timerEl.textContent = secondsLeft + " segundos left";
        secondsLeft--;
    
        if(secondsLeft < 0) {
            // Stops execution
            clearInterval(timer);
            showScores();
        }
    }, 1000);

    quizPrompt.innerHTML = promptOne;
    startBtn.remove();

    // Creates options for the first option
    let optionOne = document.createElement("p");
    let optionTwo = document.createElement("p");
    let optionThree = document.createElement("p");
    let optionFour = document.createElement("p");

    optionOne.setAttribute("class", "option");
    optionTwo.setAttribute("class", "option");
    optionThree.setAttribute("class", "option");
    optionFour.setAttribute("class", "option");

    optionOne.innerHTML = "Blue";
    optionTwo.innerHTML = "Green";
    optionThree.innerHTML = "Red";
    optionFour.innerHTML = "Purple";

    optionsCont.appendChild(optionOne);
    optionsCont.appendChild(optionTwo);
    optionsCont.appendChild(optionThree);
    optionsCont.appendChild(optionFour);

    optionTwo.onclick = function () {
        currentScore++;
        localstorage.setItem("currentScore", currentScore);
    }

    optionFour.onclick = function() {
        secondsLeft = secondsLeft - 5;
    }
    optionOne.onclick = function() {
        secondsLeft = secondsLeft - 5;
    }
    optionThree.onclick = function() {
        secondsLeft = secondsLeft - 5;
    }

    const optionClick = optionOne || optionTwo || optionThree || optionFour;
    optionClick.addEventListener("click", questionTwo)
}

function questionTwo() {

}

function showScores() {

    timerEl.textContent = "Time's Up!";
    quizCont.remove();

    const scoresCont = document.createElement('div');
    const scoreInst = document.createElement('p')

    scoresCont.setAttribute("id", "score-sheet");
    main.appendChild(scoresCont);

    scoresCont.appendChild(quizPrompt);
    scoresCont.appendChild(scoreInst);
    scoresCont.appendChild(restartBtn);

    scoreInst.textContent = "Enter your initials to keep your high score and play again!";
    restartBtn.textContent = "Restart Quiz";

    scoreInst.setAttribute("style", "font-size: 16px; margin-top: 0px;");
    restartBtn.setAttribute("id", "restart-btn");
    quizPrompt.setAttribute("style", "margin: 0px; font-size: 40px;");

    // The total score will be entered here
    quizPrompt.textContent = "Your Score: ";

    // Event listener for the "restart button" to start the quiz again
    restartBtn.addEventListener("click", function restartQuiz() {
        location.reload()
    });

}

// Event listener for the "start button" to begin the quiz
startBtn.addEventListener("click", startQuiz);
