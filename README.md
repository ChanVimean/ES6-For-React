# 📘 JavaScript ES6+ Quick Reference 

> [!Note]
> ### **[English]**</br>
> A concise guide to modern `JavaScript` (ES6 and beyond), with explanations and code examples.<br>
> ### **[Khmer]**<br>
> ការណែនាំអំពី 'JavaScript' (ES6) ជាមួយនឹងការពន្យល់ និងឧទាហរណ៍។

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
> **[English]** `JavaScript` provides three ways to declare variables: `var`, `let`, and `const`. Each has different rules about scope, re-declaration, and reassignment.<br><br>
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
> **[English]** can be reassigned, but NOT re-declared in the same scope. Meaning you cannot declare the same variable name that already exist.<br><br>
> **[Khmer]** អាចចាត់តាំងឡើងវិញបាន ប៉ុន្តែមិនអាចប្រកាសឡើងវិញបានទេ។ មានន័យថា យើងមិនអាចយក `variable` ដែលប្រកាសម្តងហើយមកបង្កើតម្តងទៀតបានទេ។

<br>

> [!Caution]
> ❌ SyntaxError: Identifier 'username' has already been declared. <br>
> 👉🏻 **[English]** This mean you cannot `declare` using the same `variable name` but you can `override` the value.<br><br>
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
> - The `const` variable age is printed as 20. Trying to change it would cause an error.<br><br>
> ## **[Khmer]**<br>
> - ការប្រកាសឈ្មោះ `name` ដោយប្រើ `var` យើងអាចកែរតម្លៃ និងធ្ការវើ override ឡើងវិញពី **"John"** ទៅ **"Jane"** បាន។ ដូច្នេះតម្លៃចុងក្រោយដែលបាន output គឺ **"Jane"**។
> - ការប្រកាសឈ្មោះ `username` ដោយប្រើ `let`: ចាប់ផ្តើមជា **"john_doe**" បន្ទាប់មកត្រូវបានកែរតម្លៃឡើងវិញទៅ **"jane_doe"**។ **ការ​ប្រកាស​ឡើង​វិញ** ក្នុង `scope` ដូចគ្នា​នឹង​បង្ក​ឱ្យ​មាន​កំហុស (Error)។
> - ការប្រកាសអាយុ `age` ដោយប្រើ `const` ត្រូវបាន output: **20**។ ការព្យាយាមផ្លាស់ប្តូរវានឹងបណ្តាលឱ្យមានកំហុស(Error)។

---

<br><br>

## 2. Literal Template

### 👉🏻 Description

> [!Note]
> **[English]** <br>
> `Template literals` (also called template strings) are a cleaner way to embed variables and expressions inside strings using ``backticks``. Meaning you can call variable or add condition inside string unlike `'single quotes'` and `"double quotes"`<br><br>
> **[Khmer]** <br>
> `Template literals` (ហៅផងដែរថា template strings) គឺជាវិធីស្អាតជាងក្នុងការបង្កប់អថេរ និងកន្សោមនៅខាងក្នុងខ្សែអក្សរដោយប្រើ ``backticks`` ។ មាន​ន័យ​ថា​អ្នក​អាច​ហៅ​ variable ឬ​បន្ថែម​លក្ខខណ្ឌ​នៅ​ក្នុង​ string បាន មិន​ដូចជា `'single quotes'` និង `"double quotes"`។

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
> **[English]** <br>
> Learn how to access and manipulate `HTML elements` using JavaScript DOM methods like `getElementById`, `getElementsByClassName`, `querySelector`, and more.<br><br>
> **[Khmer]** <br>
> ស្វែងយល់ពីរបៀបចូលប្រើ និងរៀបចំ`ធាតុ HTML` ដោយប្រើវិធីសាស្ត្រ JavaScript DOM ដូចជា `getElementById`, `getElementsByClassName`, `querySelector` និងច្រើនទៀត។

<br>

