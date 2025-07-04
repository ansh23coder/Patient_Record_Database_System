import React, { useState } from "react";

const LOGIN_CREDENTIALS = {
  username: "admin",
  password: "abcd@23"
};

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.username === LOGIN_CREDENTIALS.username &&
      form.password === LOGIN_CREDENTIALS.password
    ) {
      setError("");
      onLogin();
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 350,
        margin: "7rem auto",
        background: "#f5f5f5",
        borderRadius: 8,
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
        padding: 32,
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username<br/>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 12 }}
          />
        </label>
        <label>
          Password<br/>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 16 }}
          />
        </label>
        {error && (
          <div style={{ color: "red", marginBottom: 8 }}>{error}</div>
        )}
        <button
          type="submit"
          style={{
            padding: "8px 24px",
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            fontWeight: "bold",
            cursor: "pointer",
            width: "100%",
            marginTop: 8,
          }}
        >
          Log In
        </button>
      </form>
      <div style={{ fontSize: "12px", color: "#555", marginTop: 12 }}>
        <b>Demo credentials:</b><br />
        Username: <code>admin</code><br />
        Password: <code>abcd@23</code>
      </div>
    </div>
  );
}

export default Login;