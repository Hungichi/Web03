import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FaArrowRight} from 'react-icons/fa';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import background from "./pic/background.png";
import './body.css' ;
import Product from '../Categories/product'

function Body() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (


      <div style={{backgroundColor:"#E1E1E1" ,paddingTop:"20px", paddingBottom:"20px"}} >
        <div className='width-100 d-flex justify-content-center ' style={{marginBottom:"20px",marginTop:"20px",height:"500px" , objectFit:"cover"}} >
            <div style={{boxShadow:"rgba(17, 17, 26, 0.1) 0px 0px 16px" ,borderRadius:"19px" ,height:"100%" , backgroundImage:`url(${background})`, width:"77%" , objectFit:"cover" }}  >
                <div style={{marginTop:"5%",marginLeft:"6%"}} className='d-flex flex-column'>
                    <h2 className='text-light'>SALE UP TO 20% OFF</h2>
                    <h1 className='text-light'>Iphone 15 Pro Max</h1>
                    <p className='text-light'>abcdxcxcxc</p>
                    <button className='text-light' style={{ borderColor:"white",background:"none" , borderRadius:"15px" ,width:"85px", height:"35px"}}>Buy now</button>
                </div>
                
            </div>
        </div>
        <div className='d-flex'>
            <div className="p-2 w-100 bd-highlight">Trending Categories</div>
            <div style={{width:"130px"}} className="flex-shrink-1 bd-highlight">Show More<FaArrowRight/></div>
        </div>
        <Carousel responsive={responsive}>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"white" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
            <div style={ {marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"white" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/laptopF.jpg" alt="laptop" />
                <div className="d-flex justify-content-center">laptop</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"white" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/SamsungS23.webp" alt="iPhone" />
                <div className="d-flex justify-content-center">SamsungS23</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"white" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/moxpad.jpg" alt="iPhone" />
                <div className="d-flex justify-content-center">moxpad x9</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"white" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/gaminghead.jpg" alt="iPhone" />
                <div className="d-flex justify-content-center">gaming headphone</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"white" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/Asus.webp" alt="iPhone" />
                <div className="d-flex justify-content-center">Asus laptop</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"white" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/nubia.webp" alt="iPhone" />
                <div className="d-flex justify-content-center">nubia NEO</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"white" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
        </Carousel>
        
        <div style={{marginTop:"20px"}} className='d-flex'>
            <div className="p-2 w-100 bd-highlight">Popular Product</div>
            <div style={{width:"130px"}} className="flex-shrink-1 bd-highlight">Show More<FaArrowRight/></div>
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
    );
}

export default Body;
//import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css"
// import {FaArrowRight} from 'react-icons/fa';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// function body() {
//     const responsive = {
//         superLargeDesktop: {
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };
//     return (
//       <div className='Body'>
//         <div className='d-flex'>
//             <div class="p-2 w-100 bd-highlight">Trending Categories</div>
//             <div style={{width:"130px"}} class="flex-shrink-1 bd-highlight">show more</div>
//         </div>
//         <Carousel responsive={responsive}>
//             <div style={{width:"150px", height:"200px" }} className='shelf-item'>
//                 <img style={{width:"150px", height:"200px" }}  src="/iphone.jpeg" ></img>
//                 <div className='brand-name'></div>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='brand-name'></div>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='brand-name'></div>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='brand-name'></div>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='brand-name'></div>
//             </div>
//         </Carousel>;
            



        
//         <div className='title2'>
//             <h2>Popular Products</h2>
//             <p>show more</p>
//         </div>
//         <div className='product shelf'>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='product-name'></div>
//                 <div className='product-price'></div>
//                 <button className='add-to-cart'></button>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='product-name'></div>
//                 <div className='product-price'></div>
//                 <button className='add-to-cart'></button>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='product-name'></div>
//                 <div className='product-price'></div>
//                 <button className='add-to-cart'></button>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='product-name'></div>
//                 <div className='product-price'></div>
//                 <button className='add-to-cart'></button>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='product-name'></div>
//                 <div className='product-price'></div>
//                 <button className='add-to-cart'></button>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='product-name'></div>
//                 <div className='product-price'></div>
//                 <button className='add-to-cart'></button>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='product-name'></div>
//                 <div className='product-price'></div>
//                 <button className='add-to-cart'></button>
//             </div>
//             <div className='shelf-item'>
//                 <img></img>
//                 <div className='product-name'></div>
//                 <div className='product-price'></div>
//                 <button className='add-to-cart'></button>
//             </div>
//         </div>
//       </div>
      
//     );
//   }
// export default body