> [!Important]
> ### Understand example flow below.<br>
> **[English]** <br>
> Please look out for `DOM Selector` in **HTML** and **compare** with **JavaScript** in `script tag` to avoid confusion.<br><br>
> **[Khmer]** <br>
> សូមរកមើល `DOM Selector` នៅក្នុង **HTML** និង **ប្រៀបធៀប** ជាមួយ **JavaScript** ក្នុង `script tag` ដើម្បីជៀសវាងការភ័ន្តច្រឡំ។

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
> **[English]** <br>
> `Arrow functions` (`=>`) are a shorter syntax for writing function expressions introduced in ES6.<br>
> **[Khmer]** <br>
> `Arrow functions` (`=>`) គឺជា syntax ខ្លីជាងសម្រាប់ការសរសេរ function ដែលបានណែនាំនៅក្នុង ES6។

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
> **[English]** <br>
> **Arrow function shorthand** works only when returning a single expression.<br>
> **[Khmer]** <br>
> **Arrow function shorthand** ដំណើរការតែនៅពេល return តម្លៃតែមួយប៉ុណ្ណោះ។ 

```js
const greetShort = (name) => "Welcome mr." + name;
console.log(greetShort("Jame"));
```

### Output:

> Welcome mr.Jame

<br>

### Code Example: **Arrow function** (long form)

> [!Important]
> **[English]** <br>
> If the function body contains **multiple statements**, use curly braces `{}` and an explicit `return` **keyword**.<br><br>
> **[Khmer]** <br>
> ប្រសិនបើ **statements** មានច្រើន យើងប្រើ curly braket `{}` និង `return` ** keyword **។

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
> **[English]** <br>
> `Arrays` allow you to store multiple values in a single variable. They are widely used for managing lists and collections.<br><br>
> **[Khmer]** <br>
> `Arrays` អនុញ្ញាតឱ្យអ្នកយើងរក្សាទុកតម្លៃជាច្រើននៅក្នុង variable តែមួយ។ ពួកវាត្រូវបានគេប្រើយ៉ាងទូលំទូលាយសម្រាប់ការគ្រប់គ្រងបញ្ជី និងការប្រមូល។

---

<br>

### 👥 5.1 Basic Arrays

> [!Note]
> **[English]** <br>
> You can store `strings`, `numbers`, or `any` data types in arrays.<br>
> **[Khmer]** <br>
> អ្នកអាចរក្សាទុក `អក្សរ` `លេខ` ឬ `ប្រភេទទិន្នន័យណាមួយ” នៅក្នុង Array។

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
> **[English]** <br>
> Useful when storing data like a list of people or products.<br>
> **[Khmer]** <br>
> មានប្រយោជន៍នៅពេលរក្សាទុកទិន្នន័យដូចជាបញ្ជីមនុស្ស ឬផលិតផល។ 

### Code Example

```js
const people = [
  { name: "Jin", age: 16 },
  { name: "Joe", age: 20 },
];

