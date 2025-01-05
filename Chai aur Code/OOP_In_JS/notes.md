# OOPS in JS 

## Object Literal in JS : 
In JavaScript, an object literal is a simple way to create objects using curly braces {}. It's called "literal" because you're literally writing out the key-value pairs that define the object.

```javascript
let person = {
    name: 'Karim',
    class: 14,
    cgpa: 3.86,
    about: function() {
        return 'My name is: ' + this.name;
    }
};
console.log(person.cgpa);
```
### Create a copy of an object literal by Object.Create() 
*What is Object.create()?*

* The Object.create() method is used to create a new object that inherits properties from another object.
* It does not copy the properties from the original object, but the new object will be able to access those properties.
* It creates a new object where you can define what it inherits from the prototype (or another object).

```javascript 
let person = {         
    name: 'Karim', 
    class: 14,
    cgpa: 3.86,
    about: function() {
        return 'My name is: ' + this.name;
    }
};

// Creating a new object that inherits from 'person'
let student = Object.create(person);

// Now, student can access properties from 'person'
console.log(student.about());  // Output: 'My name is: undefined'

// Adding a new property to student
student.name = 'Hilal';
console.log(student.about());  // Output: 'My name is: Hilal'
```

### Create the copy by using the object.assign()
It will create the copy by copying the each parameters , it will not inherit the property rather than it will copy completely . you can use it and reassign the values .

```javascript 
let person_final = Object.assign({}, person);
console.log("This is the copy : ");
console.log(person_final);
```

## 'this' Keyword in JS 
* Use of *this* in different context 

### In an object method

In an object methid this refers to the current object in which the functions is present .

```javascript 
let obj = {
    name : 'Karim ',
    about : function(){
        return 'My name is ' + this.name;
    }
}

console.log(obj.about());
```
### in Alone 
*this* refers to the global object 

```javascript
let x = this;  // which will be the empty when we try to print in teh node env .
```

### In Function 
*this* refers to the global object 

```javascript 
function hello(){
    return this ; // it will refer the current global object if the function is not in a strict mode 
}
```
## Constructor Function in JS 

A **constructor function** in JavaScript is a special type of function used to create and initialize objects. When called with the `new` keyword, it generates a new object, sets up the prototype link, and binds `this` to the new object, allowing you to define properties and methods for the instance. Constructor functions are named with a capital letter by convention (e.g., `Person` or `Car`) to indicate they are intended for object creation.


```javascript

// The constructor function is used to create a new instance of the object 


function User_Data(name , grade , cgpa){
    this.name = name;
    this.grade = grade ;
    this.cgpa = cgpa ;
    return this ; // this line is optional , automatically this will be returned 
}


// if we will make the function withot using the "new" keyword it will overwrite the values because the function in non strict mode refers to the global 
// this which is obv same for both , so avoid this confusion we will make the separate instances by using new
user_one = new User_Data('karim' , '10' ,3.86);
user_two = new User_Data('hilal', '12', 3.80);
console.log(user_one);
console.log(user_two)

```




