import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Cart from './pages/cart/cart.js';
import Payment from './pages/payment/Payment.js';
import Header from './pages/Home/header';
import Body from './pages/Home/body';
import Footer from './pages/Home/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from './Auth/signin/Index';
import SignUp from './Auth/SignUp/SignUp';
import Profile from './Auth/account/Profile';
import Categories from './pages/Categories/category';
import Iphone from './pages/Categories/iphone';
import Laptop from './pages/Categories/laptop';
import Headphone from './pages/Categories/headphone';
import Aboutus from './pages/AboutUs/aboutus'
import Help from './pages/Help/help'
import Dashboard from './pages/Dashboard/dashboard';
import ProductList from './pages/ProductList/productList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard />}>
        </Route>
        <Route path='/Help' element={<Help />}>
        </Route>
        <Route path='/AboutUs' element={<Aboutus />}>
        </Route>
        <Route path='/Home' element={<Body />}>
        </Route>
        <Route path='/Headphone' element={<Headphone />}>
        </Route>
        <Route path='/Laptop' element={<Laptop />}>
        </Route>
        <Route path='/Iphone' element={<Iphone />}>
        </Route>
        <Route path='/Category' element={<Categories />}>
        </Route>
        <Route path='/Payment' element={<Payment />}>
        </Route>
        {/* <Route path='/Cart' element={<Cart />}>
        </Route> */}
        <Route path='/SignUP' element={<SignUp />}>
        </Route>
      </Routes>
    </Router>
    {/* <SignUp /> */}
    <Footer />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();