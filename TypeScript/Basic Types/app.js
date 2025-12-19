// TS stricly tell you the follow the specific type
var arr = [1, 2, 3, 4];
// the difference between any and unknown
// any removes the benefit of using TS 
var number;
number = 1;
number = "string"; // will not catch any error in TS 
var check; // it works similar to any but you must have to check the type before applying any function 
check = "Hello World";
if (typeof (check) === "string") {
    var modified = check.toLowerCase();
    console.log(modified);
}
// tuple helps you to make the array of fixed size and type 
var tuple = ["karim", "maqsood", 21];
// Enum are the set of Fixed values which increases the readability of code easily , It is Read Only  
var statusCode;
(function (statusCode) {
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["unauthorize"] = 500] = "unauthorize";
    statusCode[statusCode["badRequest"] = 400] = "badRequest";
})(statusCode || (statusCode = {}));
var state = statusCode.Success;
console.log(state);
