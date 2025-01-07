Here is the complete explanation with examples:

---

### **Key Differences Between `call()`, `apply()`, and `bind()`**

#### 1. **Purpose**:
- **`call()`**: Used to **immediately invoke** a function with a specific `this` value and arguments passed **individually**.
- **`apply()`**: Used to **immediately invoke** a function with a specific `this` value, but the arguments are passed as an **array** (or array-like object).
- **`bind()`**: Used to **create a new function** with a specific `this` value, but does **not invoke the function immediately**. It can be called later on.

#### 2. **Invocation**:
- **`call()`**: Invokes the function **immediately** with the specified `this` context and arguments.
- **`apply()`**: Invokes the function **immediately** with the specified `this` context, but the arguments are passed as an array.
- **`bind()`**: Does **not invoke** the function immediately. It **returns a new function** with the specified `this` context, which can be invoked later.

#### 3. **Arguments**:
- **`call()`**: Accepts **individual arguments** after the `this` context.
  ```javascript
  func.call(thisValue, arg1, arg2, ...);
  ```
- **`apply()`**: Accepts arguments as an **array** or **array-like object** after the `this` context.
  ```javascript
  func.apply(thisValue, [arg1, arg2, ...]);
  ```
- **`bind()`**: Accepts **individual arguments** after the `this` context, which are pre-set. These arguments will be passed when the new function is called later.
  ```javascript
  const boundFunc = func.bind(thisValue, arg1, arg2, ...);
  ```

#### 4. **Return Value**:
- **`call()`**: Returns the **result** of the function execution.
- **`apply()`**: Returns the **result** of the function execution.
- **`bind()`**: Returns a **new function** with the bound `this` and pre-set arguments, but does not invoke it immediately.

#### 5. **Use Case**:
- **`call()`**: When you want to invoke a function **immediately** with a specific `this` context and arguments passed individually.
  - Example:
    ```javascript
    function greet(name) {
      console.log(`Hello, ${name}!`);
    }
    greet.call(null, 'Alice'); // Output: Hello, Alice!
    ```
  
- **`apply()`**: When you want to invoke a function **immediately** with a specific `this` context and arguments passed as an array.
  - Example:
    ```javascript
    function greet(city, country) {
      console.log(`${this.name} lives in ${city}, ${country}`);
    }
    const person = { name: 'Alice' };
    greet.apply(person, ['Paris', 'France']); // Output: Alice lives in Paris, France
    ```

- **`bind()`**: When you want to create a new function that will be invoked later, with a specific `this` context and arguments pre-set.
  - Example:
    ```javascript
    function greet(city, country) {
      console.log(`${this.name} lives in ${city}, ${country}`);
    }
    const person = { name: 'Alice' };
    const greetAliceInParis = greet.bind(person, 'Paris');
    greetAliceInParis('France'); // Output: Alice lives in Paris, France
    ```

---

### **Summary Table**

| Feature             | `call()`                                 | `apply()`                                 | `bind()`                                 |
|---------------------|------------------------------------------|-------------------------------------------|------------------------------------------|
| **Invocation**       | Immediately invokes the function         | Immediately invokes the function          | Returns a new function, does not invoke immediately |
| **Arguments Format** | Individual arguments                     | Arguments as an array                     | Individual arguments pre-set              |
| **Return Value**     | Returns the result of the function       | Returns the result of the function        | Returns a new function                    |
| **When to Use**      | Immediate function invocation with individual arguments | Immediate function invocation with array of arguments | To create a new function that can be called later with pre-set `this` and arguments |

---

### **When to Use Which Method:**

- **Use `call()`** when you need to invoke a function immediately with a specified `this` value and individual arguments.
- **Use `apply()`** when you need to invoke a function immediately with a specified `this` value and arguments as an array (useful when you don’t know the number of arguments in advance).
- **Use `bind()`** when you want to create a function that is bound to a specific `this` value and arguments, but you want to invoke it later.

---

I hope this breakdown clears up the differences and uses of `call()`, `apply()`, and `bind()`. Let me know if you have any further questions!