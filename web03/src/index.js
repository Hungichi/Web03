import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Index from './Auth/signin/Index';
import SignUp from './Auth/SignUp/SignUp';
import Footer from './page/Footer';
import Header from './page/Header';
import Profile from './Auth/account/Profile';
import productDetails from './page/productDetails';
import SignIn from './Auth/signin/Index'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header/>
    <Profile/> */}
    {/* <SignIn/> */}
    <SignUp/>
    {/* <Index/>
    <App />
    <Footer/>
    <productDetails/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
