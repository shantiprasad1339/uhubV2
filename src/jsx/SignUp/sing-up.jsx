import { useCallback } from "react";
import LogInBg from "../../../public/Images/LogInBackGround.jpg";
import "../login/login.css";
import logo from "../../../public/Images/NavBarLogo.png";
import "./sing-up.css";



const SingUp = () => {
 
  return (
   <>
     <div className="loginDiv">
        <div className="mainContent">
          <div className="leftDiv">
            <div className="heading">
              <h1>Looks Like You're New Here</h1>
              <h3>Sign up with your mobile number to get started</h3>
            </div>
            <div className="leftImg">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="rightDiv">
            <div className="LogIninputs">
              <input type="text" placeholder="Enter Mobile Number" />
           <div className="otpText">
            <p>otp send to mobile </p>
            <p style={{color:'red'}}>Resend ?</p>
           </div>
            
              <input type="text" placeholder="Enter Mobile Otp " />
              
              <button>Countinue</button>
              <h6>Existing User? Log in</h6>
            </div>
          </div>
        </div>
      </div>
   </>
  );
};

export default SingUp;
