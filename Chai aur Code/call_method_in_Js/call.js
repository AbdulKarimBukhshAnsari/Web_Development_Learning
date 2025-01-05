// call help you to run the function in according to the given context , it will run explcitly accoridng to the this you have been provided

let person1 = {
    name_person : 'Karim',
    age : 14 , 
    cga : 4.00,
    greet : function(){
        console.log(`Welcome ${this.name_person}`)
    }
};

let person2 = {
    name_person : 'Hilal',
}

// person1.greet.call(person2)  // the result will be the "Welcome Hilal" , though it is a 

// simple Experiment 

function Add(name){
    this.name = name;
}

function User(name , age , cgpa){
    this.age = age ;
    this.cgpa = cgpa ; 
    Add(name);
}

let new_user = new User('Karim' , 13 , 3.89);
console.log(new_user);
console.log(globalThis); // here we wil find our user name because this in the function Add referring the global this 