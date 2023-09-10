// script.js
let display = document.getElementById("display");
let resetButton = document.getElementById("reset-button");
let equalsButton = document.getElementById("equals-button");

resetButton.addEventListener("click", clearDisplay);
equalsButton.addEventListener("click", calculateResult);

function appendToDisplay(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function deleteFromDisplay() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}
