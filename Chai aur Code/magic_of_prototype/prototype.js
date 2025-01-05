// If we have made a constructor function in JS and make an instance by using new keyword then we can make a shared function by using prototyoe 

function User(name , age){
    this.name = name;
    this.age = age ;
}


// it will be shared along all the instances. 
// if you don't use new keyword then it will be stored in the global this .
User.prototype.greet = function(){
    console.log(`Welcome ${this.name}`);
}


// to attach with all instances of the function we will use a new keyword 
let hello = new User('Karim', 20);
hello.greet();
