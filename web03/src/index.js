import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Index from './src/Auth/signin/Index';
import SignUp from './src/Auth/signup/SignUp';
import Footer from './src/page/Footer';
import Header from './src/page/Header';
import Profile from './src/Auth/account/Profile';
import productDetails from './src/page/productDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header/>
    <Profile/> */}
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
