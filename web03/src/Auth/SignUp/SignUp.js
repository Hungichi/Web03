import React from 'react'
import './SinUp.css';
import "bootstrap/dist/css/bootstrap.min.css";
const SignUp = () => {
  return (
    <div className='"bg-black"'>
       <div class='container'> 
       <h1>CREATE AN ACCOUNT</h1> 
        <h3>Fps Store</h3> 
        <h4>_ _ _ _ _ _ _ _ _ _ _ _</h4> 
      </div> 
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
    <form>
        <h3>SignUp</h3>
        <input type="text" placeholder="UserName" id="username"></input>
        <input type="email/phone" placeholder="Email/Phone" id="email"></input>
        <input type="password" placeholder="Password" id="password"></input>
        <input type="password" placeholder="Confirm Password" id="password"></input>
        <button>Sign Up</button>
        <div class="socials">
          <h5 class='lines-one'>__________</h5> 
          <h6 >Or</h6>
          <h5 class='lines-two'>__________</h5>
        </div>
        <a  href='#'><img class='img1'  src='./gmail.png' className="gmail" alt="logo" /></a>
        <div class='registers'>
          <span>Already  Registered? <a href='./Index.js'>  Login</a></span>
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
