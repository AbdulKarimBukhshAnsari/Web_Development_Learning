// All the things in  JS is an object if we have made a prototype function in JS then we can use it for string as well

// for example I am making a function for the object 

Object.prototype.greet = function(){
    console.log(`Hello ${this}`) ; // it will refer to that string array etc
}

// implementation 
// suppose I am making a string 
let str = 'Karim';

str.greet(); // the result will be the (Hello Karim)

// if we will make a function prototyoe for the array it will not be applicable in object becuase top to down is possible but not down to top