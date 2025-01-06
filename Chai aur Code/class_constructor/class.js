// class is just a syntactic sugar is JS , otherwise it will follow just proto typal inheritance

// This is the syntax of the class 
class Student{
    constructor(username , class_name , grade ){    // to initialize the new instance
        this.username = username;
        this.class_name = class_name;
        this.grade = grade;
    }

    get_name(){
        return this.username;
    }
};

let student_1 = new Student('Karim', 11 , 'a');

console.log(student_1.get_name());