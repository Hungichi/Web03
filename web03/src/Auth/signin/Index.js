import React, { useState } from 'react'
import './SignIn.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const Index = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async (e) => {
      e.preventDefault();

      try {
          const res = await axios.post('/api/auth/signin', { username, password });
          localStorage.setItem('token', res.data.token);
          alert('Login successful');
      } catch (err) {
          alert(err.response.data.message);
      }
  };
  return (
    <div className='body'>
      <div className='container1'> 
        <h1 className='h1'>Welcome Back !</h1> 
        <h3 className='h3'>Fps Store</h3> 
        <h4 className='h4'>_ _ _ _ _ _ _ _ _</h4> 
      </div> 
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
    <form className='form-signin' onSubmit={handleSignin}>
        <h3 className='h3'>Login</h3>
        <input className='inp' type="text" placeholder="UserName" id="username" onChange={(e) => setUserName(e.target.value)} value={username} required></input>
        <input className="inp"type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required ></input>
        <div className='remember-forgot'>
          <div className='remember-me'>
            <input className="inp" type='checkbox' id='remember'></input>
            <label className='label2' htmlFor='remember'>Remember me</label>
          </div>
          <div className='forgot'>
            <a href='#'>Forgot password?</a>
          </div>
        </div>
        <button className='btn' type='submit' >Login</button>
        <div className="social">
          <h5 className='line-one'>__________</h5> 
          <h6 className='h6'>Or</h6>
          <h5 className='line-two'>__________</h5>
        </div>
        <a  href='#'><img  src='./gmail.png' className="gmail" alt="logo" /></a>
        <div className='register'>
          <span>Don't have an account ?<a href='./SignUp.js'> SignUp</a></span>
        </div>
        <div className='term'>
          <p >Terms & Conditions</p> 
          <p >Support</p> 
          <p >Customer Care</p>
        </div>
      </form>
    </div>
  )
}

export default Index