console.log(people[0].name); // Jin
console.log(people[1].age); // 20
```

### Output:

> Jin <br> 20

---

<br>

### 🧩 5.3 Nested Objects in Arrays

> [!Note]
> **[English]** <br>
> You can nest objects inside other objects for complex data structures.<br>
> **[Khmer]** <br>
> យើងអាចដាក់វត្ថុនៅខាងក្នុងវត្ថុផ្សេងទៀតសម្រាប់រចនាសម្ព័ន្ធទិន្នន័យស្មុគស្មាញ។

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

<br>

> [!Important]
> **[English]** <br>
> Why use `curly bracket {}` rather than `square bracket []`? Because `{}` for **object** and `[]` for **arrays**.<br><br>
> **[Khmer]** <br>
> ហេតុអ្វីត្រូវប្រើ `curly bracket {}`ជាជាង`square bracket []`? ដោយសារតែ {} ប្រើសម្រាប់ **object** និង [] ប្រើសម្រាប់ **arrays**។

---

<br>

### 🛠️ 5.4 Array Methods

> [!Note]
> ## **[English]** <br>
> - In JavaScript, an `array method` is a `built-in` function that you can use to manipulate or work with **arrays**.<br>
> - There are many **array method** such as `.push()`, `.pop()`, `.foreach()`, `.map()`, `.filter()`, etc.<br>
> - We'll cover the 3 most used methods in React and other high-level frameworks.<br>
> ## **[Khmer]** <br>
> - ក្នុង JavaScript, **array method** គឺជា មុខងារ ដែលបានបង្កើតរួចហើយ `(built-in function)` ដែលអ្នកអាចប្រើដើម្បីបម្លែង ឬ ដំណើរការជាមួយ **arrays**។<br>
> - មាន array methods ជាច្រើនដូចជា `.push()`, `.pop()`, `.forEach()`, `.map()`, `.filter()` និងច្រើនទៀត។<br>
> - យើងនឹងរៀនពី `3 methods` ដែលត្រូវប្រើច្រើនបំផុតក្នុង `React` និង `framework` កម្រិតខ្ពស់ផ្សេងទៀត។

<br>

### 🔄 5.4.1 Array Methods - map()

> [!Important]
> **[English]** <br>
> Transforms every item in an array and returns a new **array**.<br>
> **[Khmer]** <br>
> បំប្លែងធាតុនីមួយៗក្នុង **array** មួយ ហើយត្រឡប់ **array** ថ្មី។

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

### ✅ 5.4.2 Array Methods - filter()

> [!Important]
> **[English]** <br>
> `Filter` checks each item and keeps the ones that match the condition. It gives you a new **array** with those matching items.<br>
> **[Khmer]** <br>
> `filter` ពិនិត្យរាល់ធាតុក្នុង **array** ហើយរកតែធាតុដែលត្រូវនឹងលក្ខខណ្ឌ។ វាបញ្ជូនចេញជា array ថ្មី ដែលមានតែធាតុដែលត្រូវនឹងលក្ខខណ្ឌប៉ុណ្ណោះ។

### Code Example

```js
const passed = students.filter((student) => student.score >= 60);
console.log(passed);
```

### Output:

> [{ name: "Alice", subject: "C#", score: 85 }]

---

<br>

### 🔍 5.4.3 Array Methods = find()

> [!Important]
> **[English]** <br>
> `find()` checks each item and returns the first one that matches the condition. If nothing matches, it returns `undefined`. <br>
> **[Khmer]** <br>
> `find()` ពិនិត្យរាល់ធាតុក្នុង **array** ហើយ **return** តែ ធាតុដំបូង ដែលផ្គូផ្គងនឹងលក្ខខណ្ឌ។ ប្រសិនបើមិនមានធាតុណាដែលផ្គូផ្គងទេ វាត្រឡប់ `undefined`។

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
> **[English]** <br>
> This document shows how to use `destructuring` in JavaScript to get values from `arrays` and `objects` more easily. <br>
> **[Khmer]** <br>
> ឯកសារនេះបង្ហាញពីវិធីប្រើ `destructuring` ក្នុង JavaScript ដើម្បីដកទិន្នន័យពី `arrays` និង `objects` ឱ្យបានងាយស្រួលជាងមុន។

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
> ## **[English]** <br>
> **JavaScript** runs code line by line. Normally, it executes tasks one at a time — this is called `synchronous` execution. But in real-world applications **(like APIs or user actions)**, we use `asynchronous` behavior to avoid `blocking` the program. <br>
> ## **[Khmer]** <br>
> **JavaScript** run code មួយជួរដោយលំដាប់ — ហៅថា `synchronous។` ប៉ុន្តែក្នុងការប្រើប្រាស់ពិតប្រាកដ **(ដូចជាការហៅ API ឬការរង់ចាំ)** យើងប្រើ `asynchronous` ដើម្បីឲ្យកម្មវិធីបន្តដំណើរការបានដោយមិនបង្ហាប់ `blocking`។

---

<br>

### ⏱️ 7.1 Synchronous

> [!Note]
> ## **[English]** <br>
> `Synchronous` means each task runs one after another. The next task waits until the current one is completely finished. <br>
> ## **[Khmer]** <br>
> `Synchronous` មានន័យថា ការងារនីមួយៗត្រូវដំណើរការ ក្រោយគ្នា។ ការងារបន្ទាប់ត្រូវរង់ចាំរហូតដល់ការងារបច្ចុប្បន្នបញ្ចប់សិនទើបអាចបន្តទៅមុខទៀតបាន។

```js
const task1 = () => {
  console.log("Task 1");
};

