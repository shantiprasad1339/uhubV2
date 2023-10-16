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
import CloseIcon from "@mui/icons-material/Close";
import Collapsible from "react-collapsible";
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
                // style={{ padding: "2px", borderRadius: "5px" }}
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
                Simply dummy text of the printing and typesetting.
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

          <div class="dropdown">
            <button
              class=" dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              College
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>

          <div class="dropdown">
            <button
              class=" dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Stream
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>

          <div class="dropdown">
            <button
              class=" dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services{" "}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>

          <div class="dropdown">
            <button
              class=" dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Blog
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>

          <div class="dropdown">
            <button
              class=" dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>

          <div class="dropdown">
            <button
              class=" dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              
            >
              Contacts
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <div className="counselling">
            <div class="dropdown">
              <button
                class=" dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Counselling
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className="sd-header">
          <h4 className="mb-0">Universty Hub</h4>
          <CloseIcon onClick={ToggleSidebar} />
        </div>
        <div className="sd-body">
          <ul>
            <li></li>
            <li>
            <Collapsible trigger="Start here" className="sd-link">
                <ul>
                  <li>item 1</li>
                  <li>item 1</li>
                  <li>item 1</li>
                </ul>
              </Collapsible>
            </li>
            <li>
            <Collapsible trigger="Start here" className="sd-link">
                <ul>
                  <li>item 1</li>
                  <li>item 1</li>
                  <li>item 1</li>
                </ul>
              </Collapsible>
            </li>
            <li>
              
            </li>
            <li>
            <Collapsible trigger="Start here" className="sd-link">
                <ul>
                  <li>item 1</li>
                  <li>item 1</li>
                  <li>item 1</li>
                </ul>
              </Collapsible>
            </li>
            <li>
            <Collapsible trigger="Start here" className="sd-link">
                <ul>
                  <li>item 1</li>
                  <li>item 1</li>
                  <li>item 1</li>
                </ul>
              </Collapsible>
            </li>
            <li>
            <Collapsible trigger="Start here" className="sd-link">
                <ul>
                  <li>item 1</li>
                  <li>item 1</li>
                  <li>item 1</li>
                </ul>
              </Collapsible>
            </li>
            <li>
              <Collapsible trigger="Start here" className="sd-link">
                <ul>
                  <li>item 1</li>
                  <li>item 1</li>
                  <li>item 1</li>
                </ul>
              </Collapsible>
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
