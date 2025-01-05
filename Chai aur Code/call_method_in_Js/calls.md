# JavaScript `call()` Method

## Definition:
- The `call()` method allows you to invoke a function with a specified `this` value and pass arguments individually.
- It changes the context (`this`) of the function when it is called.

---

## Syntax:
```javascript
function.call(thisArg, arg1, arg2, ...);
```

**Parameters**:
1. `thisArg` – The object to be used as `this` inside the function.
2. `arg1, arg2, ...` – Arguments to pass to the function.

---

## Purpose:
1. **Set the `this` value** explicitly for a function.
2. **Borrow methods** from one object and use them on another.

---

### Examples:

1. **Changing `this` Context**:
   ```javascript
   function greet(greeting) {
       console.log(`${greeting}, I am ${this.name}`);
   }

   const person = { name: "Alice" };
   greet.call(person, "Hello"); // Output: Hello, I am Alice
   ```

   - The `this` inside `greet` refers to `person` because of `call()`.

2. **Method Borrowing**:
   ```javascript
   const person1 = {
       name: "John",
       sayName: function() {
           console.log(`Hi, I am ${this.name}`);
       },
   };

   const person2 = { name: "Jane" };

   person1.sayName.call(person2); // Output: Hi, I am Jane
   ```

   - `sayName` from `person1` is borrowed by `person2` using `call()`.

---

## Key Points:
- **Immediate Execution**: `call()` runs the function immediately.
- **Default `this`:**
  - If no `thisArg` is provided:
    - `undefined` in strict mode.
    - Global object (`window` in browsers) in non-strict mode.
- **Difference with `apply()`**:
  - `call()` takes arguments individually.
  - `apply()` takes arguments as an array.
  ```javascript
  greet.call(person, "Hello");      // Using call
  greet.apply(person, ["Hello"]);  // Using apply
  ```

---

### Analogy:
- Using `call()` is like saying to a function: "Pretend you're working in this object's context."

---

