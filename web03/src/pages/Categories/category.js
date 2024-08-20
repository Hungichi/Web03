import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaChevronDown} from 'react-icons/fa';

function Categories() {
    return (
       <div style={{backgroundColor:"white"}} className='d-flex'>
        <div style={{ backgroundColor:"#D5D5D5",width:"32%", height:"500px", margin:"20px"}} className='d-flex flex-column' > 
            <div>
               <div style={{}} className="d-flex ">
                  <div class="p-2 flex-grow-1 ">Product Catalog</div>
                  <button className='abc'></button>
                  
               </div>   
            </div>
        </div>
        <div style={{width:"70%", margin:"20px", height:"200px" }}  className='bg-secondary'></div>
        
       </div>
    );
  }
  
  export default Categories;