# memo , useMemo and useCalbck 

### **Notes on `React.memo`**

#### **What is `React.memo`?**
- `React.memo` is a **higher-order component (HOC)** used to optimize functional components by memoizing their rendered output.
- It prevents unnecessary re-renders by re-rendering the component **only if its props change**.

---

#### **How does it work?**
- `React.memo` performs a **shallow comparison** of the component's **props**.
  - If the props are the same, React skips re-rendering the component.
  - If the props have changed, the component re-renders.

---

#### **When to use `React.memo`?**
1. **For functional components** that:
   - Render the same output for the same props.
   - Are part of a component tree where frequent parent re-renders occur.
   
2. **Avoid using if:**
   - The component is simple and already fast.
   - Props always change or new references are created (e.g., new object or function passed on every render).

---

#### **Syntax**
```jsx
const MemoizedComponent = React.memo(Component);
```

#### Example:
```jsx
const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <p>{value}</p>;
});

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Child value={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- **Output:** 
  - The `Child` component only re-renders if `value` changes.
  - If `App` re-renders due to other state changes, `Child` does not re-render.

---

#### **Shallow Comparison**
- `React.memo` uses **shallow comparison** to compare props:
  - **Primitive values** (e.g., `number`, `string`, `boolean`) are compared by value.
  - **Objects, arrays, or functions** are compared by reference.
  
  **Example:**
  ```jsx
  const data = { name: "John" }; // New reference every render
  <Child data={data} />;
  ```
  - This will cause `Child` to re-render on every parent render unless `data` is memoized with `useMemo`.

---

#### **Optimizing with `React.memo`**
- Use with **pure functional components** to prevent re-renders.
- For complex props (objects, arrays, or functions), use:
  - `useMemo` to memoize values.
  - `useCallback` to memoize functions.

**Example with `useCallback`:**
```jsx
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

#### **Pros**
- Reduces unnecessary re-renders.
- Improves performance for components with expensive rendering logic.

#### **Cons**
- Adds complexity if misused.
- Not effective if:
  - Props are always changing.
  - Parent re-renders are cheap.

---

#### **Conclusion**
- Use `React.memo` wisely, focusing on components where rendering is expensive or frequent.
- Pair it with `useCallback` and `useMemo` for optimal performance when passing objects or functions as props.


### **useCallback Hook: Notes**

#### **What is `useCallback`?**
`useCallback` is a hook in React that returns a **memoized version** of the callback function that only changes if one of the dependencies has changed. It is primarily used to **optimize performance** by preventing unnecessary function re-creations on each re-render, especially in situations where the function is passed as a prop to child components.

#### **Syntax:**
```javascript
const memoizedFunction = useCallback(() => {
  // Function logic
}, [dependencies]);
```

- `memoizedFunction`: The memoized function returned by `useCallback`.
- `dependencies`: The list of dependencies that determine when the function should be recreated. If the dependencies don't change, the memoized function remains the same across re-renders.

#### **When to Use `useCallback`?**
- **Performance Optimization**: Use `useCallback` when you want to prevent the creation of a new function instance on every render, especially if:
  - The function is passed down to **child components** that are wrapped with `React.memo` (to prevent unnecessary re-renders of the child component).
  - The function is passed to a **dependency array** of another `useEffect`, `useMemo`, or `useCallback` hook, where the function reference must remain stable to avoid triggering unwanted updates.

- **Avoid Unnecessary Re-renders**: If a function is passed down as a prop to child components, every time the parent re-renders, the function reference would change. By using `useCallback`, the function reference remains **the same** unless the specified dependencies change.

#### **Key Concepts:**
1. **Memoization**: 
   - `useCallback` memoizes the function so that the function reference doesn't change between renders unless its dependencies change.
   - **It prevents function re-creation on each render** and ensures the same function instance is used.

2. **Dependencies**: 
   - You can specify dependencies as the second argument to `useCallback`. The function will only be re-created if any of the dependencies change.
   - If you pass an empty array (`[]`), the function is created once on the initial render and will not change again unless the component is re-mounted (e.g., page reload).

#### **Example Usage:**
```javascript
import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoize the function to prevent unnecessary re-renders of the child
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty array means the function is created only once

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
};
```

- **Explanation**: In this example, the `handleClick` function is memoized using `useCallback` with an empty dependency array `[]`. This ensures that the function remains **stable** across renders, and the `ChildComponent` will not re-render unless the parent’s state (`count`) changes.

#### **How `useCallback` Differs from `React.memo`:**
- **`useCallback`**: It memoizes **functions** so that the reference to the function remains the same across re-renders (unless its dependencies change).
- **`React.memo`**: It memoizes **entire components** to prevent unnecessary re-renders if the props haven’t changed.

In short:
- `useCallback` helps in **memoizing functions** to avoid passing new function references on each render.
- `React.memo` helps in **memoizing components** to avoid re-renders unless the props have changed.

#### **Empty Dependency Array (`[]`) in `useCallback`:**
- If you pass an **empty array** as the dependency array to `useCallback`, the function will be **created only once** after the initial render and **won’t change** on subsequent renders.
- This is useful when you need a **stable function reference** that doesn’t change over time.

