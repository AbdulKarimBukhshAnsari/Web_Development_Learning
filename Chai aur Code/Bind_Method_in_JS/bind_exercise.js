// 1st question 
//Basic bind() Usage:
// Write a function greet(name) that prints Hello, [name]!. Use bind() to create a new function 
// greetJohn() which automatically greets a person named "John" when called.
//
//
console.log('1st Question')
console.log('-------------------------------------------')
function greet(name){
    console.log(`Hello, ${name}`);
}

let greetJohn = greet.bind(null,'John');
greetJohn();


console.log('2nd Question')
console.log('-------------------------------------------')
// Using bind() with Arguments:
// Write a function multiply(a, b) that returns the product of a and b. Use bind() to create a new function double()
//  that multiplies any number by 2, using the multiply function.

function multiply(a , b){
    console.log(a*b);
}
let double = multiply.bind(null , 2);
double(5);
double(10);

// bind chaining question in 

// Chaining bind():

// Using the following function:
// javascript
// Copy code
// function greet(name, age) {
//   console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// }
// Use bind() to create a function greetJohn() that sets the name to "John" and then chain another bind() to set the age to 30.
console.log('3rd Question')
console.log('-------------------------------------------')
function greet(name , age){
    console.log(`Hello, my name is ${name} and I am ${age} years old.`)
}
let greet_john1 = greet.bind(null , 'John'); // this is the 1st chain 
let greet_john = greet_john1.bind(null , 14); // this is the 2nd chain 
greet_john();