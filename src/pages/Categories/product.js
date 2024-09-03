import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaChevronDown} from 'react-icons/fa';
import './category.css'

function Product(props){
    
    const {imgF, imgB, name, price} = props
    return(
        <div  className='stuff' >
                <img className='ItemPic' style={{marginLeft:"18px",width:"130px", height:"135px" }}  src={imgF}  alt="Product 1" />
                <img className='back' src={imgB}></img>
                <p className='ItemName'>{name}</p>
                <div className='ItemPrice'>{price}</div>
                <div class="text-box">
                  <a href="#" class="btnH btnH-white btnH-animate">Add to cart</a>
               </div>
    </div>
    )
}

export default Product;