//
//
enum poppy { //enum
  ADMIN = 7,
  READ_ONLY = "TEST",
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple
  poppy: poppy.ADMIN; //enum
} = {
  name: "Tylr",
  age: 24,
  hobbies: ["Coding", "Sports"],
  role: [2, "coder"], //tuple
  poppy: poppy.ADMIN, //enum
};

person.role = [0, "admin"];

let favoriteActivites: string[]; //string array
favoriteActivites = ["spoorts", "peas"];
console.log(person);

if (person.poppy === poppy.ADMIN) {
  console.log("okoko popy rady oa");
}

const favoriteAct: string[] = ["test", "false"];
let fav2: boolean[];
fav2 = [true, false, true, false];

const newString: string[] = ["test"];
let newString2: string[] = [];
newString2.push("test");
