const module = {
     x : 'hello',
     greet : function(){
        console.log(this.x);
     }
}


const module_2 = {
    x : 'hellllllllo',
}
let new_greet = module.greet;
new_greet.bind(module_2)();

