import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaFacebook,FaInstagram ,FaTwitter} from 'react-icons/fa';

function footer() {

    return (
    <div style={{ height :'250px'}}  className="d-flex bg-dark height" >
            <div className="p-2 d-flex align-items-start flex-column text-light flex-grow-1 bd-highlight" style={{height:'200px'}}>
            <h2 className=" p-2 text-light">FPS Store</h2>
            <div className="p-2 text-light">FPSstore@gmail.com</div>
            <div className="p-2 d-flex  text-light">
                <FaFacebook style={{fontSize:"18"}} ></FaFacebook>
                
                <div className="ml-15 rounded-circle bg-light d-flex justify-content-center" style={{marginLeft:"15px", width:'18px', height:'18px'}}>
                    <FaInstagram style={{fontSize:"16", paddingTop : "1px"}} className=' text-black'/>
                </div>
                <div className="rounded-circle bg-light d-flex justify-content-center" style={{marginLeft:"15px", width:'18px', height:'18px'}}>
                    <FaTwitter style={{fontSize:"16", paddingTop : "1px"}} className=' text-black'/>
                </div>

                </div>
            </div>

        <div className="p-2 text-light flex-column d-flex bd-highlight" style={{height:'200px'}} >
            <h3 className="pt-2 text-light">Resource</h3>
            <a herf="/AboutUs" className="pb-1 text-light">About Us</a>
            <a herf="/Category" className="pb-1 text-light">Categories</a>
            <a herf="/Help" className=" text-light">Help</a>

        </div>
    </div>
      
    );
  }
export default footer