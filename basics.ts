console.log("Hello world!");

function add(n1: number, n2: number, showResult: boolean) {
  if (typeof n1 !== "number") {
    throw new Error("incorrect input!");
  }
  if (showResult === true) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.5;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult);
console.log(result);
