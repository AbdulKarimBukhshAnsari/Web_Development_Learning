In JavaScript, we can make one object **inherit properties or methods** from another object. This allows us to reuse properties and methods without duplicating code. There are two main ways to set up inheritance:

1. Using the **`__proto__`** property.
2. Using the **`Object.setPrototypeOf()`** function.

---

### How Inheritance Works with `__proto__`:
The **`__proto__`** property connects an object to another object, making it its **prototype**. If an object doesn’t have a property, it looks for that property in its prototype.

---

#### Example 1: Using `__proto__`
```javascript
let object1 = {
    name_obj: 'Karim',
};

let object2 = {
    age: 14,
    __proto__: object1, // Inherit properties from object1
};

// Access inherited properties
console.log(object2.name_obj); // Output: Karim

// Update the inherited property in object2
object2.name_obj = 'Abdul Karim';
console.log(object2.name_obj); // Output: Abdul Karim
```

- `object2` inherits the `name_obj` property from `object1`.
- When `object2.name_obj` is updated, it only changes in `object2`, not in `object1`.

---

### Using `Object.setPrototypeOf()`:
The **`Object.setPrototypeOf(childObject, parentObject)`** method does the same thing as `__proto__`, but it’s the modern, recommended way.

---

#### Example 2: Using `Object.setPrototypeOf()`
```javascript
let object1 = {
    name_obj: 'Karim',
};

let object2 = {
    age: 14,
};

let object3 = {
    cgpa: 3.89,
};

// Set prototype of object2 to object1
Object.setPrototypeOf(object2, object1);

// Set prototype of object3 to object2
Object.setPrototypeOf(object3, object2);

// Access inherited properties
console.log(object3.name_obj); // Output: Karim

// Update the inherited property in object3
object3.name_obj = 'Hilal';
console.log(object3.name_obj); // Output: Hilal

// Access the updated property in object2 (it remains unchanged)
console.log(object2.name_obj); // Output: Karim
```

---

### What’s Happening Here:
1. **First Connection**:
   - `object2` inherits properties from `object1` because we set:
     ```javascript
     Object.setPrototypeOf(object2, object1);
     ```
   - Now `object2` can access `name_obj` from `object1`.

2. **Second Connection**:
   - `object3` inherits properties from `object2` because we set:
     ```javascript
     Object.setPrototypeOf(object3, object2);
     ```
   - `object3` can now access both `age` (from `object2`) and `name_obj` (from `object1`).

3. **Updating Inherited Properties**:
   - When `object3.name_obj = 'Hilal'` is set, it **overrides** the `name_obj` property for `object3` only.
   - The `name_obj` in `object1` and `object2` remains unchanged.

---

### Key Points:
1. **`__proto__`**:
   - Connects objects for inheritance directly.
   - Example: `object2.__proto__ = object1;`

2. **`Object.setPrototypeOf()`**:
   - A modern, explicit way to set prototypes.
   - Example: `Object.setPrototypeOf(object2, object1);`

3. **Prototype Chain**:
   - When you access a property, JavaScript checks the current object first.
   - If the property isn’t found, it looks in the prototype object, and so on, up the chain.

4. **Overriding Properties**:
   - If you set a property in the inheriting object, it doesn’t change the property in the prototype—it just adds or updates it for that object.

---

### Practical Analogy:
Think of `object1` as a **parent**, `object2` as a **child**, and `object3` as a **grandchild**:
- The grandchild (object3) can access properties from the child (object2) and the parent (object1).
- If the grandchild sets or updates a property, it’s only for itself—it doesn’t affect the parent or child.