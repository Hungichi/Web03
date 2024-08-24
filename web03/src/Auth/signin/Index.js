import React from 'react'
import './SignIn.css';
import "bootstrap/dist/css/bootstrap.min.css";
const Index = () => {
  return (
    <div className='body'>
      <div class='container1'> 
        <h1 className='h1'>Welcome Back !</h1> 
        <h3 className='h3'>Fps Store</h3> 
        <h4 className='h4'>_ _ _ _ _ _ _ _ _</h4> 
      </div> 
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
    <form className='form-signin'>
        <h3 className='h3'>Login</h3>
        <input className='inp' type="text" placeholder="UserName" id="username"></input>
        <input className="inp"type="password" placeholder="Password" id="password"></input>
        <div class='remember-forgot'>
          <div class='remember-me'>
            <input className="inp" type='checkbox' id='remember'></input>
            <label className='label-signin' for='remember'>Remember me</label>
          </div>
          <div class='forgot'>
            <a href='#'>Forgot password?</a>
          </div>
        </div>
        <button className='btn'>Login</button>
        <div class="social">
          <h5 class='line-one'>__________</h5> 
          <h6 className='h6'>Or</h6>
          <h5 class='line-two'>__________</h5>
        </div>
        <a  id='img1' href='#'><img  src='./gmail.png' className="gmail" alt="logo" /></a>
        <div class='register'>
          <span>Don't have an account ?<a href='#'> SignUp</a></span>
        </div>
        <div class='term'>
          <p >Terms & Conditions</p> 
          <p >Support</p> 
          <p >Customer Care</p>
        </div>
      </form>
    </div>
  )
}

export default Index
