let addition = function(a, b) {
    return a + b;
};
let subtraction = function(a, b) {
    return a - b;
};
let multiplication = function(a, b) {
    return a * b;
};
let division = function(a, b) {
    return a / b;
};

const buttons = document.querySelectorAll('button');
const input = document.querySelector('input[class="display"]');
let selection = [];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let currentSelection = isNaN(parseInt(button.textContent)) ? button.textContent : parseInt(button.textContent);
        if (typeof currentSelection === 'number') {
            selection.push(currentSelection);
        }
        if (typeof currentSelection !== 'number') {
                let operator = currentSelection;
                operate(selection, operator);
        }
    });
});
function clearSelection() {
    for (selection.length in selection) {
        selection.pop();
        }
}
let operation = [];
function operate(selection, operator) {

    stringArr = selection.map((digit) => {
        return String(digit);
    });
    digits = parseInt(stringArr.reduce((sum, num) => {
        return sum + num;
    }));
    operation.push(digits, operator);
    console.log(operation);
    clearSelection();
    // if  (operator == "=") {
    //     calculate(operation);
    // }
}
// function calculate(operation) {
//     let sum = 0;
//     for (value in operation) {
//         let currentValue = value;
//         if (currentValue ===
//     }
// }

