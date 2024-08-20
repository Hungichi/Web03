import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaChevronDown} from 'react-icons/fa';

function Categories() {
   const [show, setShow] = useState(false);
   



    return (
       <div className='d-flex'>
        <div style={{ backgroundColor:"#BEBEBE",width:"32%", height:"500px", margin:"20px"}} className='d-flex flex-column' > 
            <div style={{width:"100%", backgroundColor:"cyan" }} >
               <div style={{ width:"", backgroundColor:""}} className="d-flex ">
                  <div class="p-2 flex-grow-1 ">Product Catalog</div>
                  <button onClick={()=>setShow(!show)} style={{marginRight:"15px" ,backgroundColor:"#BEBEBE", border:"none"}} ><FaChevronDown/></button>
               </div> 
               {
                  show?<div class="p-2" >Iphone</div>:null
               }
               {
                  show?<div class="p-2" >Laptop</div>:null
               }
               {
                  show?<div class="p-2" >Headphone</div>:null
               }


            </div>
        </div>
        <div style={{width:"70%", margin:"20px", height:"200px" }}  className='bg-secondary'>
         <img src='img.jpg' ></img>
        </div>
        
       </div>
    );
  }
  
  export default Categories;