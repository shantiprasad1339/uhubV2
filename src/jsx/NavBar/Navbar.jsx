import React, { useNavigate, useState } from "react";
import "./NavBar.css";
import NavLogo from "../../../public/Images/NavBarLogo.png";
import Whatsapp from "../../../public/Images/WhatsApp.png";
import messanger from "../../../public/Images/Facebook Messenger.png";
import trending from "../../../public/Images/Rectangle 10.png";
import SearchIcon from "@mui/icons-material/Search";
import DropdownBtn from "../DropDownButton/DropDownButton";
import { NavLink } from "react-router-dom";
import SignUp from "../SignUp/sing-up";
import Login from "./../login/login";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="nav">
        <div className="topNav">
          <div className="navLogo">
            <NavLink to="/">
              <img src={NavLogo} />
            </NavLink>
          </div>
          <div className="navsearch">
            <div className="navInput">
              <div
                className="inputDiv"
                style={{ padding: "2px", borderRadius: "5px" }}
              >
                <input
                  type="text"
                  className="navIn"
                  placeholder="Seacrh University"
                />
                <SearchIcon className="searchIcon" />
              </div>
              <marquee behavior="" direction="">
                {" "}
                Simply dummy text of the printing and typesetting
              </marquee>
            </div>
          </div>
          <div className="navIcons">
            <NavLink to={"/Login"} className="login-button">
              Login /{" "}
            </NavLink>
            <NavLink to={"/SignUp"} className="login-button">
              Sing Up
            </NavLink>
            {/* <img src={Whatsapp} alt="" /> */}
            {/* <img src={messanger} alt="" /> */}
          </div>
        </div>
        <div className="navButtons1">
          <div className="haburgerDiv">
            <MenuIcon onClick={ToggleSidebar} />
          </div>
          <DropdownBtn name={"Collage"} />
          <DropdownBtn name={"Stream"} />
          <DropdownBtn name={"Services"} />
          <DropdownBtn name={"Blog"} />
          <DropdownBtn name={"Products"} />
          <DropdownBtn name={"Contact"} />
          <DropdownBtn name={"Counselling"} />
        </div>
      </div>

      
        
          
            
           
             
       
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">Sidebar Header</h4>
            <MenuIcon onClick={ToggleSidebar} />
            
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a className="sd-link">Menu Item 1</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 2</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 3</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 4</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 5</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 6</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 7</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 8</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      
    </>
  );
}

export default Navbar;
