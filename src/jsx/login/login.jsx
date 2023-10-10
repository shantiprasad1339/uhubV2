import { useCallback } from "react";
import LogInBg from "../../../public/Images/LogInBackGround.jpg";
import "./login.css";
import logo from "../../../public/Images/NavBarLogo.png";
function Login() {
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
              <p>
                By continuing, you agree to Uhub <span> Terms of Use </span> and <span> Privacy
                Policy.</span>
              </p>
              <button>Countinue</button>
              <h6>Existing User? Log in</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
