import React from "react";
import UserContextProvider from "./context/userContextProvider"; // Corrected name
import Login from "./components/login"; // Corrected name to match the component
import Profile from "./components/profile"; // Corrected name to match the component

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
