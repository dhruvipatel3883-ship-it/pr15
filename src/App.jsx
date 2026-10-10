import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setSubmittedData({ username, password });
  }

  return (
    <div className="container">
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          ref={usernameRef}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          ref={passwordRef}
          required
        />

        <button type="submit">Login</button>
      </form>

      {submittedData && (
        <div className="result">
          <h2>Submitted Information</h2>
          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;