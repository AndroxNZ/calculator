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

const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backSpace = document.querySelector('.delete');
const input = document.querySelector('.display');
input.value = '';
let num1 = '';
let num2 = '';
let operatorSelected = '';
let product = '';

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (operatorSelected) {
            num2 += number.textContent;
            input.value = num2;
        } else {
            num1 += number.textContent;
            input.value = num1;
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        operatorSelected = operator.textContent;
        input.value = operatorSelected;
    });
});
backSpace.addEventListener('click', () => {
    if (operatorSelected) {
        num2 = num2.slice(0, -1);
        input.value = num2;
    } else {
        num1 = num1.slice(0, -1);
        input.value = num1;
    }
});

clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operatorSelected = '';
    input.value = '';
});

equals.addEventListener('click', () => {
    operate();
});
function operate() {
    let int1 = parseInt(num1);
    let int2 = parseInt(num2);
    switch (operatorSelected) {
        case '+':
            product = addition(int1, int2);
            break;
        case '-':
            product = subtraction(int1, int2);
            break;
        case '*':
            product = multiplication(int1, int2);
            break;
        case '/':
            product = division(int1, int2);
            break;
    }
    num1 = product;
    input.value = num1;
    operatorSelected = '';
    num2 = '';
}
