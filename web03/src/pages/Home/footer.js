import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaFacebook,FaInstagram ,FaTwitter} from 'react-icons/fa';

function footer() {

    return (
    <div style={{height :'250px'}}  class="d-flex bg-dark height" >
            <div class="p-2 d-flex align-items-start flex-column text-light flex-grow-1 bd-highlight" style={{height:'200px'}}>
                <h2 class="p-2 text-light">FPS Store</h2>
                <div class="p-2 text-light">FPSstore@gmail.com</div>
                <div class="p-2 d-flex  text-light">
                    <FaFacebook style={{fontSize:"18"}} ></FaFacebook>
                
                    <div class="ml-15 rounded-circle bg-light d-flex justify-content-center" style={{marginLeft:"15px", width:'18px', height:'18px'}}>
                        <FaInstagram style={{fontSize:"16", paddingTop : "1px"}} className=' text-black'/>
                    </div>
                    <div class="rounded-circle bg-light d-flex justify-content-center" style={{marginLeft:"15px", width:'18px', height:'18px'}}>
                        <FaTwitter style={{fontSize:"16", paddingTop : "1px"}} className=' text-black'/>
                    </div>

                </div>
            </div>

        <div class="p-2 text-light flex-column d-flex bd-highlight" style={{height:'200px'}} >
            <h2 class="pt-2 text-light">Resource</h2>
            <div class="pb-1 text-light">About Us</div>
            <div class="pb-1 text-light">Categories</div>
            <div class=" text-light">Help</div>

        </div>
    </div>
      
    );
  }
export default footer