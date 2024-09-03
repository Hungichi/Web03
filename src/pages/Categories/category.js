import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaChevronDown} from 'react-icons/fa';
import './category.css'

import Dropdown from "./Dropdown/Dropdown.jsx";
import DropdownItem from "./DropdownItem/DropdownItem.jsx";
import Dropdown2 from './Dropdown2/Dropdown2.jsx';

import Product from './product.js';

function Categories() {
   
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
        
         </div>
      </div>


        {/*right  */}
        <div style={{width:"60%", margin:"20px", display:"flex",flexDirection:"column", marginRight:"10%" }} className='justify-content-end"'>
         <div style={{width:"100%",  height:"400px",}} >
            <img style={{ width:"100%",height:"100%" }} src='/img.jpg' alt="background" ></img>
         </div>
         <div style={{ width:"", backgroundColor:""}} className="d-flex ">
                  <h2 style={{marginTop:"15px"}} class=" flex-grow-1 ">All Products</h2>
               </div>
         <div style={{marginBottom:"20px"}} className='d-flex flex-wrap'>
            <Product imgF ="/iphone.png" imgB = "/iphone13.webp" name="iphone 13 Promax " price="$577"/>
            <Product imgF ="/headphoneF.jpg" imgB = "/headphoneB.jpg" name="wireless headphone" price="$99"/>
            <Product imgF ="/laptopF.jpg" imgB = "/laptopB.avif"  name="microsoft laptop" price="$599"/>
            <Product imgF ="/SamsungS23.webp" imgB = "/SamsungS23B.jpeg" name="Samsung S23 Ultra" price="$470"/>
            <Product imgF ="/iphoneX.webp" imgB = "/iphoneXB.jfif" name="iphone Xs " price="$399"/>
            <Product imgF ="/moxpad.jpg" imgB = "/moxpadB.jpg" name="moxpad X9 " price="$399"/>
            <Product imgF ="/iphone11.webp" imgB = "/iphone11B.jpg" name="iphone 11 Promax " price="$477"/>
            <Product imgF ="/xiaomi13.jfif" imgB = "/xiaomi13B.jpg" name="Xiaomi 13 pro " price="$557"/>
            <Product imgF ="/gaminghead.jpg" imgB = "/gamingheadB.webp" name="NASUN headphone" price="$200"/>
            <Product imgF ="/Asus.webp" imgB = "/AsusB.webp" name="ASUS laptop" price="$699"/>
            <Product imgF ="/pova6.webp" imgB = "/pova6B.webp" name="pova 6" price="$499"/>
            <Product imgF ="/nubia.webp" imgB = "/nubiaB.jfif"name="nubia NEO2" price="$480"/>
         </div>
        </div>
        
      </div>
    );
  }
  
  export default Categories;