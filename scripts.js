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
let currentSelection = '';
const operation = [];
let digits = '';
let product = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let currentSelection = button.textContent;
        // console.log(typeof currentSelection);
        // console.log(typeof parseInt(currentSelection));
        if (!isNaN(currentSelection)) {
            digits += currentSelection;
            input.value = digits;
        }
        if (isNaN(currentSelection)) {
            if (currentSelection === '=') {
                operation.push(digits);
                operate(operation);
            } else {
                let operator = currentSelection;
                operation.push(digits, currentSelection);
                // Reset digits back to empty
                digits = '';
            }
        }
        input.value = operation;
    });
});

function operate(operation) {

    console.log(operation);
        let num = parseInt(operation.shift());
        console.log(num);
        let operator = operation.shift();
        console.log(operator);
        if (product === 0) {
            product = num;
            num = parseInt(operation.shift());
        }
        switch (operator) {
            case '+': product = addition(product, num);
        }
    console.log(`Calculation = ${product}`);
    operation = [];
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

