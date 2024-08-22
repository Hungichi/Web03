import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import background from './pic/background3.jpg';
import logo from './pic/logo.png';
import logo2 from './pic/image.png';
import Carousel from "react-multi-carousel";


function Aboutus(){
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

    return(
        <div style={{display:"flex", flexDirection:"column",justifyContent:"center"}} >
            <div style={{ marginTop:"10px",marginLeft:"14.5%"}}>
                <div style={{width:"83%", height:"500px" ,backgroundImage:`url(${background})`}}>
                    <img style={{marginTop:"7%"}} src={logo}></img>
                </div>
                <div style={{display:"flex"}} >
                    <img style={{boxShadow:" rgba(46, 114, 240, 0.4) -5px 5px, rgba(46, 114, 240, 0.3) -10px 10px, rgba(46, 114, 240, 0.2) -15px 15px, rgba(46, 114, 240, 0.1) -20px 20px, rgba(46, 114, 240, 0.05) -25px 25px", margin:"20px"}} src={logo2}></img>
                    <div style={{width:"68%" ,marginLeft:"20px",marginTop:"20px"}}>
                    FPS Store là nơi chuyên cung cấp các thiết bị công nghệ và các phụ kiện có liên quan. Với sứ mệnh mang đến những trải nghiệm tốt nhất cho người dùng, chúng tôi sẽ nổ lực hết mình để các sản phẩm đến tay người dùng một cách hoàn hảo nhất.
                    </div>
                </div>
                <div style={{width:"83%", display:"flex", flexDirection:"column"}}>
                    <h2 style={{marginTop:"15px"}}>You May Also Like</h2>
                <Carousel responsive={responsive}>
            <div style={ { marginTop:"15px", marginBottom:"20px" , borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#EAEAEA" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
            <div style={ {marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#EAEAEA" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#EAEAEA" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#EAEAEA" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#EAEAEA" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#EAEAEA" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#EAEAEA" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#EAEAEA" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
            </div>
        </Carousel>
                </div>
            </div>            
        </div>
    );
}

export default Aboutus;