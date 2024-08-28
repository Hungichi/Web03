import React, { useState } from 'react';
import './SinUp.css';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
      }
    };
  return (
    <div className='body'>
       <div className='container1'> 
       <h1 className='h1'>CREATE AN ACCOUNT</h1> 
        <h3 className='h3'>Fps Store</h3> 
        <h4 className='h4'>_ _ _ _ _ _ _ _ _ _ _ _</h4> 
      </div> 
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
    <form className='form-signup' onSubmit={handleSignup}>
        <h3 className='h3'>SignUp</h3>
        <input  className='inp' type="text" placeholder="UserName" id="username" onChange={(e) => setUsername(e.target.value)} value={username} ></input>
        <input  className='inp' type="email" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required></input>
        <input  className='inp' type="text " placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required></input>
        <input  className='inp' type="confirmpassword" placeholder="Confirm Password" id="confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required></input>
        <button className='btn' type='submit'>SignUp</button>
        <div className="socials">
          <h5 className='lines-one'>__________</h5> 
          <h6 >Or</h6>
          <h5 className='lines-two'>__________</h5>
        </div>
        <a  href='#'><img id='img1'  src='./gmail.png' className="gmail" alt="logo" /></a>
        <div className='registers'>
          <span>Already  Registered? <a href='./Index.js'>Login</a></span>
        </div>
        <div className='terms'>
          <p >Terms & Conditions</p> 
          <p >Support</p> 
          <p >Customer Care</p>
        </div>
    </form>
    </div>
  )
}

export default SignUp
