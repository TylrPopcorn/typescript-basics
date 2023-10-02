type Combinable = number | string; //union type / type aliase

function complete(
  n1: Combinable,
  n2: Combinable,
  resultConversion: string | "as-number" | "as-text" //literal type
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combine = complete(2, 4, "as-number");
console.log(combine);

const combinedNamed = complete("Max", "Anna", "as-text");

function complete2(number1: number | boolean, number2: string | boolean) {
  console.log(number1, number2);
}
//----------------------------------------------------------\\

//Type Aliase example - complex
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

//another example - complex:
type User2 = { name: string } | string;
let u2: User2 = { name: "Max" };
u2 = "Michael";

//----------------------------------------------------------\\
