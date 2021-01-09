const buttons = document.querySelectorAll("button");

let displayValue = "";

let lastButton = "";
let input1, input2;
const inputArray = [];

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "zero":
        addToDisplay(0);
        // updateDisplay();
        break;
      case "one":
        addToDisplay(1);
        break;
      case "two":
        addToDisplay(2);
        break;
      case "three":
        addToDisplay(3);
        break;
      case "four":
        addToDisplay(4);
        break;
      case "five":
        addToDisplay(5);
        break;
      case "six":
        addToDisplay(6);
        break;
      case "seven":
        addToDisplay(7);
        break;
      case "eight":
        addToDisplay(8);
        break;
      case "nine":
        addToDisplay(9);
        break;
      case "dot":
        addToDisplay(".");
        break;
      case "add":
        calculate({
          number: parseFloat(displayValue),
          action: (num1, num2) => num1 + num2,
        });
        displayValue = "";
        break;
      case "minus":
        calculate({
          number: parseFloat(displayValue),
          action: (num1, num2) => num1 - num2,
        });
        displayValue = "";
        break;
      case "divide":
        calculate({
          number: parseFloat(displayValue),
          action: (num1, num2) => num1 / num2,
        });
        displayValue = "";
        break;
      case "multiply":
        calculate({
          number: parseFloat(displayValue),
          action: (num1, num2) => num1 * num2,
        });
        displayValue = "";
        break;
      case "equals":
        calculate({
          number: parseFloat(displayValue),
          action: (num1, num2) => num2,
        });
        break;
      case "clear":
        clearMemory();
        // clearDisplay();
        break;
      case "plusMinus":
        displayValue = -1 * parseFloat(getDisplay());
        // console.log(displayValue);
        updateDisplay();
        break;

      default:
        break;
    }
  });
});
function addToDisplay(number) {
  displayValue += number;
  updateDisplay();
}
function updateDisplay() {
  document.querySelector("#display").innerText = displayValue;
}

function addToOutput() {}

function getDisplayValue() {
  return displayValue;
}
function getDisplay() {
  return document.querySelector("#display").innerText;
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}
function setDisplay(value) {
  displayValue = `${value}`;
  updateDisplay();
}

function clearMemory() {
  displayValue = "";
  updateDisplay();
}

function calculate(object) {
  if (displayValue) {
    inputArray.push(object);
    console.log(JSON.stringify(inputArray));

    if (inputArray.length > 1) {
      inputArray[1].number = inputArray[0].action(
        inputArray[0].number,
        inputArray[1].number
      );
      console.log(`result is ${inputArray[1].number}`);
      setDisplay(`${inputArray[1].number}`);
      inputArray.shift();
    }
  }

  //   displayValue = "";
}
