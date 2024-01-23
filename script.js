let firstOperand = '';
let secondOperand = ''; 
let operatorSign = null;
let shouldScreenReset = false;
let didEqual = false; 

const clearButton = document.getElementById('clearButton');
const deleteButton = document.getElementById('deleteButton');
const lastCalc = document.getElementById('lastCalc');
const currentCalc = document.getElementById('currentCalc');
const buttonArray = document.querySelectorAll('[data-number]');
const operatorArray = document.querySelectorAll('[data-operator]');
const equalButton = document.getElementById('equalButton');
const dotButton = document.getElementById('dotButton');

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteItem);
equalButton.addEventListener('click', doEquals);
dotButton.addEventListener('click', addDot)

buttonArray.forEach(button => {
    button.addEventListener('click', () => {
        if (didEqual === true) {
            currentCalc.textContent = '';
        }
        addNumber(button.textContent);
        didEqual = false;
    });

});

operatorArray.forEach(operator => {
    operator.addEventListener('click', () => setOperation(operator.textContent));
});



function add(input1, input2) {
    return input1 + input2;
}

function divide(input1, input2) {
    return input1/input2;
}

function multiply(input1, input2) {
    return input1 * input2;
}

function subtract(input1, input2) {
    return input1 - input2;
}


function clear() {
    currentCalc.textContent = '0';
    lastCalc.textContent = '';
    operatorSign = null;
    firstOperand = '';
    secondOperand = '';
    shouldScreenReset = false;
}


function doOperation(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '÷':
            return divide(num1, num2);
        case 'x':
            return multiply(num1, num2);
        default: 
            return null;
    }

};


function resetScreen() {
    if (shouldScreenReset == true) {
        currentCalc.textContent = '';
        shouldScreenReset = false;
    }
}


function addNumber(number) {
    if (shouldScreenReset) {
        resetScreen();
    }
    else if (currentCalc.textContent == '0') {
        currentCalc.textContent = '';
    }
    currentCalc.textContent += number;
}


function deleteItem() {
    currentCalc.textContent = currentCalc.textContent.slice(0, -1) || '0';
}

function setOperation(operator) {
    if (operatorSign !== null) {
        doEquals();
    }
    firstOperand = currentCalc.textContent;
    operatorSign = operator;
    lastCalc.textContent = `${firstOperand} ${operatorSign}`;
    shouldScreenReset = true;
}



function doEquals() {
    didEqual = true;
    if (operatorSign === null || shouldScreenReset) {
        return;
    }
    secondOperand = currentCalc.textContent;

    if (operatorSign === '÷' && currentCalc.textContent === '0') {
        alert("You can't divide by 0!");
        return;
    }
    
    currentCalc.textContent = roundNumber(doOperation(operatorSign, firstOperand, secondOperand));
    lastCalc.textContent = `${firstOperand} ${operatorSign} ${secondOperand} =`;
    operatorSign = null;
}


function addDot() {
    if (shouldScreenReset) {
        resetScreen();
    }
    if (currentCalc.textContent === '') {
        currentCalc.textContent = '0';
    }
    if (currentCalc.textContent.includes('.')) {
        return;
    }
    currentCalc.textContent += '.';

}


function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}
