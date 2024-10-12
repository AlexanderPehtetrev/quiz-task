import { getRandomInt } from "./getRandomInt.js";
import { updateAnswer, answer, questionHeading } from "./constLet.js";
import {generateCorrectButton} from "./buttonsAction.js"

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
         updateAnswer (number1 + number2);
    }
    else {
        updateAnswer (number1 - number2);
    }

    questionHeading.innerText = `${number1} ${sign} ${number2}`;
    generateCorrectButton(answer);
}

export {generateQuastion}