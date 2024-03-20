
import React, { useState } from 'react';
import { registerAPI } from '../Services/allAPIs';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Register.css'; // Import CSS file for styling

function Register() {
  const location = useNavigate();
  const [userName, setUserName] = useState('');
  const [Name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!userName || !Name || !password || !address || !gender) {
      alert("Please fill all details");
    } else {
      try {
        const result = await registerAPI({ userName, Name, password, address, gender });
        console.log(result);
        if (result.status === 200) {
          alert(result.data);
          location('/login');
        } else {
          alert(result.response.data);
        }
      } catch (error) {
        console.error("Error occurred:", error);
        alert("An error occurred while registering. Please try again.");
      }
    }
  }

  return (
    <div>
      <Header />
      <div className="register-container">
        <div className="register-card">
          <h2>Registration Form</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Username:</label>
              <input type="email" value={userName} onChange={handleUserNameChange} />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" value={Name} onChange={handleNameChange} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" value={address} onChange={handleAddressChange} />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <label>
                <input id="male" type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
                Male
              </label><span>
              <label>
                <input id="female" type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                Female
              </label>
              </span>
              
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;