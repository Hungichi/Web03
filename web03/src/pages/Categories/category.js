import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Categories() {
    return (
       <div className='d-flex'>
        <div style={{ backgroundColor:"#D5D5D5",width:"32%", height:"200px", margin:"20px"}} ></div>
        <div style={{width:"70%", margin:"20px", height:"200px" }}  className='bg-secondary'></div>
        
       </div>
    );
  }
  
  export default Categories;