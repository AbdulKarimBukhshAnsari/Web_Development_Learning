### Prototype Inheritance in JavaScript

**Prototype inheritance** in JavaScript is a way to share properties and methods among objects. It allows an object to use properties and methods from another object, referred to as its **prototype**.

In JavaScript, every object has an internal link to another object called its prototype. This prototype object may also have its own prototype, forming a chain known as the **prototype chain**. When you try to access a property or method on an object, JavaScript looks for it:

1. On the object itself.
2. If not found, it looks at the object's prototype.
3. It continues up the prototype chain until it finds the property or method or reaches the end of the chain (the `null` prototype).

### Example of Prototype Inheritance:

```javascript
// Parent object (prototype)
const parent = {
  greet: function () {
    console.log("Hello from the parent!");
  }
};

// Child object inheriting from parent
const child = Object.create(parent);

child.greet(); // Output: "Hello from the parent!"
```
![Picture](https://www.freecodecamp.org/news/content/images/2024/05/Screenshot-2024-05-09-at-23.12.29.png)

## Interesting Example in JavaScript

In JavaScript, **strings**, **arrays**, and **functions** are all objects. This means if you define a function in the prototype of an object, you can access that function via a string, array, or object as well.

### Example:

```javascript
// Defining a function on the String prototype
String.prototype.greet = function() {
  console.log(`Hello, ${this}!`);
};

// Using the function with a string
const name = "Alice";
name.greet(); // Output: "Hello, Alice!"

// Defining a function on the Array prototype
Array.prototype.sum = function() {
  return this.reduce((acc, current) => acc + current, 0);
};

// Using the function with an array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); // Output: 15

// Defining a function on the Function prototype
Function.prototype.callMe = function() {
  console.log("You called me!");
};

// Using the function with a function
const myFunction = function() {};
myFunction.callMe(); // Output: "You called me!"
```

