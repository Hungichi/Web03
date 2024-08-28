import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Profile.css';
const Profile = ({username , email, phone , password}) => {
  return (
    <div className='container-profile' style={{ display: "flex", margin: "50px 10px" }}>
      <div className='profile' style={{ flex: "1", marginRight: "10px", backgroundColor: "#fff", boxShadow: "rgba(0,0,0,0.16)0px 1px 4px", borderRadius: "5px", height: "max-content" }}>
        <div className='profile-header' style={{ display: "flex", marginLeft: "15px", }}>
          <img src='./user.png' alt="profile" className='profile-img' style={{ width: "100px", height: "100px", borderRadius: "10px", margin: "10px" }} />
          <div className="file-primary" style={{position:"relative", overflow:"hidden",marginTop:"110px", width:"100px",border:"none",borderRadius:"0",fontSize:"15px",background:"#212529b8", color:"white",position:"absolute",left:"35px"}}>
            Change Photo
            <input type="file" name="file" style={{position:"absolute", opacity:"0", right:"0", top:"0"}} />
          </div>
          <div className='profile-text-container' style={{ lineHeight: "0.5" }}>
            <h1 className='profile-title' style={{ fontSize: "30px", fontWeight: "400", color: "blue", margin: "20px" }}>Name</h1>
            <p className='profile-email' style={{ fontSize: "16px", margin: "20px" }}>name@gmail.com</p>
          </div>
        </div>
        <div className='menu' style={{ margin: "0 20px" }}>
          <a href='#' className='nemu-link' style={{ display: "flex", textDecoration: "none", color: "#768499", padding: "20px", margin: "30px", borderRadius: "10px", fontSize:"18px", fontWeight:"400" }}><FaUserCircle style={{ marginRight: "30px", marginTop:"5px"  }} />Profile</a>
        </div>
      </div>
      <form className='account' style={{ flex: "2", marginLeft: "10px", backgroundColor: "#fff", boxShadow: "rgba(0,0,0,0.16)0px 1px 4px", borderRadius: "5x", height: "max-content", padding: "50px" }}>
        <div className='account-header' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderRadius: "1px solid #768499" }}>
          <h1 className='account-title' style={{ fontSize: "30px", fontWeight: "500", color: "#1e293b", marginLeft: "10px" }}>My Profile</h1>
          <div className='button-container' style={{ marginRight: "5px" }}>
            <button className='button-cancel' style={{ width: "8em", height: "3em", cursor: "pointer", border: "1px solid #768499", borderRadius: "2em", color: "#1e293b", fontWeight: "bold", marginRight: "5px", backgroundColor: "#fff", transitionDuration: "0.3s", boxShadow: "rgba(0,0,0,0.1)" }}>Cancel</button>
            <button className='button-save' style={{ width: "8em", height: "3em", cursor: "pointer", border: "1px solid #456dfe", borderRadius: "2em", color: "#fff", fontWeight: "bold", marginRight: "5px", backgroundColor: "#456dfe", transitionDuration: "0.3s", boxShadow: "rgba(0,0,0,0.1)" }}>Save</button>
          </div>
        </div>
        <hr />
        <div className="col-md-9">

          <div className="container">

            <form className='form-profile' style={{ width: "550px", fontWeight: "bold", padding: "10px" }}>

              <div className="form-group">

                <label className='lab-profile' for="userName" style={{ fontSize: "20px", color: "#8f9096", }}>UserName</label>
                <input className='inp-profile' type="text"  id="userName" placeholder='Name' style={{ padding: "10px" }} />

              </div>
              <div className="form-group">

                <label className='lab-profile' for="phone" style={{ fontSize: "20px", color: "#8f9096" }}>Phone</label>
                <input className='inp-profile' type="text" id="phone" placeholder='0987-564-141' style={{ padding: "10px" }} />

              </div>
              <div className="form-group">

                <label className='lab-profile' for="pass" style={{ fontSize: "20px", color: "#8f9096" }}>Password</label>
                <input className='inp-profile' type="password"  id="pass" placeholder='*********' style={{ padding: "10px" }} />

              </div>
            </form>
          </div>
        </div>
      </form>
    </div>


  )
}

export default Profile
