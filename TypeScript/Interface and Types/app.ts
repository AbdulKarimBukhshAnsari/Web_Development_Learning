// Interface are used mostly to define the structure for the object 

interface Student {
    name : string , 
    batch :number , 
    rollNumber? : number, // it is optional  
}

// it will throw an error if it is strictly not following that shape and types 
let karim : Student = {
    name : "karim" ,
    batch : 23 , 
    rollNumber : 52 
}

// one interface can extend other interfaces , useful for large projects 

interface Person {
    name : string , 
    age: number 
}

interface Teacher extends Person {
    subject : string 
}

// we need to enter three options for Rehan 
let rehan : Teacher = {
    name : "Rehan", 
    age : 53 , 
    subject : "Mathematics"
}

// type is used for defining the custom Types 


// Create a type ID that can be either a number or a string.
// Write a function that accepts this ID and logs it.

type ID = number | string ;

function logsID(id : ID) {
    console.log(id);
}

logsID("ID");

// Create a type Status that allows only:

// "success"

// "error"

// "loading"

// Try assigning an invalid value and note the error.

type status = "success" | "error" | "loading" ;

// const currentStatus : status = "done" ;  we will get an error 

const correctStatus : status = "success";


// for further details , visit README