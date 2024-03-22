

import React, { useState } from 'react';
import { loginAPI } from '../Services/allAPIs'; 
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Login.css'; 

function Login() {
  const location = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserIdChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userName || !password) {
      alert("Please enter UserName and password");
    } else {
      try {
        const result = await loginAPI({ userName, password });
        console.log(result);
        if (result.status === 200) {
          alert("Login successful");
          location('/form')
        } else {
          alert(result.response.data);
        }
      } catch (error) {
        console.error("Error occurred:", error);
        alert("An error occurred while logging in. Please try again.");
      }
    }
  }

  return (
    <div>
   <Header />
    
    <div className="login-container">
   
      <div className="login-card " style={{marginTop:'-55px'}}>
       <center><h2>Login</h2></center> 
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>UserName:</label>
            <input type="email" value={userName} onChange={handleUserIdChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    
    </div>
    <Footer />
    </div>
  );
}

export default Login;
