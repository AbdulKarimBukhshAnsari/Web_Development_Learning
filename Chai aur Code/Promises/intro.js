
// This is the way of creation of Promise , it will handle the asynchronus function effectively 
let promise = new Promise((resolve , reject) =>{
    setTimeout(function(){
        console.log("Hello World!");
        resolve("agaya data");
    }, 5000);
} )
// the then will handle when we use resolve 
promise.then((data)=> console.log(data));

let promise1 = new Promise((resolve, reject)=>{
    let error = true;
    if(error){
        reject("Hurrah Error");
    }
    else{
        resolve("No error umm");
    }
    
});
// we ca handle both the resolve and the reject by using the then keyword  , the first argument will be for the success and the second argument will be for reject 
// promise1.then(data=> console.log(data), error => console.log(error)) // we can handle both in then 
// we can handle the reject by using the catch 
promise1.catch(data=>console.log(data));  // we can handle by this way too 