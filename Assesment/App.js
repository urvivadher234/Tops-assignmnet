import React, { useState } from "react";
import { AppContext } from "./assesment/Themecontex"; // Import the context
import ToggleThemeButton from "./assesment/ToggleThemeButton"; // A component to toggle theme
import Content from "./assesment/Content"; // Some content that will change based on theme
import './App.css'
function App() {
  // Declare the theme state: light or dark
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Provide the theme context to the entire app
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <ToggleThemeButton />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;

