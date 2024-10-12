import {  resetCounter, quizWrapper, startWrapper, resultHeading, overallCounter, wrongCounter, correctCounter  } from "./constLet.js";
import { generateQuastion } from "./quizHeadingAction.js";

function showResults () {
    quizWrapper.classList.add("hide");
    startWrapper.classList.remove("hide");
    resultHeading.classList.remove("hide");
    resultHeading.innerText = `overall answers: ${overallCounter}, correct: ${correctCounter}, wrong: ${wrongCounter}, `;
}

function startQuiz() {
    resetCounter ();

   startWrapper.classList.add("hide");
   quizWrapper.classList.remove("hide");
   generateQuastion();
   setTimeout(showResults, 10000);
   }

   export { startQuiz }