# Basic Types in TypeScript

TypeScript adds **static typing** to JavaScript.

This means you can define **what kind of data** a variable can hold, which helps catch errors early and makes code easier to understand and maintain.

## 1. `string`

Used to represent **textual data**.

```tsx
let name: string = "Karim";
let greeting: string = `Hello, ${name}`;

```

- Can contain letters, numbers, and symbols
- Must be written inside quotes
- Prevents assigning non-text values accidentally

## 2. `number`

Used for **all numeric values**, including integers and decimals.

```tsx
let age: number = 22;
let price: number = 99.99;

```

- JavaScript does not distinguish between `int` and `float`
- TypeScript follows the same rule

## 3. `boolean`

Used for **true or false** values.

```tsx
let isLoggedIn: boolean = true;

```

- Commonly used in conditions and flags
- Helps ensure logic remains correct

## 4. `any`

Allows a variable to hold **any type of value**.

```tsx
let value: any = 10;
value = "Hello";
value = true;

```

⚠ **Important**

- Disables type checking
- Removes all TypeScript benefits
- Should be avoided unless absolutely necessary

## 5. `unknown`

A safer alternative to `any`.

```tsx
let data: unknown;
data = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

```

- You must **check the type** before using it
- Prevents runtime errors
- Preferred over `any`

## 6. `null` and `undefined`

Used when a value is **missing or not yet assigned**.

```tsx
let result: null = null;
let value: undefined = undefined;

```

Common real-world usage:

```tsx
let userName: string | null = null;

```

- Often combined with union types
- Very common in API responses

## 7. `void`

Used when a function **does not return any value**.

```tsx
function logMessage(): void {
  console.log("Hello");
}

```

- Mostly used for function return types
- Indicates the function only performs an action

## 8. `never`

Represents a value that **never occurs**.

```tsx
function throwError(message: string): never {
  throw new Error(message);
}

```

Used when:

- A function always throws an error
- A function runs forever (infinite loop)

## 9. `array`

Used to store **multiple values of the same type**.

```tsx
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Ali", "Ahmed"];

```

- Ensures all elements follow the same type
- Prevents accidental wrong data insertion

---

## 10. `tuple`

An array with a **fixed length and fixed types**.

```tsx
let user: [number, string] = [1, "Karim"];

```

- Order matters
- Each position has a specific type
- Useful for structured pairs or fixed data

## 11. `object`

Used for **structured key-value data**.

```tsx
let user: {
  name: string;
  age: number;
} = {
  name: "Karim",
  age: 22,
};

```

- Defines the exact shape of an object
- Prevents missing or extra properties

## 12. `union types ( | )`

Allows a variable to hold **more than one type**.

```tsx
let id: number | string;
id = 1;
id = "A12";

```

- Very common in real projects
- Maintains flexibility while staying safe

## 13. `type` and `interface`

Used to define **custom data structures**.

### Using `type`

```tsx
type User = {
  name: string;
  age: number;
};

```

### Using `interface`

```tsx
interface Admin {
  role: string;
}

```

- Makes code reusable and readable
- Widely used in React, Next.js, and Express

## 14. `enum`

Used to define a set of **named constant values**.

```tsx
enum Status {
  Pending,
  Success,
  Failed,
}

```

- Improves readability
- Prevents magic strings and numbers

## Why TypeScript Types Matter

- Catch errors at compile time
- Improve code readability
- Better IDE support (auto-complete, refactoring)
- Easier teamwork and maintenance