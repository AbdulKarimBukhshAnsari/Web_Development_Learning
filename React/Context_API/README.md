# Step by Step method to Consume and create the Context 


## 1. **Creating the Context**
We start by creating the context. This is essentially creating a "store" where we can share data across components.

### Code:
```jsx
import React, { createContext } from "react";

// Create a Context
export const UserContext = createContext(null); // The default value is `null`
```

### Explanation:
- `createContext()` creates a Context object called `UserContext`.
- This object will hold the shared data (`user` and `setUser`).
- Initially, the value of this context is `null`.

---

## 2. **Making the Context Provider**
Next, we create a **provider component**. This provider will "provide" the `user` state to all components wrapped by it.

### Code:
```jsx
import React, { useState } from "react";
import { UserContext } from "./UserContext"; // Import the context we just created

const UserContextProvider = ({ children }) => {
  // Step 1: Create the `user` state
  const [user, setUser] = useState(null);

  // Step 2: Return the Provider
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} {/* Any components wrapped inside this provider */}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

### Explanation:
1. **State Management**:
   - The `useState` hook is used to manage the `user` state.
   - Initially, `user` is `null`. Later, we can update it with `setUser`.

2. **Providing Data**:
   - The `UserContext.Provider` component wraps the `children` (the components inside it).
   - It provides the value of `{ user, setUser }` to any component that consumes this context.

3. **Wrapping Components**:
   - When we use `<UserContextProvider>` in the app, it will allow child components to access `user` and `setUser`.

---

## 3. **Consuming the Context**
Finally, we **consume** the context in child components. This allows us to use the `user` and `setUser` values wherever needed.

### Code:
```jsx
import React, { useContext } from "react";
import { UserContext } from "./UserContext"; // Import the context

const Profile = () => {
  // Step 1: Consume the Context
  const { user, setUser } = useContext(UserContext);

  // Step 2: Use the `user` and `setUser` values
  return (
    <div>
      <h1>Welcome, {user || "Guest"}!</h1>
      <button onClick={() => setUser("John Doe")}>Set User</button>
    </div>
  );
};

export default Profile;
```

### Explanation:
1. **Accessing the Context**:
   - The `useContext(UserContext)` hook is used to access the context value (`{ user, setUser }`).
   - Now, `user` and `setUser` are available for use in this component.

2. **Using the Data**:
   - If `user` is `null`, it displays "Guest".
   - Clicking the button updates the `user` to "John Doe" using `setUser`.

---

## Bringing It All Together
Now we wrap the entire app with the `UserContextProvider` to share the context globally.

### Code:
```jsx
import React from "react";
import ReactDOM from "react-dom";
import UserContextProvider from "./UserContextProvider";
import Profile from "./Profile";

const App = () => {
  return (
    <UserContextProvider>
      <Profile /> {/* This component now has access to the UserContext */}
    </UserContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

---

### Complete Flow:
1. **Creating the Context**:
   - `UserContext` is created using `createContext`.
   - This is the "store" that will hold the shared data.

2. **Making the Provider**:
   - `UserContextProvider` manages the `user` state with `useState`.
   - It wraps child components and shares `{ user, setUser }` using `UserContext.Provider`.

3. **Consuming the Context**:
   - The `useContext` hook allows components like `Profile` to access `user` and `setUser`.

---

### Dry Run:
Imagine you open your app, and here’s what happens step by step:

1. **App Starts**:
   - `<UserContextProvider>` initializes with `user = null`.
   - All child components (like `<Profile>`) are now wrapped and have access to the context.

2. **Profile Component**:
   - Initially, `user` is `null`, so "Guest" is displayed.
   - You click the "Set User" button.

3. **State Update**:
   - The `setUser` function updates `user` to "John Doe".
   - The component re-renders, and now "Welcome, John Doe!" is displayed.

---

Let me know if you need further clarification or examples! 😊