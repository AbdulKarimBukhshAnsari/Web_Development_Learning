

In JavaScript, almost everything (like strings, arrays, objects, etc.) is treated as an **object**. This means you can add custom functions (called methods) to these objects using their **prototype**.

Here’s what your example does:

### Adding a Custom Method to All Objects:
You added a function called `greet` to the `Object` prototype like this:

```javascript
Object.prototype.greet = function() {
    console.log(`Hello ${this}`);
};
```

This makes the `greet` method available to **all objects in JavaScript**, including strings, arrays, or even regular objects.

---

### Using `greet` on a String:
You created a string:

```javascript
let str = 'Karim';
```

Since strings are treated as objects in JavaScript, they inherit from the `Object` prototype. So when you call:

```javascript
str.greet();
```

It works! The string `'Karim'` becomes `this` inside the `greet` method, and the output is:

```
Hello Karim
```

---

### Why This Works:
This works because **inheritance in JavaScript flows from the top (Object) to the bottom (specific types like Array, String, etc.)**. When you add a method to the `Object` prototype, it’s available to all objects.

---

### Important Note:
If you add a method to a specific type, like an array, it **won’t work for other types**. For example, if you do this:

```javascript
Array.prototype.sayHi = function() {
    console.log("Hi from an array!");
};
```

You can call `sayHi` on arrays:

```javascript
let arr = [1, 2, 3];
arr.sayHi(); // Output: Hi from an array!
```

But you **cannot** use `sayHi` on strings or objects because inheritance doesn’t flow **upward** from a specific type (like Array) to a more general type (like Object).

---

### Summary:
1. **Top to bottom inheritance:** Adding methods to `Object.prototype` makes them available for all objects (like strings, arrays, etc.).
2. **Bottom to top doesn’t work:** Adding methods to specific types (like arrays) doesn’t make them available to general objects (like strings or plain objects).