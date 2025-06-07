//#region 1. Variables
// ? Variables (var, let, const)
var name = "John"; // Function scope
let username = "john_doe"; // Function scope
const age = 20; // Block scope

console.log(name); // Output: John
console.log(username); // Output: john_doe
console.log(age); // Output: 20

var name = "Jane"; // Re-declaring with var is allowed
// let username = "jane_doe"; // Re-declaring with let is not allowed
age = 21; // Re-assigning const is not allowed, but re-assigning a variable declared with let is allowed

console.log(name); // Output: Jane
// console.log(username); // Output: Error: Identifier 'username' has already been declared
console.log(age); // Output: 20, but this will throw an error
//#endregion

//#region 2. Literal Template
// ? Literal Template
let firstName = "John";
let lastName = "son";
let fullName = `Fullname: ${firstName} ${lastName}`;

console.log(fullName); // Output: John son
//#endregion

//#region 3. DOM
// ? DOM Manipulation
// TODO Navigate to the HTML file to see the DOM manipulation code
//#endregion

//#region 4. Arrow Function
// ? Arrow Functions (=>)
// * Old
function greet(name) {
  return "Hello" + name;
}
console.log(greet("Jinro")); // Output: Hello Jinro

// * New
const greetArrow = (name) => {
  return "Hey" + name;
};
console.log(greetArrow("Bro")); // Output: Hey Bro

// TODO short form (if only one return statement)
const greetShort = (name) => "Welcome mr." + name;
console.log(greetShort("Jame")); // Output: Welcome mr.Jame
//#endregion

//#region 5. Arrays
// ? Basic Arrays
const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixedArray = ["Hello", 42, true, null];

console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(mixedArray); // Output: ["Hello", 42, true, null]

// ? Array Objects
const person = [
  { name: "Layla", age: 16 },
  { name: "Miya", age: 20 },
];

console.log(person); // Output: [{ name: "Layla", age: 16 }, { name: "Miya", age: 20 }]
console.log(person[0].name); // Output: Layla
console.log(person[1].age); // Output: 20

// ? Nested Arrays
const personInfo = {
  name: "Jin",
  age: 20,
  address: {
    city: "Tokyo",
    street: "20TY",
    country: "Japan",
  },
};

console.log(personInfo); // Output: { name: "Jin", age: 20, address: { city: "Tokyo", street: "20TY", country: "Japan" } }
console.log(personInfo.name); // Output: Jin
console.log(personInfo.address.city); // Output: Tokyo
console.log(personInfo.address.street); // Output: 20TY
console.log(personInfo.address.country); // Output: Japan

// ? Array Methods
// ! Array Objects
const students = [
  { name: "Alice", subject: "C#", score: 85 },
  { name: "Bob", subject: "C++", score: 55 },
  { name: "Charlie", subject: "Java", score: 70 },
  { name: "David", subject: "JavaScript", score: 92 },
];

// TODO 1. map()
const studentMap = students.map((student) => {
  return `name: ${student.name} - subject: ${student.subject} - score: ${student.score}`;
});

console.log(studentMap);

// TODO 2. filter()
const passed = students.filter((student) => student.score >= 60);

console.log(passed);

// TODO 4. find()
const failed = students.find((student) => student.score < 60);
console.log(failed); // { name: "Bob", subject: "C++" score: 55 }
//#endregion

//#region 6. Destructuring
// ? Destructuring
const colors = ["red", "green", "blue"];

// * Old way
const first = colors[0]; // "red"
console.log(first);

// * Destructuring
const [item1, item2] = colors;
console.log(item1); // "red"
console.log(item2); // "green"

// ? Skipping items
const [color1, , color3] = colors; // Skipping the first item
console.log(color1); // "red"
console.log(color3); // "blue"

// ? Renaming Variables
const user = { name: "Alex", age: 30, city: "Paris" };

const { name: userName, city: userCity } = user;
console.log(userName); // "Alex"
console.log(userCity); // ”Paris”
//#endregion

//#region 7. Asynchronous async/await
// ? Asynchronous async/await
// * Synchronous
const task1 = () => {
  const start = Date.now();
  while (Date.now() - start < 1000) {} // ! wait 1s
  console.log("Task 1 completed");
};

const task2 = () => {
  const start = Date.now();
  while (Date.now() - start < 2000) {} // ! wait 2s
  console.log("Task 2 completed");
};

const task3 = () => {
  const start = Date.now();
  while (Date.now() - start < 500) {} // ! wait 0.5s
  console.log("Task 3 completed");
};

task1();
task2();
task3();

// * Asynchronous with async/await
const chore1 = () => {
  const result = setTimeout(() => {
    console.log("Task 1 completed");
  }, 1000);

  return result;
};

const chore2 = () => {
  const result = setTimeout(() => {
    console.log("Task 2 completed");
  }, 2000);
  return result;
};

const chore3 = () => {
  const result = setTimeout(() => {
    console.log("Task 3 completed");
  }, 500);
  return result;
};

chore1();
chore2();
chore3();

//#endregion

//#region 8. Modules import/export
// ? Modules import/export
import { PI, greeting } from "./math.js";

console.log(PI); // Output: 3.14
console.log(greeting("Alice")); // Output: Hello, Alice!
//#endregion
