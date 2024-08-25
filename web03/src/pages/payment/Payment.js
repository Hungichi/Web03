import React from 'react'
import './payment.css'
class Payment extends React.Component {
  render() {
    return(
        <div>
            <div id='text'>
                <p>Customer Information</p>
                <p>To order, please add your address</p>
            </div>
            <div className='input'>
              <input className='fullname' type='text' placeholder='Full name'></input>
              <input className='phonenumber' type='text' placeholder='Phone number'></input>
              <input className='address' type='text' placeholder='Address'></input>
            </div>
            <p>Address type</p>
            <div className='typebtn'>
              <button id='hometype'>Home</button>
              <button id='officetype'>Office</button>
            </div> 
            <div id='default-address'><input type='checkbox' id='d-address'></input><label for='check-all'>Set as default address</label></div>
        </div>
    )
  }
}

export default Payment
