import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './details.css';
const productDetails = () => {
  return (
    <div>
        <select class='product'>
            <div class='product-photo'>
                <div class='photo-container'>
                    <div class='photo-main'>
                        <img src="/ip2.jpg" alt='Iphone'></img>
                    </div>
                    <div class='photo-album'>
                        <ul>
                            <li>
                                <img src='./ip_spects.png'></img>
                            </li>
                            <li>
                                <img src='./ip_hong-island.png'></img>
                            </li>
                            <li>
                                <img src='./ip_dy.png'></img>
                            </li>
                            <li>
                                <img src='./ip.png'></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class='product-inf'>
                <div class='title'>
                    <h1>Iphone 15</h1>
                    <h5>Tinh trang</h5>
                    <h7>|</h7>
                    <h5>Thuong hieu</h5>
                </div>
                <div class='price'>
                    <h4>Gia</h4>
                    <span>22.990.000 VND</span>
                </div>
                <div class='variant'>
                    <h3>Mau</h3>
                    <ul>
                        <li>
                            <img src='./ip_hong-island.png'></img>
                        </li>
                        <li>
                            <img src='./ip-vang.png'></img>
                        </li>
                        <li>
                            <img src='./iphone-15-den.png'></img>
                        </li>
                        <li>
                            <img src='./iphone-15-xanh-duong.png'></img>
                        </li>
                    </ul>
                </div>
                <div class='quality'>
                    <h4>So luong</h4>
                    <button type='button' class='qlt-btn'>
                    <svg focusable="false" class="icon icon--minus " viewBox="0 0 10 2" role="presentation">
						<path d="M10 0v2H0V0z"></path>
					</svg>
                    </button>
                </div>
                <button class='add-btn'>Add to card</button>
                <button class='buy-btn'>Buy</button>
            </div>
            <div class='description'>
                <h3>Description</h3>
            </div>
           
        </select>
    </div>
  )
}

export default productDetails
