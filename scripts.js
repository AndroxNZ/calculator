let addition = function (a, b) {
    return a + b;
};
let subtraction = function (a, b) {
    return a - b;
};
let multiplication = function (a, b) {
    return a * b;
};
let division = function (a, b) {
    return a / b;
};

const buttons = document.querySelectorAll('button');
const input = document.querySelector('input[class="display"]');
input.value = '';
let currentSelection = '';
let allNumbers = [];
let digits = '';
let product = 0;
let allOperators = [];
let currentNum = 0;
let alreadyOperator = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let currentSelection = button.textContent;
        if (currentSelection === 'CLR') {
            input.value = '';
            currentSelection = '';
            allNumbers = [];
            digits = '';
            allOperators = [];
            input.value = '0';
        }
        if (!isNaN(currentSelection)) {
            digits += currentSelection;
            input.value = digits;
            alreadyOperator = false;
        }
        if (isNaN(currentSelection)) {
            if (currentSelection === '=') {
                allNumbers.push(digits);
                digits = '';
                operate(allNumbers);
            } else {
                input.value = currentSelection;
                // if (alreadyOperator) {
                //     allOperators.pop();
                // }
                allNumbers.push(digits);
                allOperators.push(currentSelection);
                // Reset digits back to empty
                digits = '';
                alreadyOperator = true;

            }
        }
    });
});

function operate(allNumbers) {
    let product = parseInt(allNumbers.shift());

    while (allNumbers.length > 0) {
        switch (allOperators[0]) {
            case '+':
                allOperators.shift();
                currentNum = parseInt(allNumbers.shift());
                product = addition(product, currentNum);
                break;
            case '-':
                allOperators.shift();
                currentNum = parseInt(allNumbers.shift());
                product = subtraction(product, currentNum);
                break;
            case '*':
                allOperators.shift();
                currentNum = parseInt(allNumbers.shift());
                product = multiplication(product, currentNum);
                break;
            case '/':
                allOperators.shift();
                currentNum = parseInt(allNumbers.shift());
                product = division(product, currentNum);
                break;
        }
    }
    console.log(`digits is currently : ${digits}`)
    console.log(`allNumbers is currently : ${allNumbers}`)
    console.log(`allOperators is currently : ${allOperators}`)
    console.log(`product is currently : ${product}`)
    input.value = product;
    digits = product;
    product = 0;
    alreadyOperator = false;
}