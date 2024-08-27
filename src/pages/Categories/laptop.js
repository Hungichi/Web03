import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaChevronDown} from 'react-icons/fa';
import './category.css'

import Dropdown from "./Dropdown/Dropdown.jsx";
import DropdownItem from "./DropdownItem/DropdownItem.jsx";
import Dropdown2 from './Dropdown2/Dropdown2.jsx';



function Laptop() {
   const items = ["Iphone", "Headphone", "Laptop",];
   const [show, setShow] = useState(false);
   const [show2, setShow2] = useState(false);
    return (
      <div style={{backgroundColor:"#E1E1E1"}} className='d-flex'>
         {/* left */}
      <div style={{width:"27%",marginRight:"7%"}}>
         <div style={{position:"fixed", width:"27%",marginLeft:"2%" , marginRight:"7%"}}>
         <Dropdown
            buttonText="Product Catalog"
          content={
            <>
              {items.map((item, id) => (
                <DropdownItem key={id}>
                <a className='cataItem' href={`/${item}`}>{`${item} `}</a>
              </DropdownItem>
              ))}
            </>
            }
        />
         <Dropdown2 
            buttonText="Price Filter" 
         content={
         <>
          
             <DropdownItem >
               <div className='d-flex'>
                     <input style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}}  type="checkbox" />
                     <p style={{marginTop:"5px"}}>Under 5.000.000đ</p>
               </div>
               <div className='d-flex'>
                    <input style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}} type="checkbox" />
                     <p style={{marginTop:"5px"}}>5.000.000 - 10.000.000đ</p>
               </div>
               <div className='d-flex'>
                    <input style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}} type="checkbox" />
                     <p style={{marginTop:"5px"}}>10.000.000-15.000.000đ</p>
               </div>
               <div className='d-flex'>
                    <input style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}} type="checkbox" />
                     <p style={{marginTop:"5px"}}>15.000.000-25.000.000đ</p>
               </div>
           </DropdownItem>
           
         </>
            } 
         />
        
        {/* <div style={{ marginLeft:"50px" ,display:"flex" , flexDirection:"column",backgroundColor:"#E1E1E1",width:"26%",marginLeft:"5%", marginBottom:"20px", position:"fixed"}}  > 
            <div style={{width:"95%", backgroundColor:"#E1E1E1", margin:"20px" }} >
               <div style={{ display:"flex",borderBlockWidth:"1pt" ,borderBottom:"solid", backgroundColor:"white"}} className="container1">
                  <div class="p-2 flex-grow-1 ">Product Catalog</div>
                  <button onClick={()=>setShow(!show)} style={{marginRight:"15px" ,backgroundColor:"white", border:"none"}} ><FaChevronDown/></button>
               </div> 
               {
                  show?<div style={{ width:"", backgroundColor:"white"}} class="p-2" >Iphone</div>:null
               }
               {
                  show?<div style={{ width:"", backgroundColor:"white"}} class="p-2" >Laptop</div>:null
               }
               {
                  show?<div style={{ width:"", backgroundColor:"white"}} class="p-2" >Headphone</div>:null
               }   
            </div>

            <div style={{width:"95%", backgroundColor:"white", margin:"20px"  }}  >
               <div style={{ borderBlockWidth:"1pt" ,borderBottom:"solid", width:"", backgroundColor:"white"}} className="d-flex ">
                  <div class="p-2 flex-grow-1 ">Product Catalog</div>
                  <button onClick={()=>setShow2(!show2)} style={{marginRight:"15px" ,backgroundColor:"white", border:"none"}} ><FaChevronDown/></button>
               </div>
               <div className='d-flex flex-column'>
               {
                  show2?
                  <div className='d-flex'>
                     <input style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}}  type="checkbox" />
                     <p style={{marginTop:"5px"}}>5.000.000đ</p>
                  </div>
                  
                  :null
               }
               {
                  show2?
                  <div className='d-flex'>
                    <input style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}} type="checkbox" />
                     <p style={{marginTop:"5px"}}>5.000.000 - 10.000.000đ</p>
                  </div>
                  :null                              
               }
               {
                  show2?
                  <div className='d-flex'>
                     <input style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}}  type="checkbox" />
                     <p style={{marginTop:"5px"}}>10.000.000-15.000.000đ</p>
                  </div>
                  :null     
               }
               {
                  show2?
                  <div className='d-flex'>
                     <input style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}} type="checkbox" />
                     <p style={{marginTop:"5px"}}>15.000.000-25.000.000đ</p>
                  </div>
                  :null     
               }
               </div> 
            </div>


          </div> */}
         </div>
      </div>


        {/*right  */}
        <div style={{width:"60%", margin:"20px", display:"flex",flexDirection:"column", marginRight:"10%" }} className='justify-content-end"'>
         <div style={{width:"100%",  height:"400px",}} >
            <img style={{ width:"100%",height:"100%" }} src='/img.jpg' alt="background" ></img>
         </div>
         <div style={{ width:"", backgroundColor:""}} className="d-flex ">
                  <h2 style={{marginTop:"15px"}} class=" flex-grow-1 ">Laptop</h2>
               </div>
         <div style={{marginBottom:"20px"}} className='d-flex flex-wrap'>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }}  className='stuff' >
                <img className='ItemPic' style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='ItemName'>Product 1</div>
                <div className='ItemPrice'>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }} className='stuff'  >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                 <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }}  className='stuff' >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }} className='stuff'  >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }} className='stuff'  >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                 <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }}  className='stuff' >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }} className='stuff'  >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }} className='stuff'  >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }} className='stuff'  >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }}  className='stuff' >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }} className='stuff' >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
            <div style={ {marginTop:"20px", marginRight:"30px", borderRadius:"15px", width:"170px", height:"230px",backgroundColor:"white" }}  className='stuff' >
                <img style={{marginLeft:"18px",width:"130px", height:"135px" }}  src="/iphone.png"  alt="Product 1" />
                <div className='d-flex justify-content-center '>Product 1</div>
                <div className='d-flex justify-content-center '>$199.99</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
                
            </div>
         </div>
        </div>
        
      </div>
    );
  }
  
  export default Laptop;