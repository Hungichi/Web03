import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './dashboard.css'

import Dropdown from "../Categories/Dropdown/Dropdown.jsx"
import DropdownItem from "../Categories/DropdownItem/DropdownItem.jsx";
import Dropdown2 from "../Categories/Dropdown2/Dropdown2.jsx";

import axios from 'axios';
function Dashboard(){

    const [image, setImage] = useState();
    const [allImage, setAllImage] = useState(null);
    
    const submitImage = async(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);
        
        const result = await axios.post(
            "http://localhost:3000/upload-image",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data"},
            }
        )
    }

    const onInputChange=(e)=>{
        console.log(e.target.files[0]);
        setImage(e.target.files[0])
    }
    const items = ["Iphone", "Headphone", "Laptop",];
    return(
        <div style={{backgroundColor:"#E1E1E1"}} >
            <div style={{display:"flex", flexDirection:"column", marginLeft:"10%" , height:"950px", width:"80%",}}>
                <div style={{display:"flex" , width:"100%", height:"450px", backgroundColor:"#E1E1E1" }}>
                    <div style={{display:"flex",flexDirection:"column",flexGrow:"1", marginTop:"25px" , width:"60%" , backgroundColor:"white", borderRadius:"26px"}}>
                        <h2 style={{margin:"10px"}}>General Information</h2>
                        <p style={{marginLeft:"10px"}}>Product Name</p>
                        <input id='name' style={{border:"none", backgroundColor:"#E7E7E7",marginLeft:"10px",marginRight:"10px",borderRadius:"7px",height:"35px",marginBottom:"10px"}}></input>
                        <p style={{marginLeft:"10px"}}>Product Description</p>
                        <textarea id='description' style={{border:"none", backgroundColor:"#E7E7E7",marginLeft:"10px",marginRight:"10px",borderRadius:"15px",height:"200px"}}></textarea>
                    </div>

                    <div style={{width:"35%",marginLeft:"3%", marginTop:"25px", backgroundColor:"white", borderRadius:"26px"}}>
                        <h2 style={{margin:"10px"}}>Product Media</h2>
                        <p style={{marginLeft:"10px"}}>Photo Product </p>
                        <label for="images" className="drop-container" id="dropcontainer">
                            <span  className="drop-title">Drop files here </span>
                            or
                            <input onChange={onInputChange} accept='image/*' type="file" id="images" style={{border:"none",marginLeft:"10px",marginRight:"10px",}}></input>
                        </label>
                        <button type='submit'>Submit</button>
                    </div>
                </div>

                <div style={{display:"flex" , width:"100%", height:"270px", backgroundColor:"#E1E1E1" }}>
                    <div style={{display:"flex",flexDirection:"column",flexGrow:"1", marginTop:"25px" , width:"60%" , backgroundColor:"white", borderRadius:"26px"}}>
                        <h2 style={{margin:"10px"}}>Pricing</h2>
                        <p style={{marginLeft:"10px",}}>Product price</p>
                        <input id='price' style={{border:"none", backgroundColor:"#E7E7E7",marginLeft:"10px",marginRight:"10px",borderRadius:"7px",height:"45px",marginBottom:"10px"}}></input>
                    </div>

                    <div style={{width:"35%",marginLeft:"3%", marginTop:"25px", backgroundColor:"white", borderRadius:"26px"}}>
                        <h2 style={{margin:"10px"}}>Product Media</h2>
                        <p style={{marginLeft:"10px"}}>Photo Product </p>
                        <Dropdown
                        buttonText="Product Catalog"
                        content={
                            <>
                                {items.map((item, id) => (
                                <DropdownItem key={id}>
                                    <a id={`${item}`} className='cataItem'>{`${item} `}</a>
                                </DropdownItem>
                        ))}
                            </>
                        }
                        />
                         <Dropdown2 
                        buttonText="color" 
                        content={
                        <>
          
                            <DropdownItem >
                                <div className='d-flex'>
                                    <input id='red' style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}}  type="checkbox" />
                                    <p style={{marginTop:"5px"}}>red</p>
                                </div>
                                <div className='d-flex'>
                                    <input id='white' style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}}  type="checkbox" />
                                    <p style={{marginTop:"5px"}}>white</p>
                                </div>
                                <div className='d-flex'>
                                    <input id='black' style={{marginLeft:"10px",marginRight:"10px" ,marginBottom:"10px",width:"20px"}}  type="checkbox" />
                                    <p style={{marginTop:"5px"}}>black</p>
                                </div>
               
                            </DropdownItem>
                        </>
                        } 
                         />
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Dashboard