import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { left } from '@popperjs/core';
import { padding } from '@mui/system';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from 'react-icons/fa';
import { AwesomeButton } from 'react-awesome-button';
import './details.css';
function ProductDetailPage() {
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
    // function ProductDetail(){
    //     const imgs = document.querySelectorAll('.img-select a');
    //     const imgBtns = [...imgs];
    //     let imgId = 1;
    //     imgBtns.forEach((imgItem) => {
    //     imgItem.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         imgId = imgItem.dataset.id;
    //         slideImage();
    //     });
    // });

    // function slideImage(){
    //     const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    //     document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    // }

    // window.addEventListener('resize', slideImage);
    // }
    return (
        <div>
            <div style={{ background: "#c9c9c9" }}>
                <div class="card">
                    {/* <ul className='ul-product'>
                    <li className='li-product'><img src="/ip_hong-island.png" alt="ip image" onClick={changeImage('one')} id="0ne"/></li>
                    <li className='li-product'><img src="/ip_dy.png" alt="ip image" onClick={changeImage('two')} id="two"/></li>
                    <li className='li-product'><img src="/ip.png" alt="ip image" onClick={changeImage('three')} id="three"/></li>
                    <li className='li-product'><img src="/ip_spects.png" alt="ip image" onClick={changeImage('four')} id="four"/></li>
                    </ul> */}
                </div>
                <div id="main-img">
                        <img src="/ip_hong-island.png" alt="ip image" id='img-main'/>
                </div>
                </div>
                <div class="product-content">
                    <h2 class="product-title">Iphone 15</h2>
                    <span class="pro-soldold" style={{ display: "inline-block", color: "#252a2b", lineHeight: "1.45", fontSize: "14px", }}>Tình trạng:
                        <strong style={{ color: "#B36969", fontWeight: "700" }}>Còn hàng</strong>
                    </span>
                    <span class="pro-vendor" style={{ display: "inline-block", color: "#252a2b", lineHeight: "1.45", fontSize: "14px", marginLeft: "100px" }}>Thương hiệu:
                        <strong style={{ color: "#B36969", fontWeight: "700" }}><a style={{ color: "#B36969", textDecoration: "none", outline: "none", backgroundColor: "transparent" }} title="Show vendor" href="#">Ip</a></strong>
                    </span>
                    <div class="product-price" style={{ background: "#f9f9f9" }}>
                        <p class="last-price">Giá <span>$199.00</span></p>
                    </div>

                    <div class="product-detail">
                        <div class="product-vanriant" style={{ display: "block" }}>
                            <ul class='list-vanriant' style={{ display: "flex", flexWrap: "wrap", width: "100%", listStyle: "none", margin: "0", padding: "0", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", paddingInlineStart: "40px", unicodeBidi: "isolate" }}>
                                <li class='item-variant' style={{ marginRight: "10px", alignItems: "center", background: "#fff", border: "1px solid #d1d5db", borderRadius: "8px", color: "#444", cursor: "pointer", display: "flex", flexDirection: "column", fontSize: "12px", gap: "10px", justifyContent: "center", margin: "0 0 10px", overflow: "hidden", position: "relative", textDecoration: "none", width: "calc(33.33333% - 6.666667px" }}>
                                    <a class="button__change-color  is-flex is-align-items-center" title='Yellow' style={{ gap: "5px", justifyContent: "flex-start", padding: "5px", width: "100%", color: "#485fc7", cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", }}>
                                        <img src='/ip-vang.png' alt='Ip 15 yellow' class="variant-img" style={{ height: "50", width: "50", position: "relative", width: "30px", maxWidth: "100%", overflowClipMargin: "content-box", overflow: "clip" }} />
                                        <div class=".d-flex flex-direction-column">
                                            <strong class='item-variant-name' style={{ color: "#444", textAlign: "left", display: "-webkit-box", overflow: "hidden", width: "100%", fontWeight: "700" }}>Vàng</strong>
                                            <span class="item-variant-price" style={{ color: "red", textAlign: "left", fontStyle: "inherit", fontWeight: "inherit", fontSize: "12px" }}>22,990,000₫</span>
                                        </div>
                                    </a>
                                </li>
                                <li class='item-variant' style={{ marginRight: "10px", alignItems: "center", background: "#fff", border: "1px solid #d1d5db", borderRadius: "8px", color: "#444", cursor: "pointer", display: "flex", flexDirection: "column", fontSize: "12px", gap: "10px", justifyContent: "center", margin: "0 0 10px", overflow: "hidden", position: "relative", textDecoration: "none", width: "calc(33.33333% - 6.666667px" }}>
                                    <a class="button__change-color  is-flex is-align-items-center" title='Black' style={{ gap: "5px", justifyContent: "flex-start", padding: "5px", width: "100%", color: "#485fc7", cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", }}>
                                        <img src='/iphone-15-den.png' alt='Ip black' style={{ height: "50", width: "50", position: "relative", width: "30px", maxWidth: "100%", overflowClipMargin: "content-box", overflow: "clip" }} />
                                        <div class=".d-flex flex-direction-column">
                                            <strong class='item-variant-name' style={{ color: "#444", textAlign: "left", display: "-webkit-box", overflow: "hidden", width: "100%", fontWeight: "700" }}>Đen</strong>
                                            <span class="item-variant-price" style={{ color: "red", textAlign: "left", fontStyle: "inherit", fontWeight: "inherit", fontSize: "12px" }}>22,990,000₫</span>
                                        </div>
                                    </a>
                                </li>
                                <li class='item-variant' style={{ alignItems: "center", background: "#fff", border: "1px solid #d1d5db", borderRadius: "8px", color: "#444", cursor: "pointer", display: "flex", flexDirection: "column", fontSize: "12px", gap: "10px", justifyContent: "center", margin: "0 0 10px", overflow: "hidden", position: "relative", textDecoration: "none", width: "calc(34% - 5px" }}>
                                    <a class="button__change-color  is-flex is-align-items-center" title='Blue' style={{ gap: "5px", justifyContent: "flex-start", padding: "5px", width: "100%", color: "#485fc7", cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center" }}>
                                        <img src='/iphone-15-xanh-duong.png' alt='Ip blue' style={{ height: "50", width: "50", position: "relative", width: "30px", maxWidth: "100%", overflowClipMargin: "content-box", overflow: "clip" }} />
                                        <div class=".d-flex flex-direction-column">
                                            <strong class='item-variant-name' style={{ color: "#444", textAlign: "right", display: "-webkit-box", overflow: "hidden", width: "100%", fontWeight: "700" }}>Xanh</strong>
                                            <span class="item-variant-price" style={{ color: "red", textAlign: "left", fontStyle: "inherit", fontWeight: "inherit", fontSize: "12px" }}>22,990,000₫</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="purchase-info" style={{ marginTop: "15px", display: "inline-block" }}>
                            <p class="qtu-name" for="size" style={{ top: "340px", fontSize: "16px" }}>Số lượng</p>
                            <div class='quality'>
                                <div class="qty-minus" style={{ width: "34px", height: "34px", background: "#212529", textAlign: "center", fontSize: "19px", lineHeight: "36px", color: "#fff", cursor: "pointer", borderRadius: "0 3px 3px 0", marginLeft: "180px", position: "absolute", top: "334px" }}>-</div>
                                <input type="text" value="1" style={{ width: "60px", height: "34px", textAlign: "center", marginLeft: "120px", display: "inline-block", position: "absolute", top: "334px" }} />
                                <div class='qty-plus' style={{ position: "absolute", top: "334px", left: "190px", width: "34px", height: "34px", background: "#212529", textAlign: "center", fontSize: "19px", lineHeight: "36px", color: "#fff", cursor: "pointer", borderRadius: "3px 0 0 3px" }}>+</div>
                            </div>
                            <button type="button" id="add-to-cart" class="addButton" name="add" >
                                <span style={{ color: "white", fontSize: "10px" }}>Add to card</span>
                            </button>
                            <button type="button" id="buy-now" class="buyButton" name="add" >
                                <span style={{ color: "white", fontSize: "10px", fontWeight: "500" }}>Buy</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="product-info-tabs" style={{ background: "#fff", }}>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                            Thiết kế dẫn đầu xu hướng - Nhiều màu sắc trendy cùng chất liệu kính pha màu và khung nhôm vô cùng bền bỉ.
                            Nắm bắt và tương tác mọi thông tin dễ dàng hơn với Dynamic Island mở rộng.
                            Chụp ảnh chân dung xuất sắc mọi khoảnh khắc - Camera chính 48MP với tele 2X và chế độ chỉnh sửa đa dạng.
                            Hiệu năng cân mọi tác vụ - A16 Bionic mạnh mẽ cho mọi thao tác mượt mà và nhanh chóng.
                        </div>
                    </div>
                </div>
            <div className='d-flex'>
                <div className="p-2 w-100 bd-highlight" style={{ color: "#8e8989" }}>You  may also like </div>
            </div>
            <Carousel responsive={responsive}>
                <div style={{ marginTop: "15px", marginBottom: "20px", marginLeft: "30px", borderRadius: "15px", width: "150px", height: "200px", backgroundColor: "#F1F1F1" }} >
                    <img style={{ marginLeft: "5px", width: "140px", height: "145px" }} src="/iphone.png" alt="iPhone" />
                    <div className="d-flex justify-content-start">iPhone</div>
                    <div className="d-flex justify-content-end" style={{ marginTop: "-25px" }}>$199.00</div>
                </div>
                <div style={{ marginTop: "15px", marginBottom: "20px", marginLeft: "30px", borderRadius: "15px", width: "150px", height: "200px", backgroundColor: "#F1F1F1" }} >
                    <img style={{ marginLeft: "5px", width: "140px", height: "145px" }} src="/iphone.png" alt="iPhone" />
                    <div className="d-flex justify-content-start">iPhone</div>
                    <div className="d-flex justify-content-end" style={{ marginTop: "-25px" }}>$199.00</div>
                </div>
                <div style={{ marginTop: "15px", marginBottom: "20px", marginLeft: "30px", borderRadius: "15px", width: "150px", height: "200px", backgroundColor: "#F1F1F1" }} >
                    <img style={{ marginLeft: "5px", width: "140px", height: "145px" }} src="/iphone.png" alt="iPhone" />
                    <div className="d-flex justify-content-start">iPhone</div>
                    <div className="d-flex justify-content-end" style={{ marginTop: "-25px" }}>$199.00</div>
                </div>
                <div style={{ marginTop: "15px", marginBottom: "20px", marginLeft: "30px", borderRadius: "15px", width: "150px", height: "200px", backgroundColor: "#F1F1F1" }} >
                    <img style={{ marginLeft: "5px", width: "140px", height: "145px" }} src="/iphone.png" alt="iPhone" />
                    <div className="d-flex justify-content-start">iPhone</div>
                    <div className="d-flex justify-content-end" style={{ marginTop: "-25px" }}>$199.00</div>
                </div>
                <div style={{ marginTop: "15px", marginBottom: "20px", marginLeft: "30px", borderRadius: "15px", width: "150px", height: "200px", backgroundColor: "#F1F1F1" }} >
                    <img style={{ marginLeft: "5px", width: "140px", height: "145px" }} src="/iphone.png" alt="iPhone" />
                    <div className="d-flex justify-content-start">iPhone</div>
                    <div className="d-flex justify-content-end" style={{ marginTop: "-25px" }}>$199.00</div>

                </div>
                <div style={{ marginTop: "15px", marginBottom: "20px", marginLeft: "30px", borderRadius: "15px", width: "150px", height: "200px", backgroundColor: "#F1F1F1" }} >
                    <img style={{ marginLeft: "5px", width: "140px", height: "145px" }} src="/iphone.png" alt="iPhone" />
                    <div className="d-flex justify-content-start">iPhone</div>
                    <div className="d-flex justify-content-end" style={{ marginTop: "-25px" }}>$199.00</div>
                </div>
                <div style={{ marginTop: "15px", marginBottom: "20px", marginLeft: "30px", borderRadius: "15px", width: "150px", height: "200px", backgroundColor: "#F1F1F1" }} >
                    <img style={{ marginLeft: "5px", width: "140px", height: "145px" }} src="/iphone.png" alt="iPhone" />
                    <div className="d-flex justify-content-start">iPhone</div>
                    <div className="d-flex justify-content-end" style={{ marginTop: "-25px" }}>$199.00</div>
                </div>
                <div style={{ marginTop: "15px", marginBottom: "20px", marginLeft: "30px", borderRadius: "15px", width: "150px", height: "200px", backgroundColor: "#F1F1F1" }} >
                    <img style={{ marginLeft: "5px", width: "140px", height: "145px" }} src="/iphone.png" alt="iPhone" />
                    <div className="d-flex justify-content-start">iPhone</div>
                    <div className="d-flex justify-content-end" style={{ marginTop: "-25px" }}>$199.00</div>
                </div>
            </Carousel>

        </div >
    )
}

export default ProductDetailPage

