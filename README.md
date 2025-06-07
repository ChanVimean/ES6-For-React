# 📘 JavaScript ES6+ Quick Reference

A concise guide to modern JavaScript (ES6 and beyond), with explanations and code examples. Useful for learners, reviewers, and instructors.

---

<br>

## 🔹 1. Variables

### Description

Understanding how variable declarations work in JavaScript using `var`, `let`, and `const`.

### Code Example

```js
var name = "John"; // Function scope
let username = "john_doe"; // Block scope
const age = 20; // Block scope

console.log(name); // Output: John
console.log(username); // Output: john_doe
console.log(age); // Output: 20

var name = "Jane"; // ✅ Re-declaring with var is allowed
// let username = "jane_doe"; ❌ Error: Cannot redeclare block-scoped variable
age = 21; // ❌ TypeError: Assignment to constant variable

console.log(name); // Output: Jane
// console.log(username); // ⚠️ Would throw error if uncommented
console.log(age); // Still 20, but assignment throws error above
```

---

<br>

## 🔹 2. Literal Template

### Description

Template literals (also called template strings) are a cleaner way to embed variables and expressions inside strings using backticks `` ` ``.

### Code Example

```js
let firstName = "John";
let lastName = "son";
let fullName = `Fullname: ${firstName} ${lastName}`;

console.log(fullName);
```

### Output

> Fullname: John son

---

<br>

## 🔹 3. DOM Manipulation

### Description

Learn how to access and manipulate HTML elements using JavaScript DOM methods like `getElementById`, `getElementsByClassName`, `querySelector`, and more.

### HTML + JavaScript Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DOM Demo</title>
  </head>
  <body>
    <!-- 1. ID selector -->
    <h1 id="title">Hello World</h1>

    <!-- 2. Class selector -->
    <p class="note">Note 1</p>
    <p class="note">Note 2</p>

    <!-- 3. Tag selector -->
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <!-- 4. querySelector -->
    <div class="box">First Box</div>
    <div class="box">Second Box</div>

    <!-- 5. querySelectorAll -->
    <p class="text">One</p>
    <p class="text">Two</p>
    <p class="text">Three</p>
    <p class="text">Four</p>
    <p class="text">Five</p>

    <script>
      // 1. By ID
      const title = document.getElementById("title");
      console.log(title.textContent); // Hello World

      // 2. By class
      const note = document.getElementsByClassName("note");
      console.log(note[0].textContent); // Note 1
      console.log(note[1].textContent); // Note 2

      // 3. By tag
      const item = document.getElementsByTagName("li");
      console.log(item.length); // 3

      // 4. querySelector (first match)
      const boxClass = document.querySelector(".box");
      console.log(boxClass.textContent); // First Box

      const boxId = document.querySelector("#box");
      console.log(boxId.textContent); // Second Box

      // 5. querySelectorAll (all matches)
      const text = document.querySelectorAll(".text");
      text.forEach((item) => console.log(item.textContent));

      // Manual access
      console.log(text[0].textContent); // One
      console.log(text[1].textContent); // Two
      console.log(text[2].textContent); // Three
      console.log(text[3].textContent); // Four
      console.log(text[4].textContent); // Five
    </script>
  </body>
</html>
```

---

<br>

## 🔹 4. Arrow Functions

### Description

Arrow functions (`=>`) are a shorter syntax for writing function expressions introduced in ES6. They are especially useful for concise one-liner functions and preserving `this` context in some cases.

---

### Code Example: Trandition

```js
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Jinro"));
```

### Output

> Hello Jinro

---

### Code Example: Arrow function (long form)

```js
const greetArrow = (name) => {
  return "Hey " + name;
};
console.log(greetArrow("Bro"));
```

### Output

> Hey Bro

---

### Code Example: Arrow function (short form)

> **Note:** Arrow function shorthand works **only** when returning a single expression.  
> If the function body contains multiple statements, use curly braces `{}` and an explicit `return`.

```js
const greetShort = (name) => "Welcome mr." + name;
console.log(greetShort("Jame")); // Output: Welcome mr.Jame
```

---

<br>

## 🔹 5. Arrays in JavaScript

Arrays allow you to store multiple values in a single variable. They are widely used for managing lists and collections.

---

### 👥 5.1 Basic Arrays

You can store strings, numbers, or any data types in arrays.

### Code Example

