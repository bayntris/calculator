let firstNumber;
let secondNumber;
let operator;

const buttons = document.querySelectorAll('.row button');
const calculator = document.querySelector('.calculator');
const calculatorBody = document.querySelector('.calculatorBody');
console.log(calculatorBody.clientHeight);


console.log(calculatorBody);




/*buttons.forEach((button) => {
  
   const dynamicHeight = calculatorBody.clientHeight  / 4;
   const dynamicWidth = calculatorBody.clientWidth  / 4;



    
    button.style.height = `${dynamicHeight}px`;
    button.style.width = `${dynamicWidth}px`;
}); */

console.log(buttons);
console.log(calculator);


function operate (operator, firstNumber, secondNumber) {
    return operator(firstNumber, secondNumber);
}


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}


function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}