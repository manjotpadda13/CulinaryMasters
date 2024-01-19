import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Log In Page</h1>
      <form action="/auth/login" method="POST" className="login-form">
        <label htmlFor="login-email" className="login-label">Email:</label>
        <input type="email" id="login-email" name="email" required className="login-input" />

        <label htmlFor="login-password" className="login-label">Password:</label>
        <input type="password" id="login-password" name="password" required className="login-input" />

        <button type="submit" className="login-button">Log In</button>
      </form>

      <a href="/signup">
        <button>Sign Up</button>
      </a>
    </div>
  );
};

export default LoginPage;



