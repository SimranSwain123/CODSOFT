// Get all necessary elements from the DOM
const display = document.querySelector('.disp');
const numberButtons = document.querySelectorAll('.one');
const operationButtons = document.querySelectorAll('.op');

// Variables to store the current input and operation
let currentInput = '';
let previousInput = '';
let operation = null;

// Add event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent; // Append number
        display.textContent = currentInput; // Update display with current input
    });
});

// Add event listeners to operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const operator = button.textContent;

        if (operator === '=') {
            // Perform calculation when '=' is clicked
            calculateResult();
        } else if (operator === 'C') {
            // Clear the display when 'C' is clicked
            clearDisplay();
        } else {
            // Set the operation and display it
            setOperation(operator);
        }
    });
});

// Set the operation
function setOperation(op) {
    if (currentInput === '') return;  // Don't set operation if no number entered

    // If there's an existing previous input and an operation, calculate the result
    if (previousInput !== '') {
        calculateResult();  // Calculate and update the result if there's already a previous input
    }

    operation = op;
    previousInput = currentInput;  // Store current input as previous
    currentInput = '';             // Clear the current input for the next number
    display.textContent = previousInput + ' ' + operation; // Show operator in the display
}

// Perform the calculation based on the selected operation
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error'; // Handle division by zero
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    display.textContent = currentInput; // Update the display with the result
    previousInput = ''; // Reset previous input
    operation = null;   // Reset the operation
}

// Handle clearing the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.textContent = ''; // Clear the display
}
