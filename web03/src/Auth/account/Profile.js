import React from 'react';
import {FaUserCircle} from 'react-icons/fa';
import './Profile.css';
const Profile = () => {
  return (
    <div className='container-profile' style={{display:"flex",margin:"50px 10px"}}>
       <div className='profile' style={{flex:"1",marginRight:"10px", backgroundColor:"#fff", boxShadow:"rgba(0,0,0,0.16)0px 1px 4px", borderRadius:"5px", height:"max-content"}}>
        <div className='profile-header' style={{display:"flex", marginLeft:"15px", }}>
          <img src='./user.png' alt="profile" className='profile-img' style={{width:"70px", height:"70px", borderRadius:"10px", margin:"10px"}}/>
          <div className='profile-text-container' style={{lineHeight:"0.5"}}>
            <h1 className='profile-title' style={{fontSize:"20px", fontWeight:"400"}}>Name</h1>
            <p className='profile-email' style={{fontSize:"14px"}}>name@gmail.com</p>
          </div>
        </div>
        <div className='menu' style={{margin:"0 20px"}}>
          <a href='#' className='nemu-link' style={{display:"flex", textDecoration:"none", color:"#768499", padding:"10px", margin:"10px", borderRadius:"10px"}}><FaUserCircle style={{marginRight:"10px"}}/>Profile</a>
        </div>
       </div>
       <form className='account' style={{flex:"2",marginLeft:"10px",backgroundColor:"#fff",boxShadow:"rgba(0,0,0,0.16)0px 1px 4px", borderRadius:"5x", height:"max-content"}}>
        <div className='account-header' style={{display:"flex",justifyContent:"space-between", alignItems:"center", padding:"10px",borderRadius:"1px solid #768499"}}>
          <h1 className='account-title' style={{fontSize:"30px", fontWeight:"500", color:"#1e293b", marginLeft:"10px"}}>My Profile</h1>
          <div className='button-container' style={{marginRight:"5px"}}>
            <button className='button-cancel' style={{width:"8em",height:"3em", cursor:"pointer", border:"1px solid #768499",borderRadius:"2em", color:"#1e293b",fontWeight:"bold",marginRight:"5px",backgroundColor:"#fff", transitionDuration:"0.3s", boxShadow:"rgba(0,0,0,0.1)"}}>Cancel</button>
            <button className='button-save' style={{width:"8em",height:"3em", cursor:"pointer", border:"1px solid #456dfe",borderRadius:"2em", color:"#fff",fontWeight:"bold",marginRight:"5px",backgroundColor:"#456dfe", transitionDuration:"0.3s", boxShadow:"rgba(0,0,0,0.1)"}}>Save</button>
          </div>
        </div>
        <div className='account-edit'style={{display:"flex", justifyContent:"space-between",margin:"150px 0"}}>
          <div className='inp-container' style={{width:"100%", display:"flex", flexDirection:"column", margin:"0 20px"}}>
            <label className='label-container' style={{color:"#768499", fontSize:"20px", position:"absolute",top:"150px"}}>UserName</label>
            <input type='text' placeholder='Name' className='input-container'style={{width:"30%",height:"35px", border:"1px solid #768499",padding:"5px", color:"#768499", position:"absolute", top:"150px",left:"800px", borderRadius:"5px"}}/>
          </div>
          <div className='inp-container'  style={{width:"100%", display:"flex", flexDirection:"column", margin:"0 20px"}}>
            <label className='label-container' style={{color:"#768499", fontSize:"20px", position:"absolute", top:"220px", left:"550px"}}>Phone</label>
            <input type='text' placeholder='1234' className='input-container' style={{width:"30%",height:"35px", border:"1px solid #768499",padding:"5px", color:"#768499",position:"absolute", top:"220px",left:"800px", borderRadius:"5px"}}/>
          </div>
          <div className='inp-container'  style={{width:"100%", display:"flex", flexDirection:"column", margin:"0 20px"}}>
            <label className='label-container' style={{color:"#768499", fontSize:"20px",position:"absolute", top:"290px", left:"550px"}}>Password</label>
            <input type='text' placeholder='*****' className='input-container' style={{width:"30%",height:"35px", border:"1px solid #768499",position:"absolute", top:"290px",left:"800px", borderRadius:"5px"}}/>
          </div>
        </div>
       </form>
    </div>
    
  )
}

export default Profile
