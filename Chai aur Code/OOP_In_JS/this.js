// use of this in diff context 
// in the context of the current object method 
let obj = {
    name : 'Karim ',
    about : function(){
        return this;
    }
}

console.log(obj.about());
