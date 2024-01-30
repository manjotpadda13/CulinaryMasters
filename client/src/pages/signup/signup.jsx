// SignUpPage.jsx
import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
// import './components/signup/signup.css';

const SignUpPage = () => {
  return ( 

  
    <div>
      <Header />
      <h1>Sign Up here</h1>
      <form className="signup-form" action="/auth/signup" method="POST">
        <label className="signup-label" htmlFor="signup-email">Email:</label>
        <input className="signup-input" type="email" id="signup-email" name="email" required />
        <br />
        <label className="signup-label" htmlFor="signup-name">Name:</label>
        <input className="signup-input" type="text" id="signup-name" name="username" required />
        <br />
        <label className="signup-label" htmlFor="signup-password">Password:</label>
        <input className="signup-input" type="password" id="signup-password" name="password" required />
        <br />
        <button className="signup-button" type="submit">Sign Up</button>
      </form>
      <a href="/">
        <button>Main page</button>
      </a>

      <Footer />
    </div>
  );
};

export default SignUpPage;
