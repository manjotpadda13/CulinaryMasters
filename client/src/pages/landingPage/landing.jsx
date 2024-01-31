import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import './landing.css';
// import './components/landingPage/landing.css';

const LandingPage = () => {
  return (

   

    <div>
      <Header />
      <h1>Landing Page</h1>

      <label className="create-account" htmlFor="create-account">Create Account:</label>
        <input className="create-input" type="account" id="create-account" name="email" required />
<a href="login">
        <button>login</button>
      </a>
      
      

      <Footer />
    </div>

    
  );
};

export default LandingPage;