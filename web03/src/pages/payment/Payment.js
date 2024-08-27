import React from 'react'  
import './payment.css'

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 'home'
    };
  }

  toggleType = (type) => {
    this.setState({ selectedType: type });
  }

  render() {
    const { selectedType } = this.state;
    return (
      <div className='payment3'>
        <div className='text3'>
          <h2>Customer Information</h2>
          <p>To order, please add your address</p>
        </div>
        <div className='input3'>
          <input className='fullname3' type='text' placeholder='Full name'></input>
          <input className='phonenumber3' type='text' placeholder='Phone number'></input>
          <input className='address3' type='text' placeholder='Address'></input>
        </div>
        <p className='text3'>Address type</p>
        <div className='typebtn3'>
          <button
            id='hometype3'
            style={{ backgroundColor: selectedType === 'home' ? 'gray' : 'white', color: selectedType === 'home' ? 'white' : 'black' }}
            onClick={() => this.toggleType('home')}
          >
            Home
          </button>
          <button
            id='officetype3'
            style={{ backgroundColor: selectedType === 'office' ? 'gray' : 'white', color: selectedType === 'home' ? 'white' : 'black'  }}
            onClick={() => this.toggleType('office')}
          >
            Office
          </button>
        </div>
        <div id='default-address3'>
          <input type='checkbox' id='d-address3'></input>
          <label className='check-all' htmlFor='check-all'>Set as default address</label>
        </div>
        <div className='payment-method3'>
          <div className='paymentmethod3'><p>Payment method</p></div>
          <div className='methodbtn3'><button id='cashbtn3' style={{backgroundColor: 'gray', color: 'white'}}>Cash</button></div>
          <div className='methodbtn3'><button id='momobtn3'><a href='/Momo'>MoMo</a></button></div>
          <div className='methodbtn3'><button id='paypalbtn3'><a href='/Paypal'>PayPal</a></button></div>
        </div>
        <div className='lastdiv3'>
          <button id='btc3'><a href='/Cart'>Back to cart</a></button>
          <button id='done3'>Done</button>
        </div>
      </div>
    );
  }
}

export default Payment;