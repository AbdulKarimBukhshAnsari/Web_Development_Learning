// we can inherit the property of another object to another project by using the keyword __proto__


// If we want to ensure that something should be inherited from the another object than you can use this keyword .__proto__
let object1 = {
    name_obj : 'Karim',
}
let object2 = {
    age : 14 ,
    __proto__ : object1,
}

let object3 = {
    cgpa : 3.89,

}

// we can also do the same thing by using the function setPrototypeof() in which parameter will be the object in which you have to inherit the property and ythe second parameter will be the object from which you have to inherit the property 
Object.setPrototypeOf(object3 , object2);
object3['name_obj'] = 'Hilal'
console.log(object3.name_obj);

object2['name_obj'] = 'Abdul Karim';
console.log(object2.name_obj);