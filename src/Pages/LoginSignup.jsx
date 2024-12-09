import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../authContext"; // Import the useAuth hook
import "./LoginPage.css";

function LoginPage() {
  const { login } = useAuth(); // Use the login function from the context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login({ username });
      // Redirect to the "Write Story" page after login
      window.location.href = "/write-story";
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="outer-card">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inner-card"
      >
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="login-title"
        >
          Login
        </motion.h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <motion.div
            initial={{ borderColor: "#fff" }}
            animate={{ borderColor: ["#ff9800", "#4caf50", "#ff9800"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="input-wrapper"
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            initial={{ borderColor: "#fff" }}
            animate={{ borderColor: ["#2196f3", "#e91e63", "#2196f3"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="input-wrapper"
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          <div className="extra-options">
            <a href="#forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="signin-button"
            type="submit"
          >
            Sign In
          </motion.button>

          <div className="social-login">
            <p>Login with social accounts</p>
            <div className="social-icons">
              <a href="#google" className="icon">G</a>
              <a href="#twitter" className="icon">T</a>
              <a href="#github" className="icon">G</a>
            </div>
          </div>

          <p className="signup-option">
            Don’t have an account? <a href="#signup">Sign up</a>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default LoginPage;
