let displayValue = "";
let firstValue = null;
let secondValue = null;
let result = null;
let operand = "";
let dotOn = false;

const buttons = document.querySelectorAll('button');
const mainDisplay = document.querySelector('.main');

function add(x, y){
    return Number(x) + Number(y);
}

function subtract(x, y){
    return Number(x) - Number(y);
}

function multiply(x, y){
    if(y === null){ y = 1; }
    return Number(x) * Number(y);
}

function divide(x, y){
    if(y === null){ y = 1; }
    return Number(x) / Number(y);
}

function operate(operator, x, y){
    if(operator === '+') return add(x, y);
    if(operator === '-') return subtract(x, y);
    if(operator === '*') return multiply(x, y);
    if(operator === '/') return divide(x, y); 
    return "LOL"
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(button.className === "operand" || (button.value === "-" && displayValue === "" && firstValue === null)){
            displayValue += button.value;
            mainDisplay.innerHTML = displayValue;
        }else if(button.className === "operator"){
            if(firstValue === null){
                button.value === "=" ? firstValue = null : firstValue = displayValue;
                displayValue = "";
                operand = button.value;
                dotOn = false;
            }else if(operand !== button.value || (operand !== "*" && operand !== "/")){
                displayValue === "" ? secondValue = null : secondValue = displayValue;
                if(operand !== "="){ result = operate(operand, firstValue, secondValue); } 
                mainDisplay.innerHTML = result;
                firstValue = result;
                operand = button.value;
                secondValue = null;    
                displayValue = "";
                dotOn = false;
            }
        }else if(button.className === "other"){
            if(button.value === "clear"){
                displayValue = "";
                firstValue = null;
                secondValue = null;
                result = null;
                operand = "";
                mainDisplay.innerHTML = displayValue;
            }else if(button.value === "delete" && operand !== "="){  
                displayValue = displayValue.slice(0, -1);
                mainDisplay.innerHTML = displayValue
            }else if(button.value === "."){
                if(!dotOn && displayValue !== ""){
                    displayValue += '.';
                    mainDisplay.innerHTML = displayValue;
                    dotOn = true;
                }
            }
        }
    });
});