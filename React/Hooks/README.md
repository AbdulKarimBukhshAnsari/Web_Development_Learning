## **React Hooks: A Complete Guide**

### **What Are Hooks?**
Hooks are special functions provided by the React library that let you use React's features (like state and lifecycle) in **functional components**. Before hooks, these features were only available in **class components**.

---

### **Why Use Hooks?**
1. **Simplify Code**: Use state and lifecycle methods without writing class components.
2. **Functional Components**: Hooks enable functional components to be as powerful as class components.
3. **Reusable Logic**: You can create custom hooks to reuse stateful logic across components.
4. **Cleaner Syntax**: No need for constructors, `this`, or binding functions.

---

### **Rules for Using Hooks**
1. **Only Call Hooks at the Top Level**:
   - Do not call Hooks inside loops, conditions, or nested functions.
   - Always call Hooks at the top level of your component.

   **Example**:
   ```jsx
   const [count, setCount] = useState(0); // Correct
   ```

2. **Only Call Hooks in React Functions**:
   - Use Hooks only in functional components or custom hooks.

   **Example**:
   ```jsx
   function MyComponent() {
     const [name, setName] = useState("React");
   }
   ```

3. **Use the Dependency Array Correctly**:
   - When using hooks like `useEffect`, always specify dependencies to avoid unnecessary re-renders or missing updates.

   **Example**:
   ```jsx
   useEffect(() => {
     console.log("Count updated:", count);
   }, [count]); // Re-run when count changes
   ```

---

### **Common Built-in Hooks**

#### 1. **`useState`**
   - **Purpose**: Manages state in a functional component.
   - **Syntax**: 
     ```jsx
     const [state, setState] = useState(initialValue);
     ```
   - **Example**:
     ```jsx
     const [count, setCount] = useState(0);
     return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
     ```

#### 2. **`useEffect`**
   - **Purpose**: Handles side effects like fetching data, subscriptions, or manually changing the DOM.
   - **Syntax**:
     ```jsx
     useEffect(() => {
       // Side effect logic
     }, [dependencies]); // Empty array runs the effect only once
     ```
   - **Example**:
     ```jsx
     useEffect(() => {
       console.log("Component mounted");
     }, []);
     ```

#### 3. **`useContext`**
   - **Purpose**: Access data from a React context without manually passing props.
   - **Syntax**:
     ```jsx
     const value = useContext(Context);
     ```
   - **Example**:
     ```jsx
     const theme = useContext(ThemeContext);
     return <div style={{ background: theme }}>Hello!</div>;
     ```

#### 4. **`useReducer`**
   - **Purpose**: Manages complex state logic, similar to `useState` but with reducers.
   - **Syntax**:
     ```jsx
     const [state, dispatch] = useReducer(reducer, initialState);
     ```
   - **Example**:
     ```jsx
     const reducer = (state, action) => {
       switch (action.type) {
         case "increment":
           return { count: state.count + 1 };
         default:
           return state;
       }
     };
     const [state, dispatch] = useReducer(reducer, { count: 0 });
     ```

#### 5. **`useRef`**
   - **Purpose**: Access or modify a DOM element directly or store a mutable value without triggering a re-render.
   - **Syntax**:
     ```jsx
     const ref = useRef(initialValue);
     ```
   - **Example**:
     ```jsx
     const inputRef = useRef();
     const focusInput = () => inputRef.current.focus();
     ```

#### 6. **`useMemo`**
   - **Purpose**: Optimize performance by memoizing expensive calculations.
   - **Syntax**:
     ```jsx
     const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
     ```

#### 7. **`useCallback`**
   - **Purpose**: Memoize a function to avoid re-creating it on every render.
   - **Syntax**:
     ```jsx
     const memoizedCallback = useCallback(() => {
       doSomething(a, b);
     }, [a, b]);
     ```

#### 8. **`useImperativeHandle`**
   - **Purpose**: Customize the ref exposed by a component.
   - **Syntax**:
     ```jsx
     useImperativeHandle(ref, () => ({
       customMethod() {
         // Logic
       }
     }));
     ```

#### 9. **`useLayoutEffect`**
   - **Purpose**: Similar to `useEffect`, but fires synchronously after all DOM mutations.
   - **Use Case**: When you need to measure the DOM layout immediately.

---

### **Custom Hooks**
- You can create your own hooks to encapsulate and reuse logic.
- **Syntax**:
  ```jsx
  function useCustomHook() {
    const [state, setState] = useState();
    // Logic
    return [state, setState];
  }
  ```

---

### **Advantages of Hooks**
1. **Simpler Code**: Functional components with hooks are easier to read and write.
2. **Reusable Logic**: Custom hooks let you share logic without duplicating code.
3. **Improved Performance**: Optimized with hooks like `useMemo` and `useCallback`.
4. **No More Classes**: Avoid complexities like `this` or binding methods.

---

### **Conclusion**
Hooks make React development more modern, clean, and efficient. They simplify the codebase while giving functional components all the power that class components had. By following the rules and understanding the common hooks, you can build advanced and scalable React applications.