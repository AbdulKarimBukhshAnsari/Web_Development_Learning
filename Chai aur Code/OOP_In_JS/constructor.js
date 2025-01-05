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
