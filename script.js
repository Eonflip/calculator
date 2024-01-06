const clearButton = document.getElementById('clearButton');
const deleteButton = document.getElementById('deleteButton');
const lastCalc = document.getElementById('lastCalc');
const currentCalc = document.getElementById('currentCalc');
const buttonArray = document.querySelectorAll('[data-number]');
const operatorArray = document.querySelectorAll('[data-operator]');

clearButton.addEventListener('click', () => {
    clear();
})

deleteButton.addEventListener('click', () => {

    currentCalc.textContent = currentCalc.textContent.slice(0, -1);

    if (currentCalc.textContent.length == 0) {
        currentCalc.textContent = '0';
    };
    
});

buttonArray.forEach(button => {
    button.addEventListener('click', function() {
        if (currentCalc.textContent == '0') {
            currentCalc.textContent = '';
            currentCalc.textContent += button.textContent;
        }
        else {
            currentCalc.textContent += button.textContent;
        }
        
    });
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


function operateEquation