let display = document.getElementById('result');
let equation = '';

function appendToDisplay(value) {
    equation += value;
    display.value = equation;
}

function clearDisplay() {
    equation = '';
    display.value = '';
}

function calculate() {
    try {
        equation = eval(equation);
        display.value = equation;
    } catch (error) {
        display.value = 'Error';
    }
}
