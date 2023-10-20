import { useCallback } from "react";
import LogInBg from "../../../public/Images/LogInBackGround.jpg";
import "./login.css";
import logo from "../../../public/Images/NavBarLogo.png";
import {useNavigate} from "react-router-dom"
function Login() {
  
    const navigate = useNavigate(); 
    function navigateTosignUp(){
      navigate("/signup");
    }
    function navigateToHome(){
      navigate("/home");
    }
  return (
    <>
      <div className="loginDiv">
        <div className="mainContent">
          <div className="leftDiv">
            <div className="heading">
              <h1 >LOG-IN</h1>
              <h3>Get access to your Orders, Wishlist and Recommendations</h3>
            </div>
            <div className="leftImg">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="rightDiv">
            <div className="LogIninputs">
              <input type="text" placeholder="Enter Mobile Number" />
              <p>
                By continuing, you agree to Uhub <span> Terms of Use </span> and <span> Privacy
                Policy.</span>
              </p>
              <button onClick={navigateToHome}>Countinue</button>
              <h6 onClick={navigateTosignUp}>New to Uhub? Create an account</h6>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Login;