```js
const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixedArray = ["Hello", 42, true, null];

console.log(fruits); // ["Apple", "Banana", "Cherry"]
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(mixedArray); // ["Hello", 42, true, null]
```

---

### 📦 5.2 Arrays of Objects

Useful when storing data like a list of people or products.

### Code Example

```js
const people = [
  { name: "Layla", age: 16 },
  { name: "Miya", age: 20 },
];

console.log(people[0].name); // Layla
console.log(people[1].age); // 20
```

---

### 🧩 5.3 Nested Objects in Arrays

You can nest objects inside other objects for complex data structures.

### Code Example

```js
const personInfo = {
  name: "Jin",
  age: 20,
  address: {
    city: "Tokyo",
    street: "20TY",
    country: "Japan",
  },
};

console.log(personInfo.address.city); // Tokyo
console.log(personInfo.address.street); // 20TY
console.log(personInfo.address.country); // Japan
```

---

### 🛠️ 5.4 Array Methods

Transforms every item in an array and returns a new array.

### Code Example

```js
const students = [
  { name: "Alice", subject: "C#", score: 85 },
  { name: "Bob", subject: "C++", score: 55 },
];

const result = students.map((student) => {
  return `name: ${student.name} - subject: ${student.subject}`;
});

console.log(result);
// ["name: Alice - subject: C#", "name: Bob - subject: C++"]
```

---

### 🔄 Array Methods - map()

Transforms every item in an array and returns a new array.

### Code Example

```js
const students = [
  { name: "Alice", subject: "C#", score: 85 },
  { name: "Bob", subject: "C++", score: 55 },
];

const result = students.map((student) => {
  return `name: ${student.name} - subject: ${student.subject}`;
});

console.log(result);
// Output: ["name: Alice - subject: C#", "name: Bob - subject: C++"]
```

---

### ✅ Array Methods - filter()

Filters items by condition and returns a new array with the matches.

### Code Example

```js
const passed = students.filter((student) => student.score >= 60);
console.log(passed);
// Output: [{ name: "Alice", subject: "C#", score: 85 }]
```

---

### 🔍 Array Methods = find()

Finds and returns the first match only (not all like filter).

### Code Example

```js
const failed = students.find((student) => student.score < 60);
console.log(failed);
// Output: { name: "Bob", subject: "C++", score: 55 }
```

---

<br>

## ⚙️ 6. Destructuring

---

<br>

## ⚙️ 7. Asynchronous JavaScript (async/await)

JavaScript runs code line by line. Normally, it executes tasks one at a time — this is called **synchronous** execution. But in real-world applications (like APIs or user actions), we use **asynchronous** behavior to avoid blocking the program.

---

### ⏱️ 7.1 Synchronous

This runs each task **one after another**, blocking the next one from starting until the current finishes.

```js
const task1 = () => {
  const start = Date.now();
  while (Date.now() - start < 1000) {} // wait 1s
  console.log("Task 1 completed");
};

const task2 = () => {
  const start = Date.now();
  while (Date.now() - start < 2000) {} // wait 2s
  console.log("Task 2 completed");
};

const task3 = () => {
  const start = Date.now();
  while (Date.now() - start < 500) {} // wait 0.5s
  console.log("Task 3 completed");
};

task1(); // Takes 1s
task2(); // Then takes 2s
task3(); // Then takes 0.5s
```

---

### ⏱️ 7.2 Asynchronous (async/await)

This version lets tasks run in the background. The program doesn’t wait — it keeps moving.

### Code Example

```js
const chore1 = () => {
  setTimeout(() => {
    console.log("Task 1 completed");
  }, 1000);
};

const chore2 = () => {
  setTimeout(() => {
    console.log("Task 2 completed");
  }, 2000);
};

const chore3 = () => {
  setTimeout(() => {
    console.log("Task 3 completed");
  }, 500);
};

chore1(); // Starts and waits 1s (in background)
chore2(); // Starts and waits 2s (in background)
chore3(); // Starts and waits 0.5s (in background)
```

---

<br>

## 🔗 8. Modules: Import & Export

Modules allow you to split JavaScript code into multiple files and share variables, functions, or classes between them.

---

### 🗂️ 8 File Structure

### 📄 8.2 math.js (Module File)

Export constants and functions that other files can import.

```js
// math.js

export const PI = 3.14;

export function greeting(name) {
  return `Hello, ${name}!`;
}
```
