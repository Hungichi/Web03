import React, { useState } from 'react'
import './SinUp.css';
import axios from "axios";

function SignUp () {
  const [username, setUserName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword]= useState()

  const handleSubmit =(e ) =>{
    e.preventDefault()
    axios.post('',{username,email,password}
      .then(result => console.log(result))
      .catch(err => console.log(err))
    )
  }
  return (
    <div className='body'>
       <div class='container1'> 
       <h1 className='h1'>CREATE AN ACCOUNT</h1> 
        <h3 className='h3'>Fps Store</h3> 
        <h4 className='h4'>_ _ _ _ _ _ _ _ _ _ _ _</h4> 
      </div> 
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
    <form className='form-signup' onSubmit={handleSubmit}>
        <h3 className='h3'>SignUp</h3>
        <input  className='inp' type="text" placeholder="UserName" id="username" onChange={(e) => setUserName(e.target.value)}></input>
        <input  className='inp' type="email" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input  className='inp' type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
        <input  className='inp' type="confirmpassword" placeholder="Confirm Password" id="confirmpassword" onChange={(e) => setPassword(e.target.value)}></input>
        <button className='btn' >SignUp</button>
        <div class="socials">
          <h5 class='lines-one'>__________</h5> 
          <h6 >Or</h6>
          <h5 class='lines-two'>__________</h5>
        </div>
        <a  href='#'><img id='img1'  src='./gmail.png' className="gmail" alt="logo" /></a>
        <div class='registers'>
          <span>Already  Registered? <a href='./Index.js'>Login</a></span>
        </div>
        <div class='terms'>
          <p >Terms & Conditions</p> 
          <p >Support</p> 
          <p >Customer Care</p>
        </div>
    </form>
    </div>
  )
}

export default SignUp
