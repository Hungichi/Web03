import React from 'react'
import './cart.css'
import App from '../../test'
const handleQuantityChange = (productId, change) => {
    setCartItems(prevItems => 
        prevItems.map(item => 
            item.productId === productId 
            ? { ...item, quantity: item.quantity + change } 
            : item
        )
    );
};
const Cart = ({ cartItems }) => {
    return (
            <div className='cart'>
                {App(cartItems.map((item,index) => ( //test.js
                <div class="row3" key={index}>
                    <div class="item3">
                        <input type='checkbox' className='check-item3'></input>
                        <div class="product-view3">
                            <img src=".\src\cart\Vector.jpg" alt=""></img>
                        </div>
                        <div className='des-container3'>
                            <div class="content3">
                                <h4>{item.name}</h4>
                                <p>Price: {item.price} VND</p>
                            </div>
                            <div className='itemsBtn3'>
                                <div className='item-action3'>
                                    <button className='plus-minus3' onClick={() => handleQuantityChange(item.productId, -1)} disabled={item.quantity <= 1}>-</button>
                                    <input id='number3' type="" value={item.quantity} min="1" readOnly></input>
                                    <button className='plus-minus3' onClick={() => handleQuantityChange(item.productId, 1)}>+</button>
                                </div>
                                <div className='deleteBtn3'>
                                    <button id='deleteBtn3'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)))}
            </div>
    )
}

export default Cart
