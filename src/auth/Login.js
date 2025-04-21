import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Added for navigation

const LoginPage = () => {
  const [userType, setUserType] = useState("employee"); // default to employee
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // <-- Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (userType === "corporate") {
      navigate("/corporate-entry"); // <-- Redirect to corporate entry page
    } else {
      alert(`${userType.toUpperCase()} Logged in with email: ${email}`);
      // You can later add employee-specific navigation here
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login Page</h2>

      <div style={styles.toggle}>
        <button
          onClick={() => setUserType("employee")}
          style={userType === "employee" ? styles.activeTab : styles.tab}
        >
          Employee
        </button>
        <button
          onClick={() => setUserType("corporate")}
          style={userType === "corporate" ? styles.activeTab : styles.tab}
        >
          Corporate
        </button>
      </div>

      <form onSubmit={handleLogin} style={styles.form}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" style={styles.loginButton}>
          Login as {userType}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 400,
    margin: "60px auto",
    padding: 30,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  toggle: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
  tab: {
    padding: "10px 20px",
    border: "1px solid #ccc",
    backgroundColor: "#e0e0e0",
    cursor: "pointer",
    borderRadius: "5px 5px 0 0",
    marginRight: 5,
  },
  activeTab: {
    padding: "10px 20px",
    border: "1px solid #333",
    backgroundColor: "#fff",
    cursor: "pointer",
    borderRadius: "5px 5px 0 0",
    fontWeight: "bold",
    marginRight: 5,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    border: "1px solid #ccc",
  },
  loginButton: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default LoginPage;
