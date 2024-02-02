import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
// import './components/login/login.css';

const LoginPage = () => {
  return (

    

    <div>
      <Header />
      <a href="signup">
        <button>Sign Up</button>
      </a>
      <h1>Log In Page</h1>
      <form action="/auth/login" method="POST" className="login-form">
        <label htmlFor="login-email" className="login-label">Email:</label>
        <input type="email" id="login-email" name="email" required className="login-input" />

        <label htmlFor="login-password" className="login-label">Password:</label>
        <input type="password" id="login-password" name="password" required className="login-input" />

        <button type="submit" className="login-button">Log In</button>
      </form>

     
      <Footer />
    </div>
  );
};

export default LoginPage;