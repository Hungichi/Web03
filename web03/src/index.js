import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cart from './pages/cart/cart.js';
import Payment from './pages/payment/Payment.js';
import App from './App';
import Header from './pages/Home/header';
import Body from './pages/Home/body';
import Footer from './pages/Home/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Index from './Auth/signin/Index';
import SignUp from './Auth/SignUp/SignUp';
import Profile from './Auth/account/Profile';
import ProductDetails from './Auth/account/productDetails';
import Categories from './pages/Categories/category';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Nav />
    <Cart />
    <Footer /> */}
    <Router>
      <Routes>
        {/* <Route path='/Payment' element = {<Payment />}>
        </Route>
        <Route path='/Cart' element = {<Cart />}>
        </Route>
        <Route path='/SignUp' element = {<SignUp />}>
        </Route> */}
        <Route path='/ProductDetails' element = {<ProductDetails/>}></Route>
      </Routes>
    </Router> 
    {/* <Index/> */}
    {/* <SignUp/> */}
    {/* <productDetails/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();