// first of all make the promise and resolve the promises the by returning an object , this object will be returned to then 
let promise1 = new Promise((resolve , reject) =>{
    resolve({user:"Karim" , age : 20});
    
});
// since we know chaining is also allowed then we return the value of that object which will further passed to the another then 
promise1.then((user_detail)=> {
    return user_detail.user;
})
.then(user_name => console.log(user_name));

console.log(promise1);