const task2 = () => {
  console.log("Task 2");
};

const task3 = () => {
  console.log("Task 3");
};

task1();
task2();
task3();
```

### Output:

> Task 1 completed <br> Task 2 completed <br> Task 3 completed

---

<br>

### ⏱️ 7.2 Asynchronous (async/await)

> [!Note]
> ## **[English]** <br>
> In `asynchronous` code, tasks can **run** in the **background**. The program doesn’t stop or wait — it keeps going and handles results when they’re ready. <br>
> ## **[Khmer]** <br>
> `asynchronous` អនុញ្ញាតឲ្យ **code** run នៅក្រោយជា **background**។ **Program** មិនបង្ហាប់ដើម្បីរង់ចាំទេ វាបន្តដំណើរការហើយដោះស្រាយលទ្ធផលនៅពេលដែលរួចរាល់។

### Code Example 1

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
> ## **[English]** <br>
> `Modules` let you `split` your JavaScript code into `multiple files`. You can `share variables`, `functions`, or `classes` between these **files** easily. <br>
> ## **[Khmer]** <br>
> `Modules` អនុញ្ញាតឲ្យអ្នកបែងចែកកូដ **JavaScript** ជាច្រើន **Files** ។ អ្នកអាចចែករំលែក `variables`, `functions` ឬ `classes` រវាង **files** ទាំងនោះបានយ៉ាងងាយស្រួល។

<br>

> [!Important]
> ## **[English]** <br>
> This section **requires** using `multiple files` because we will be `exporting` and `importing` code between different **files** 📁. <br>
> ## **[Khmer]** <br>
> **Section** នេះត្រូវការប្រើ `files` ច្រើន ពីព្រោះយើងនឹង `export` និង `import` កូដពី **files** ផ្សេងៗ 📁 ។

---

<br>

### 8.1 Single **export** & **import**

> [!Note]
> **[English]** <br>
> Used to `export` a single value from a **module** — this is called the `default export`.<br>
> **[Khmer]** <br>
> ប្រើសម្រាប់ `export` តែមួយតម្លៃពី **module** មួយ ហៅថា `default export`។

### 🗂️ File: **utils.js** (other file)

```js
const add = (a, b) => a + b;

export default add;
```

### 🗂️ File: **index.js** (main file)

```js
import add from "./utils.js";

console.log(add(2, 3));  // 5
```

### Output:

> 5

---

<br>

### 8.2 Multiple **export** & **import**

> [!Note]
> **[English]** <br>
> Used to export` multiple values` from a **module**. These are called named `export` and are `import` using` {}`. <br>
> **[Khmer]** <br>
> ប្រើសម្រាប់ `export` តម្លៃ ច្រើន ពី **module** តែមួយ។ វាត្រូវបានហៅថា `export` ហើយត្រូវ `import` ជាមួយ `{}`។

### 🗂️ File: **math.js** (other file)

```js
export const PI = 3.14;

export function greeting(name) {
  return `Hello, ${name}!`;
}
```

---

### 🗂️ File: **index.js** (main file)

```js
import { PI, greeting } from "./math.js";

console.log(PI);                // 3.14
console.log(greeting("Alice")); // Hello, Alice!
```

### Output:

> 3.14 <br> Hello, Alice!

---

<br>
