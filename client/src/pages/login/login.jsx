import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useUser } from "../../UserContext";
import './login.css';
// import './components/login/login.css';
const LoginPage = () => {
  const { user, setUser } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      })
        .then((response) => {
          console.log("response", response);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Login failed");
          }
        })
        .then((data) => {
          console.log("Will set user", data);
          const authenticatedUser = data.user;
          setUser(authenticatedUser);
          window.location.href = "http://localhost:5173/profile";
        })
        .catch((error) => {
          console.error("Error during login:", error);
        });
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="login-email" className="login-label">
          Email:
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="login-input"
        />
        <label htmlFor="login-password" className="login-label">
          Password:
        </label>
        <textarea
          id="login-password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <a href="signup">
        <button>Sign Up</button>
      </a>
      <Footer />
    </div>
  );
};
export default LoginPage;