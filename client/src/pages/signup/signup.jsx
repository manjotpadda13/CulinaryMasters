// SignUpPage.jsx
import React, { useState }  from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
// import './components/signup/signup.css';

const SignUpPage = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    })
      .then(response => {

        if (response.ok) {
          window.location.href = 'http://localhost:5173/login';
        } else {
          throw new Error('Signup failed');
        }
      })
      .catch(error => {
        console.error('Error during signup:', error);
      });
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return ( 
    <div>
      <Header />
      <h1>Sign Up here</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label" htmlFor="signup-email">
          Email:
        </label>
        <input
          className="signup-input"
          type="email"
          id="signup-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label className="signup-label" htmlFor="signup-name">
          Name:
        </label>
        <input
          className="signup-input"
          type="text"
          id="signup-name"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label className="signup-label" htmlFor="signup-password">
          Password:
        </label>
        <input
          className="signup-input"
          type="password"
          id="signup-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <a href="/">
        <button>Main page</button>
      </a>

      <Footer />
    </div>
  );
};

export default SignUpPage;
