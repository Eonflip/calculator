let firstOperand = '';
let secondOperand = ''; 
let operatorSign = null;
let shouldScreenReset = false;

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
        addNumber(button.textContent);
    });

});

operatorArray.forEach(operator => {
    operator.addEventListener('click', () => setOperation(operator.textContent));
});



function add(input1, input2) {
    return input1 + input2;
}

function divide(input1, input2) {
    return input1 / input2;
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
            if (num2 === 0) {
                return null;
            }
            else {
                return divide(num1, num2);
            }
        case 'x':
            return multiply(num1, num2);
    }

};


function resetScreen() {
    if (shouldScreenReset == true) {
        currentCalc.textContent = '';
        shouldScreenReset = false;
    }
}


function addNumber(number) {
    if (currentCalc.textContent == '0') {
        currentCalc.textContent = '';
        currentCalc.textContent += number;
    }
    else {
        currentCalc.textContent += number;
    }
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

}



function doEquals() {
    if (operatorSign === null || shouldScreenReset) {
        return;
    }
    if (operatorSign === '÷' && button.textContent == 0) {
        alert("You can't divide by 0!");
        return;
    }
}


function addDot() {

}
