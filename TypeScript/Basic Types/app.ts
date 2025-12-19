// TS stricly tell you the follow the specific type
let arr: (string[] | number[]) = [1,2,3,4]

// the difference between any and unknown

// any removes the benefit of using TS 

let number:any ;
number = 1;
number = "string" ; // will not catch any error in TS 

let check: unknown; // it works similar to any but you must have to check the type before applying any function 

check = "Hello World";
if(typeof(check) === "string") {
    let modified:string = check.toLowerCase();
    console.log(modified) ;
}

// tuple helps you to make the array of fixed size and type 

let tuple : [string , string , number] = ["karim" , "maqsood" , 21 ];

// Enum are the set of Fixed values which increases the readability of code easily , It is Read Only  

enum statusCode {
    Success = 200 , 
    unauthorize = 500 , 
    badRequest = 400 
}

let state: statusCode = statusCode.Success ;

console.log(state);
