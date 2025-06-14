# 📘 JavaScript ES6+ Quick Reference

> [!Note]
> ### **[English]**</br>
> ## A concise guide to modern `JavaScript` (ES6 and beyond), with explanations and code examples.<br>
> ### **[Khmer]**<br>
> ## ការណែនាំអំពី 'JavaScript' (ES6) ជាមួយនឹងការពន្យល់ និងឧទាហរណ៍។

## 📃 Lesson Titles

1. [Variables](#1-variables)
2. [Literal Template](#2-literal-template)
3. [DOM](#3-dom)
4. [Arrow Functions](#4-arrow-functions)
5. [Arrays](#5-arrays)
6. [Destructuring](#6-destructuring)
7. [Asynchronous JavaScript (async/await)](#7-asynchronous)
8. [Modules: Import & Export](#8-modules-import--export)

---

<br><br>

# 1. Variables

## 👉🏻 Description

> [!Note]
> **[English]** `JavaScript` provides three ways to declare variables: `var`, `let`, and `const`. Each has different rules about scope, re-declaration, and reassignment.<br>
> **[Khmer]** ការប្រកាស `variables` ក្នុង `JavaScript` មាន 3 របៀប៖ `var`, `let`, និង `const`។ របៀបនីមួយៗមានច្បាប់ផ្សេងៗគ្នាអំពី ការប្រើប្រាស ការប្រកាសឡើងវិញ និងការចាត់តាំងឡើងវិញ។ 

<br>


- ## `var`

>[!Note]
> **[Engish]** can be re-declared and reassigned.<br>
> **[Kkhmer]** អាចត្រូវបានប្រកាស និងចាត់តាំងឡើងវិញ។

### Code Example

```js
var name = "John";
console.log(name);

var name = "Jane";
console.log(name);
```

### Output:

> John <br> Jane

<br>

- ## `let`

> [!Note]
> **[English]** can be reassigned, but NOT re-declared in the same scope. Meaning you cannot declare the same variable name that already exist.<br>
> **[Khmer]** អាចចាត់តាំងឡើងវិញបាន ប៉ុន្តែមិនអាចប្រកាសឡើងវិញបានទេ។ មានន័យថា យើងមិនអាចយក `variable` ដែលប្រកាសម្តងហើយមកបង្កើតម្តងទៀតបានទេ។

> [!Caution]
> ❌ SyntaxError: Identifier 'username' has already been declared. <br>
> 👉🏻 **[English]** This mean you cannot `declare` using the same `variable name` but you can `override` the value.<br>
> 👉🏻 **[Khmer]** នេះមានន័យថាអ្នកមិនអាច 'ប្រកាស variable' ដោយប្រើ 'ឈ្មោះ variable' ដូចគ្នា ប៉ុន្តែអ្នកអាច 'override' តម្លៃ។ 

### Code Example

```js
let username = "john_doe";
console.log(username);

// let username = "jane_doe"; // ❌ SyntaxError

username = "jane_doe"; // ✅ Reassignment allowed
console.log(username);
```

### Output:

> john_doe <br> jane_doe

<br>

- ## `const`

> [!Note]
> **[English]** cannot be re-declared or reassigned.<br>
> **[Khmer]** មិន​អាច​ប្រកាស​ឡើង​វិញ ​ឬ​ចាត់​តាំង​ឡើង​វិញ​បានឡើយ។ 

### Code Example

> [!Caution]
> ❌ TypeError: Assignment to constant variable. <br><br>
> 👉🏻 **[English]** This mean the value is **fixed** and cannot be change or override.<br>
> 👉🏻 **[Khmer]** នេះមានន័យថាតម្លៃគឺ **Fixed** ហើយមិនអាចផ្លាស់ប្តូរ ឬ override បានទេ។

```js
const age = 20;
console.log(age);

// age = 21; ❌ TypeError
```

### Output:

> 20

---

<br>

> [!Tip]
> ## **[English]**<br>
> - The `var` variable name is re-declared and updated from **"John"** to **"Jane"**, so the final value printed is **"Jane"**.
> - The `let` variable username starts as **"john_doe**", then is reassigned to **"jane_doe"**, which is allowed. **Re-declaring** it in the same scope would cause an error.
> - The `const` variable age is printed as 20. Trying to change it would cause an error.<br>
> ## **[Khmer]**<br>
> - ការប្រកាសឈ្មោះ `name` ដោយប្រើ `var` យើងអាចកែរតម្លៃ និងធ្ការវើ override ឡើងវិញពី **"John"** ទៅ **"Jane"** បាន។ ដូច្នេះតម្លៃចុងក្រោយដែលបាន output គឺ **"Jane"**។
> - ការប្រកាសឈ្មោះ `username` ដោយប្រើ `let`: ចាប់ផ្តើមជា **"john_doe**" បន្ទាប់មកត្រូវបានកែរតម្លៃឡើងវិញទៅ **"jane_doe"**។ **ការ​ប្រកាស​ឡើង​វិញ** ក្នុង `scope` ដូចគ្នា​នឹង​បង្ក​ឱ្យ​មាន​កំហុស (Error)។
> - ការប្រកាសអាយុ `age` ដោយប្រើ `const` ត្រូវបាន output: **20**។ ការព្យាយាមផ្លាស់ប្តូរវានឹងបណ្តាលឱ្យមានកំហុស(Error)។

---

<br><br>

## 2. Literal Template

### 👉🏻 Description

> [!Note]
> **[English]** `Template literals` (also called template strings) are a cleaner way to embed variables and expressions inside strings using ``backticks``. Meaning you can call variable or add condition inside string unlike `'single quotes'` and `"double quotes"`<br><br>
> **[Khmer]** `Template literals` (ហៅផងដែរថា template strings) គឺជាវិធីស្អាតជាងក្នុងការបង្កប់អថេរ និងកន្សោមនៅខាងក្នុងខ្សែអក្សរដោយប្រើ ``backticks`` ។ មាន​ន័យ​ថា​អ្នក​អាច​ហៅ​ variable ឬ​បន្ថែម​លក្ខខណ្ឌ​នៅ​ក្នុង​ string បាន មិន​ដូចជា `'single quotes'` និង `"double quotes"`។

### Code Example

```js
let firstName = "John";
let lastName = "son";
let fullName = `Fullname: ${firstName} ${lastName}`;

console.log(fullName);
```

### Output:

> Fullname: John son

---

<br><br>

## 3. DOM

### 👉🏻 Description

> [!Note]
> **[English]** Learn how to access and manipulate `HTML elements` using JavaScript DOM methods like `getElementById`, `getElementsByClassName`, `querySelector`, and more.<br>
> **[Khmer]** ស្វែងយល់ពីរបៀបចូលប្រើ និងរៀបចំ`ធាតុ HTML` ដោយប្រើវិធីសាស្ត្រ JavaScript DOM ដូចជា `getElementById`, `getElementsByClassName`, `querySelector` និងច្រើនទៀត។

<br>

> [!Important]
> ### Understand example flow below.<br>
> **[English]** Please look out for `DOM Selector` in **HTML** and **compare** with **JavaScript** in `script tag` to avoid confusion.<br>
> **[Khmer]** សូមរកមើល `DOM Selector` នៅក្នុង **HTML** និង **ប្រៀបធៀប** ជាមួយ **JavaScript** ក្នុង `script tag` ដើម្បីជៀសវាងការភ័ន្តច្រឡំ។

<br>

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

<br><br>

## 4. Arrow Functions

### 👉🏻 Description

> [!Note]
> **[English]** `Arrow functions` (`=>`) are a shorter syntax for writing function expressions introduced in ES6.<br>
> **[Khmer]** > `Arrow functions` (`=>`) គឺជា syntax ខ្លីជាងសម្រាប់ការសរសេរ function ដែលបានណែនាំនៅក្នុង ES6 ។

---

<br>

### Code Example: **Trandition**

```js
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Jinro"));
```

### Output:

> Hello Jinro

---

<br>

### Code Example: **Arrow function** (short form)

> [!Important]
> **[English]** **Arrow function shorthand** works only when returning a single expression.<br>
> **[Khmer]** **Arrow function shorthand** ដំណើរការតែនៅពេល return តម្លៃតែមួយប៉ុណ្ណោះ។ 

```js
const greetShort = (name) => "Welcome mr." + name;
console.log(greetShort("Jame"));
```

### Output:

> Welcome mr.Jame

<br>

### Code Example: **Arrow function** (long form)

> [!Important]
> **[English]** If the function body contains **multiple statements**, use curly braces `{}` and an explicit `return` **keyword**.<br>
> **[Khmer]** ប្រសិនបើ **statements** មានច្រើន យើងប្រើ curly braket `{}` និង `return` ** keyword **។

```js
const greetArrow = (name) => {
  return "Hey " + name;
};
console.log(greetArrow("Bro"));
```

### Output:

> Hey Bro

---

<br><br>

## 5. Arrays

### 👉🏻 Description

> [!Note]
> **[English]** `Arrays` allow you to store multiple values in a single variable. They are widely used for managing lists and collections.<br>
> **[Khmer]** `Arrays` អនុញ្ញាតឱ្យអ្នយើងរក្សាទុកតម្លៃជាច្រើននៅក្នុង variable តែមួយ។ ពួកវាត្រូវបានគេប្រើយ៉ាងទូលំទូលាយសម្រាប់ការគ្រប់គ្រងបញ្ជី និងការប្រមូល។

---

<br>

### 👥 5.1 Basic Arrays

> [!Note]
> **[English]** You can store `strings`, `numbers`, or `any` data types in arrays.<br>
> **[Khmer]** អ្នកអាចរក្សាទុក `អក្សរ` `លេខ` ឬ `ប្រភេទទិន្នន័យណាមួយ” នៅក្នុង Array។

### Code Example

```js
const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixedArray = ["Hello", 42, true, null];

console.log(fruits); // ["Apple", "Banana", "Cherry"]
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(mixedArray); // ["Hello", 42, true, null]
```

### Output:

> ["Apple", "Banana", "Cherry"] <br> [1, 2, 3, 4, 5] <br> ["Hello", 42, true, null]

---

<br>

### 📦 5.2 Arrays of Objects

> [!Note]
> **[English]** Useful when storing data like a list of people or products.
> **[Khmer]** មានប្រយោជន៍នៅពេលរក្សាទុកទិន្នន័យដូចជាបញ្ជីមនុស្ស ឬផលិតផល។ 

### Code Example

```js
const people = [
  { name: "Layla", age: 16 },
  { name: "Miya", age: 20 },
];

console.log(people[0].name); // Layla
console.log(people[1].age); // 20
```

### Output:

> Layla <br> 20

---

<br>

### 🧩 5.3 Nested Objects in Arrays

> [!Note]
> You can nest objects inside other objects for complex data structures.

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

### Output:

> Tokyo <br> 20YT <br> Japan

---

<br>

### 🛠️ 5.4 Array Methods

> [!Note]
> Transforms every item in an array and returns a new array.

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
```

### Output:

> ["name: Alice - subject: C#", "name: Bob - subject: C++"]

---

<br>

### 🔄 5. Array Methods - map()

> [!Important]
> Transforms every item in an array and returns a new array.

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
```

### Output:

> ["name: Alice - subject: C#", "name: Bob - subject: C++"]

---

<br>

### ✅ 5. Array Methods - filter()

> [!Important]
> Filters items by condition and returns a new array with the matches.

### Code Example

```js
const passed = students.filter((student) => student.score >= 60);
console.log(passed);
```

### Output:

> [{ name: "Alice", subject: "C#", score: 85 }]

---

<br>

### 🔍 5. Array Methods = find()

> [!Important]
> Finds and returns the first match only (not all like filter).

### Code Example

```js
const failed = students.find((student) => student.score < 60);
console.log(failed);
```

### Output:

> { name: "Bob", subject: "C++", score: 55 }

---

<br><br>

## 6. Destructuring

### 👉🏻 Description

> [!Note]
> This document demonstrates how to use `destructuring` in `JavaScript` with `arrays` and `objects`.

<br>

### 📦 6.1 Array Destructuring

Traditional Way (Old Method)

```js
const colors = ["red", "green", "blue"];

const first = colors[0]; // "red"
console.log(first);
```

### Output:

> red

---

<br>

- ### ✅ Destructuring Arrays

```js
const [item1, item2] = colors;
console.log(item1); // "red"
console.log(item2); // "green"
```

### Output:

> red <br> green

---

<br>

- ### ✅ Skipping Items in Array Destructuring

```js
const [color1, , color3] = colors;
console.log(color1); // "red"
console.log(color3); // "blue"
```

### Output:

> red <br> blue

- ### ✅ Object Destructuring with Renaming

```js
const user = { name: "Alex", age: 30, city: "Paris" };

const { name: userName, city: userCity } = user;
console.log(userName); // "Alex"
console.log(userCity); // "Paris"
```

### Output:

> Alex <br> Paris

---

<br><br>

## 7. Asynchronous

### 👉🏻 Description

> [!Note]
> `JavaScript` runs code line by line. Normally, it executes tasks one at a time — this is called `synchronous` execution. But in real-world applications (like APIs or user actions), we use `asynchronous` behavior to avoid blocking the program.

---

<br>

### ⏱️ 7.1 Synchronous

> [!Note]
> This runs each task **one after another**, blocking the next one from starting until the current finishes.

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

### Output:

> Task 1 completed <br> Task 2 completed <br> Task 3 completed

---

<br>

### ⏱️ 7.2 Asynchronous (async/await)

> [!Note]
> This version lets tasks run in the background. The program doesn’t wait — it keeps moving.

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

### Output:

> Task 3 completed <br> Task 1 completed <br> Task 2 completed

---

<br><br>

## 8. Modules: Import & Export

### 👉🏻 Description

> [!Note]
> `Modules` allow you to split `JavaScript` code into `multiple files` and `share variables`, `functions`, or `classes` between them.

<br>

> [!Important]
> This section require `multiple files` because we will be `exporting` and `importing` from other **files** 📁.

---

<br>

### 8.1 Single **export** & **import**

> [!Note]
> Used to export a `single` value (default export).

### 🗂️ File: **utils.js**

```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

### 🗂️ File: **index.js**

```js
import { add, subtract } from "./utils.js";

console.log(add(2, 3));
console.log(subject(5, 10));
```

### Output:

> 5 <br> -5

---

<br>

### 8.2 Multiple **export** & **import**

> [!Note]
> Used to export a `multiple` values.

### 🗂️ File: **math.js**

```js
export const PI = 3.14;

export function greeting(name) {
  return `Hello, ${name}!`;
}
```

---

### 🗂️ File: **index.js**

```js
import { PI, greeting } from "./math.js";

console.log(PI);
console.log(greeting("Alice"));
```

### Output:

> 3.14 <br> Hello, Alice!

---

<br>
