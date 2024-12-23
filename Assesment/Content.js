import React, { useContext, useState } from "react";
import { AppContext } from "./Themecontex"; // Import the context


function Content() {
  const { theme } = useContext(AppContext); // Access the current theme
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      alert("Login Successful");
    } else {
      setError("Both fields are required.");
    }
  };

  return (
    <div className={`login-container ${theme}`}>
      <h2>{theme === "light" ? "Login (Light Theme)" : "Login (Dark Theme)"}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="form-input"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Content;
