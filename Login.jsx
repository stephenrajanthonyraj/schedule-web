import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this to useNavigate

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(email);
    history.push('/availability');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
