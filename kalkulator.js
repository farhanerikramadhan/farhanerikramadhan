let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateDisplay();
    }
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function clearCurrent() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
}

function setOperand(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        calculate();
        firstOperand = parseFloat(currentInput);
    }
    operator = op;
    currentInput = '';
}

function calculate() {
    if (firstOperand === null || currentInput === '') return;
    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                currentInput = 'Error';
                updateDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = (firstOperand * secondOperand) / 100;
            break;
        case '^':
            result = Math.pow(firstOperand, secondOperand);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function calculatePlusMinus() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function calculateFactorial() {
    if (currentInput === '') return;
    const number = parseInt(currentInput);
    if (number < 0) {
        currentInput = 'Error';
    } else {
        currentInput = factorial(number).toString();
    }
    updateDisplay();
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    if (n > 20) return Infinity;
    return n * factorial(n - 1);
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput || '0';
}
