//Typescript WATCH MODE: (will WATCH all typescript files)
//tsc --init
//tsc -watch

//return types
function add2(n1: number, n2: number): number {
  //
  return n1 + n2;
}
//return types (void means doesnt return anything)
function printResult2(a1: number): void {
  //
  console.log("result " + a1);
}

console.log(printResult2(add2(5, 12)));

let combineValues: Function; //function type
combineValues = add2;
combineValues = printResult2;

console.log(combineValues(8, 8));
//
//
//
let Combines2: (a: number, b: number) => number; //function type alt
//should accept function that takes two parameters and retruns only numbers...

//Combines2 = printResult //does not work..
Combines2 = add2; //works
//
//
//
function AddAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

AddAndHandle(10, 20, (result) => {
  console.log(result);
});

let userInput: unknown; //UNKOWN type
let userInput2: any; //ANY type
let userName: string;

userInput = 5;
userInput = "Max";

//userName = userInput; -- does not work
if (typeof userInput === "string") {
  //this works.
  userName = userInput;
}

//! = tells typescript that such a button will exist soon.
const button2 = document.querySelector("button")!;
// button.addEventListener("click", () => {
//   console.log("Clicked");
// });

function clickHandler(message: string) {
  console.log("Clicked");
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome"));
}

//--------------------------------------------------------------
//NEVER type - will not return anything EVER
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
