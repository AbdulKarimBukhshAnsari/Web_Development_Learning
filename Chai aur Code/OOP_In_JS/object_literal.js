// it is basically a prototype based language , it is not basically a Oop based language 
// Object literal is a way of creating the objects by using key , values , you can also add methods inside the object literal



let person = {         // way of creating of the object 
    name : 'Karim', 
    class : 14 ,
    cgpa : 3.86,
    about : function(){
        return 'My name is : '+ this.name;  // 'this" is used to refer the present context 
    }
};

console.log(person.cgpa); // how can we use each and everything of the object 

// to create the another instance of the same object we can use Object.create() method 
// it will inherit the properties not will copy until you define it explicitly 

let person2 = Object.create(person);


console.log(person); // the result will be the above first object 
console.log(person2.about()); // the result will be the second object in which the name is Hilal 


// another method to create a copy 

let person_final = Object.assign({}, person);
console.log("This is the copy : ");
console.log(person_final);




