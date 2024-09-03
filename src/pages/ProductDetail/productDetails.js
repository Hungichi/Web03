import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import iphone1 from "./ip_dy.png";
import iphone2 from "./ip_hong-island.png";
import iphone3 from "./ip_spects.png";
import iphone4 from "./ip-vang.png";
import iphone5 from "./iphone-15-den.png";
import iphone6 from "./iphone-15-xanh-duong.png";
import App from "../../test";
function ProductDetails() {
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
    const [currentUpImg, setCurrentUpImg] = useState(iphone2);
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = (e) => {
        e.preventDefault();
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const decreaseQuantity = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }

    }
    const handleAddToCart = () => {
        window.location.href = '/Payment.js'
        alert(`Added ${quantity} items to the cart`);
    }

    const handleBuyNow = () => {
        alert(`Proceed to buy ${quantity}, ${selectedVariant} items`);
   
    }
    const [selectedVariant, setSelectedVariant] = useState(null);

    const handleVariantClick = (variant) => {
      setSelectedVariant(variant);
    }
    return (
        <div className='container-detail' style={{ maxWidth: "75%", margin: "auto", height: "90vh", marginTop: "2%", background: "white", boxShadow: "5px 5px 10px 3px rgba(0,0,0,0.3)" }}>
            <div className='left' style={{ width: "50%", padding: "30px" }}>
                <div className='main-img' style={{ width: "auto", height: "auto" }}>
                    <img src={currentUpImg} alt='ip' className='slide' style={{ width: "95%" }} />
                </div>
                <div className='option flex'  >
                    <ul className='option-ul'style={{ display: "flex", flexWrap: "wrap", width: "100%", listStyle: "none", margin: "0", padding: "0",marginTop:"20px" }}>
                    <li className='option-li'> <img src={iphone1} alt='ip' className='option-slide' style={{ width: "85px", height: "85px", padding: "10px", }} onClick={() =>setCurrentUpImg(iphone1)}/></li>
                   <li className='option-li'> <img src={iphone2} alt='ip' className='option-slide' style={{ width: "85px", height: "85px", padding: "10px", }} onClick={() =>setCurrentUpImg(iphone2)}/></li>
                   <li className='option-li'><img src={iphone3} alt='ip' className='option-slide' style={{ width: "85px", height: "85px", padding: "10px"}} onClick={() =>setCurrentUpImg(iphone3)}/></li>
                   <li className='option-li'><img src={iphone4} alt='ip' className='option-slide' style={{ width: "85px", height: "85px", padding: "10px" }} onClick={() =>setCurrentUpImg(iphone4)}/></li>
                   <li className='option-li'><img src={iphone5} alt='ip' className='option-slide' style={{ width: "85px", height: "85px", padding: "10px" }} onClick={() =>setCurrentUpImg(iphone5)}/></li>
                 
                 
                </ul>
                </div>
            </div>
            <div className='right' style={{ width: "50%", padding: "100px 50px 40px 120px", position: "absolute",top:"1px", left: "590px" }}>
                <h3 className='h3-detail' style={{ color: "#af827d", margin: "10px 0 20px 0", fontSize: "35px", fontWeight: "700" }}>Iphone 15</h3>
                <h4 className='h4-detail' style={{ color: "red", }}><small style={{ color: "#837d7c" }}>$</small>199</h4>
                <p className='p-detail' style={{ color: "#837d7c", margin: "20px 0 50px 0 ", lineHeight: "25px" }}>Thiết kế khung viền từ titan chuẩn hàng không vũ trụ - Cực nhẹ, bền cùng viền cạnh mỏng cầm nắm thoải mái.Hiệu năng Pro chiến game thả ga - Chip A17 Pro mang lại hiệu năng đồ họa vô cùng sống động và chân thực.Thoả sức sáng tạo và quay phim chuyên nghiệp - Cụm 3 camera sau đến 48MP và nhiều chế độ tiên tiến.Nút tác vụ mới giúp nhanh chóng kích hoạt tính năng yêu thích của bạn</p>
                <h5 className='h5-detail' style={{ color: "#837d7c", fontSize: "15px", color: "red", fontWeight: "500", margin:"-20px" }}>Color</h5>
                <div className='box-content'style={{border: "2px soild #fff",margin:"25px 25px 0 0px"}}>
                    <ul className='list-vanriant' style={{ display: "flex", flexWrap: "wrap", width: "100%", listStyle: "none", margin: "0 ", padding: "0", }}>
                        <li className='item-variant' style={{border: selectedVariant === 'Vang' ? "3px solid #485fc7" : "1px solid #d1d5db", marginRight: "10px", padding: "5px 0", alignItems: "center", background: "#fff", borderRadius: "8px", color: "#444", cursor: "pointer", display: "flex", flexDirection: "column", fontSize: "12px", gap: "10px", justifyContent: "center", margin: "0 0 10px", overflow: "hidden", position: "relative", textDecoration: "none", width: "calc(34% - 7%)" }}>
                            <a title='Vang' className='button_change-color is flex is align-items-center' style={{ border:"1px solid #fff",gap: "5px", justifyContent: "flex-start", padding: "5px", width: "100%", display: "flex", alignItems: "center", color: "#485fc7", cursor: "pointer", textDecoration: "none", }} onClick={() => handleVariantClick('Vang')}>
                                <img src={iphone4} alt='iP' className='img-detail' style={{ height: "50px", width: "50px" }} />
                                <div className='is flex is flex-direction-column'>
                                    <strong className='item-variant-name' style={{ fontSize: "16px", color: "#444", textAlign: "left", display: "-webkit-box", overflow: "hidden", WebkitLineClamp: "3", width: "100%", fontWeight: "700" }}>Vàng</strong>
                                    <span className='item-variant-price' style={{ color: "#444", fontSize: "15px", textAlign: "left", fontStyle: "inherit", fontWeight: "inherit" }}>$199</span>
                                </div>
                            </a>
                        </li>
                        <li className='item-variant' style={{border:selectedVariant === 'Den' ? "3px solid #485fc7" : "1px solid #d1d5db", marginRight: "10px", padding: "5px 0", alignItems: "center", background: "#fff", borderRadius: "8px", color: "#444", cursor: "pointer", display: "flex", flexDirection: "column", fontSize: "12px", gap: "10px", justifyContent: "center", margin: "0 0 10px", overflow: "hidden", position: "relative", textDecoration: "none", width: "calc(34% - 7%)" }}>
                            <a title='Den' className='button_change-color is flex is align-items-center' style={{ gap: "5px", justifyContent: "flex-start", padding: "5px", width: "100%", display: "flex", alignItems: "center", color: "#485fc7", cursor: "pointer", textDecoration: "none" }} onClick={() => handleVariantClick('Den')}>
                                <img src={iphone5} alt='iP' className='img-detail' style={{ height: "50px", width: "50px" }} />
                                <div className='is flex is flex-direction-column'>
                                    <strong className='item-variant-name' style={{ fontSize: "16px", color: "#444", textAlign: "left", display: "-webkit-box", overflow: "hidden", WebkitLineClamp: "3", width: "100%", fontWeight: "700" }}>Đen</strong>
                                    <span className='item-variant-price' style={{ color: "#444", fontSize: "15px", textAlign: "left", fontStyle: "inherit", fontWeight: "inherit" }}>$199</span>
                                </div>
                            </a>
                        </li>
                        <li className='item-variant' style={{border:selectedVariant === 'Xanh' ? "3px solid #485fc7" : "1px solid #d1d5db", marginLeft: "20px", padding: "5px 0", alignItems: "center", background: "#fff", borderRadius: "8px", color: "#444", cursor: "pointer", display: "flex", flexDirection: "column", fontSize: "12px", gap: "10px", justifyContent: "center", margin: "0 0 10px", overflow: "hidden", position: "relative", textDecoration: "none", width: "calc(34% - 7%)" }}>
                            <a title='Vang' className='button_change-color is flex is align-items-center' style={{ gap: "5px", justifyContent: "flex-start", padding: "5px", width: "100%", display: "flex", alignItems: "center", color: "#485fc7", cursor: "pointer", textDecoration: "none" }} onClick={() => handleVariantClick('Xanh')}>
                                <img src={iphone6} alt='iP' className='img-detail' style={{ height: "50px", width: "50px" }} />
                                <div className='is flex is flex-direction-column'>
                                    <strong className='item-variant-name' style={{ fontSize: "16px", color: "#444", textAlign: "left", display: "-webkit-box", overflow: "hidden", WebkitLineClamp: "3", width: "100%", fontWeight: "700" }}>Xanh</strong>
                                    <span className='item-variant-price' style={{ color: "#444", fontSize: "15px", textAlign: "left", fontStyle: "inherit", fontWeight: "inherit" }}>$199</span>
                                </div>
                            </a>
                        </li>
                    </ul>
               
                </div>
                <div className='detail-quality' style={{ marginTop: "30px" }}>
                    <label className='label-detail' for="size" style={{ color: "red", fontSize: "20px", fontWeight: "400" }}>Number</label>
                    <form className='form-detail' style={{ display: "flex" }}>
                        <button className='qtyMinus' style={{ width: "34px", height: "34px", background: "#212529", textAlign: "center", fontSize: "19px", lineHeight: "36px", color: "#fff", cursor: "pointer", borderRadius: "3px 0 0 3px ", position: "absolute", top: "510px", left: "220px" }}onClick={decreaseQuantity} >-</button>
                        <input   value={quantity}  type='text' name='quality'  className='inp-detail' style={{ width: "60px", textAlign: "center", position: "absolute", top: "511px", left: "254px", height: "33px" }} />
                        <button className='qtyPlus' style={{ width: "34px", height: "34px", background: "#212529", textAlign: "center", fontSize: "19px", lineHeight: "36px", color: "#fff", cursor: "pointer", borderRadius: "0px 3px 3px 0px ", position: "absolute", top: "510px", left: "310px" }} onClick={increaseQuantity} >+</button>
                    </form>
                </div>
                <div className="addcart-area" style={{ display: "flex", marginTop: "55px", }}>
                    <button type="button" id="add-to-cart" class="addCard-button" name="add" style={{ background: "#000", border: "1px solid #000 ", color: "#fff", width: "50%", borderRadius: "4px", padding: "15px 20px", fontWeight: "600", fontSize: "15px" }}  onClick={handleAddToCart}>
                        <span>Add to card</span>
                    </button>
                    <button type="button" id="buy-now" class="buy-button" name="add" style={{ marginLeft: "15px", background: "red", border: "1px solid red ", color: "#fff", width: "50%", borderRadius: "4px", padding: "15px 20px", fontWeight: "600", fontSize: "15px" }}  onClick={handleBuyNow}>
                        <span>Buy</span>
                    </button>

                </div>
            </div>
            <div className='d-flex'>
            <div className="p-2 w-100 bd-highlight" style={{color:"#000", fontSize:"30px"}}>You may also like</div>
        </div>
        <Carousel responsive={responsive}>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#F1F1F1" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
                <div className="d-flex justify-content-center">$199</div>
            </div>
            <div style={ {marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#F1F1F1" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
                <div className="d-flex justify-content-center">$199</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#F1F1F1" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
                <div className="d-flex justify-content-center">$199</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#F1F1F1" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
                <div className="d-flex justify-content-center">$199</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#F1F1F1" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
                <div className="d-flex justify-content-center">$199</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#F1F1F1" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
                <div className="d-flex justify-content-center">$199</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#F1F1F1" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
                <div className="d-flex justify-content-center">$199</div>
            </div>
            <div style={ { marginTop:"15px", marginBottom:"20px" , marginLeft:"30px", borderRadius:"15px", width:"150px", height:"200px",backgroundColor:"#F1F1F1" }} >
                <img style={{marginLeft:"5px",width:"140px", height:"145px" }} src="/iphone.png" alt="iPhone" />
                <div className="d-flex justify-content-center">iPhone</div>
                <div className="d-flex justify-content-center">$199</div>
            </div>
        </Carousel>
        </div>
    )
}
  
export default ProductDetails