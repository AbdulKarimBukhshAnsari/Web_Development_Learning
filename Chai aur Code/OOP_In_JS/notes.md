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