#### **Performance Consideration**:
- While `useCallback` can prevent unnecessary re-renders, overusing it might have a negative impact on performance. In many cases, React’s built-in optimization techniques are sufficient without explicitly using `useCallback`. Only use `useCallback` when you observe performance issues.

#### **Summary:**
- **Purpose**: Memoizes a function to prevent unnecessary re-creation on each render.
- **Usage**: `useCallback(fn, deps)`
- **When to Use**: To optimize performance, especially when passing functions as props to `React.memo` components or as dependencies for other hooks.
- **Dependency Array**:
  - `[]`: Memoized function is created only once after the initial render.
  - `[dependencies]`: Function is memoized and re-created only when one of the dependencies changes.

By using `useCallback`, you can optimize the performance of your React applications by preventing unnecessary re-creations of functions that are passed as props or used in other hooks.

### **useMemo Hook: Notes**

#### **What is `useMemo`?**
`useMemo` is a hook in React that **memoizes** the result of a function (the return value of an expression) and only re-calculates the value when one of its dependencies has changed. It is used for **performance optimization** when expensive calculations or computations are involved, and you want to avoid recalculating them on every render.

#### **Syntax:**
```javascript
const memoizedValue = useMemo(() => {
  // Expensive calculation or computation
  return someValue;
}, [dependencies]);
```

- `memoizedValue`: The memoized result of the calculation.
- `dependencies`: The list of dependencies that determine when the memoized value should be recomputed. If none of the dependencies have changed, the previously computed value is returned.

#### **When to Use `useMemo`?**
- **Expensive Calculations**: Use `useMemo` when you have a computationally expensive operation, like a complex calculation or filtering large lists, and you want to avoid recalculating it on every render unless necessary.
- **Prevent Unnecessary Recomputations**: When a calculation or transformation depends on specific values and you only want to recompute it when those values change, not on every render.

#### **Key Concepts:**
1. **Memoization**:
   - `useMemo` caches the **return value** of a function and **only recalculates** when one of the dependencies changes.
   - This prevents unnecessary **recalculations** and **improves performance** by not running expensive operations unless needed.

2. **Dependencies**:
   - You provide a **dependency array** to `useMemo` to control when the cached result should be recomputed. The result is recalculated only if one of the dependencies changes.
   - If you pass an empty array (`[]`), the value is calculated once on the initial render and never recalculated unless the component is re-mounted (e.g., page reload).

#### **Example Usage:**
```javascript
import React, { useState, useMemo } from 'react';

const ExpensiveComputation = ({ number }) => {
  // Memoize the expensive calculation result
  const computedValue = useMemo(() => {
    console.log("Expensive computation running...");
    return number * 1000; // Example of expensive computation
  }, [number]); // Only recompute when "number" changes

  return <p>Computed value: {computedValue}</p>;
};

const App = () => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <button onClick={() => setNumber(prev => prev + 1)}>Increment</button>
      <ExpensiveComputation number={number} />
    </div>
  );
};
```

- **Explanation**: In this example, the expensive computation (`number * 1000`) is memoized using `useMemo`. The calculation will only be re-run when the `number` prop changes, preventing unnecessary re-calculations on every render.

#### **Difference Between `useMemo` and `useCallback`**:

- **`useMemo`** is used to **memoize a value** (the result of an expensive computation).
- **`useCallback`** is used to **memoize a function** (to avoid recreating the function on every render).

  | Hook              | Purpose                                      | Example                                          |
  |-------------------|----------------------------------------------|--------------------------------------------------|
  | `useMemo`         | Memoizes the result of a **calculation**      | `const value = useMemo(() => expensiveCalculation(), [deps]);` |
  | `useCallback`     | Memoizes a **function** reference             | `const memoizedFunction = useCallback(() => { /* do something */ }, [deps]);` |

#### **When to Use `useMemo`?**
- **Avoid Expensive Recalculations**: When you have a computationally expensive operation, such as sorting a large list or performing complex calculations, use `useMemo` to cache the result and avoid recalculating it on every render.
- **Prevent Re-rendering Child Components**: `useMemo` can be useful when passing large objects or arrays as props to child components. React compares the current and previous values of these props to decide whether to re-render the child. If you use `useMemo`, the value of the prop is stable and won't change unless the dependencies change.

#### **Empty Dependency Array (`[]`) in `useMemo`:**
- If you pass an empty array (`[]`) to `useMemo`, the value is computed only once during the **initial render** and **never recomputed** again unless the component is re-mounted.

#### **Performance Consideration**:
- **Overuse of `useMemo`** can be counterproductive: Memoization itself has a performance cost. It is only beneficial when the computation is truly expensive, or if you’re passing objects or arrays as props to child components that might trigger unnecessary renders.

#### **Summary:**
- **Purpose**: Memoizes the result of an expensive calculation or function, preventing it from being recalculated on every render.
- **Usage**: `useMemo(fn, deps)`
- **When to Use**: To optimize performance by caching the result of computations, preventing unnecessary recalculations unless specific dependencies change.
- **Dependency Array**:
  - `[]`: Memoized value is calculated only once after the initial render.
  - `[dependencies]`: The result is recalculated only when one of the dependencies changes.

By using `useMemo`, you can enhance the performance of your React applications, especially in cases where expensive computations are involved and you want to avoid running them unnecessarily on each render.