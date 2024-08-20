import React from 'react'
import './cart.css'

class Cart extends React.Component {
    render() {
        return (
            <div>
            {/* <div className='navbar'>
                <li className='nav-item' id='FPSstore'><a href='/Home'>FPS Store</a></li>
                <li className='nav-item' id='home'><a href="/Home">Home</a></li>
                <li className='nav-item' id='about'><a href="/About">About</a></li>
                <li className='nav-item' id='categories'><a href="/Categories">Categories</a></li>
                <li className='nav-item' id='help'><a href="/Help">Help</a></li>
                <li className='search-bar'><input type="text" placeholder='Search-icon'></input></li>
                <li className='nav-item' id='cart'><a href='/Cart'>C</a></li>
                <li className='nav-item' id='customer-icon'><a href='/Customer'>C</a></li>
            </div> */}
            <div class="row">
                <div class="item">
                    <input type='checkbox' className='check-item'></input>
                    <div class="product-view">
                        <img src=".\src\cart\Vector.jpg" alt=""></img>
                    </div>
                    <div className='des-container'>
                        <div class="content">
                            <h1>Item's name</h1>
                            <h2>Price: </h2>
                        </div>
                        <div className='itemsBtn'>
                            <div className='item-action'>
                                <button className='plus-minus'>-</button>
                                <input id='number' type="" value="1" min="1"></input>
                                <button className='plus-minus'>+</button>
                            </div>
                            <div className='deleteBtn'>
                                <button id='deleteBtn'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='total-bar'>
                <div id='selectall'><input type='checkbox' id='check-all'></input><label for='check-all'>Select all</label></div>
                <div><button id='delete-all'>Delete</button></div>
                <div id='total'><p>Total:</p></div>
                <div id='paybtn'><button><a href='/Payment'>Pay</a></button></div>
            </div>
            {/* <div className='container'>
                <div className='col-1'>
                    <p id='logo'>FPS Store</p>
                    <p id='gmail'>FPSstore@gmail.com</p>
                    <div className='icon'>
                        <div>icon1</div>
                        <div>icon1</div>
                        <div>icon1</div>
                    </div>
                </div>
                <div className='col-2'>
                    <p>Resource</p>
                    <a href='#About'>About Us</a>
                    <a href='#Categories'>Categories</a>
                    <a href='#Help'>Help</a>
                </div>
            </div> */}
            </div>
        )
    }
}

export default Cart
