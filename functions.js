function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    lastAnswer = document.getElementById('display').value; // Store the last answer
    document.getElementById('display').value = ''; // Clear the display
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function addSquareRoot() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculatePercentage() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}

function calculatePower() {
    let display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2);
}

function displayLastAnswer() {
    document.getElementById('display').value = lastAnswer;
}


