import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {FaShoppingCart,FaRegUser,FaRegUserCircle} from 'react-icons/fa';

function header() {
    return (
      <div className='sticky-top'>
        <div className='sticky-top bg-dark d-flex justify-content-between '>
            <div className='logo_container'>
                <h2 className='text-light'>FPS Store</h2>
            </div>
            <ul style={{width:"400px"}} className='d-flex justify-content-between '>
                <li style={{marginLeft:"10px"}} className="mt-1 p-2"><a className="text-decoration-none text-light" href='/Home'>Home</a></li>
                <li style={{marginLeft:"10px"}} className="mt-1 p-2"><a className="text-decoration-none text-light" href='/Category'>Categories</a></li>
                <li style={{marginLeft:"10px"}} className="mt-1 p-2"><a className="text-decoration-none text-light" href='/AboutUs'>About Us</a></li>
                <li style={{marginLeft:"10px"}} className="mt-1 p-2"><a className="text-decoration-none text-light" href='/Help'>Help</a></li>
            </ul>
            <input style={{marginTop:"10px", borderRadius:"13px", height:"40px" , width:"305px" }} className='mt-2' type="text" placeholder="Search.."></input>
            <div>
              <FaShoppingCart style={{ margin:"15px",fontSize:"20px" ,color:"white"}}></FaShoppingCart>
              <FaRegUserCircle style={{margin:"15px",fontSize:"20px" ,color:"white"}}></FaRegUserCircle>
            </div>
            


        </div>
      </div>
      
    );
  }
export default header