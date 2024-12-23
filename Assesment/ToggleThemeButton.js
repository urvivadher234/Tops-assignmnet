import React, { useContext } from "react";
import { AppContext } from "./Themecontex"; // Import the context

function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(AppContext); // Access context

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

export default ToggleThemeButton;
