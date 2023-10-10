import React from 'react'
import './OtpPage.css'
import "../login/login.css";
import logo from "../../../public/Images/NavBarLogo.png";

function OtpPage() {
  return (
    <>
    
    <div className="loginDiv">
        <div className="mainContent">
          <div className="leftDiv">
            <div className="heading">
              <h1>Login</h1>
              <h3>Get access to your Orders, Wishlist and Recommendations</h3>
            </div>
            <div className="leftImg">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="rightDiv">
            <div className="LogIninputs">
              <input type="text" placeholder="Enter Email/Mobile Number" />
              <p>
                By continuing, you agree to Uhub <span> Terms of Use </span> and <span> Privacy
                Policy.</span>
              </p>
              <button>Request Otp</button>
              <h6>New to uhub ? create acount</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OtpPage