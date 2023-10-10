import React, { useState } from 'react';
import './footer.css';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Whtasapp from '../../assets/images/whatsapp.png';
import chatbot from '../../assets/images/chatbot.png';
import Button from 'react-bootstrap/Button';


import Modal from 'react-bootstrap/Modal';

const Footer = () => {
    return (
        <>
            <div className="footer-bg">
             <footer>
                <div className="container">
                  <div className="row">
                   <div className="col-md-3">
                       <div className="footer-logo-box text-center"><img src={logo} alt="logo" className="footer-logo-sz" /></div> 
                       </div>
                       <div className="col-md-9 mt-3">
                        <form action="">
                            <input type="search" name="" id="" className="form-control footer-search-input" />
                            <div><button type="submit" className="footer-search-btn">Ask a Question</button></div>
                        </form>
                        </div>
                      <FooterInfoBox />
                      <FooterInfoBox />
                      <FooterInfoBox />
                      <FooterInfoBox />
                      <FooterInfoBox />
                      <FooterInfoBox />
                  </div>
                </div>
                <WhatsAppIcon />
                <ChatBox />
             </footer>
            
            </div>
        </>
    )
}

export default Footer;

const FooterInfoBox = () => {
    return (
        <>
          <div className="col-md-4 mt-5">
            <h5 className="footer-heading">MBA</h5>
            <ul className="footer-dtl-list">
            <NavLink to="/" className="text-decoration-none footer-list"><li className="mt-2">Top MBA Colleges</li></NavLink>
            <NavLink to="/" className="text-decoration-none footer-list"><li className="mt-2">MBA Colleges</li></NavLink>
               <NavLink to="/" className="text-decoration-none footer-list"><li className="mt-2">Executive MBA Colleges</li></NavLink>
               <NavLink to="/" className="text-decoration-none footer-list"><li className="mt-2">MBA Exams</li></NavLink>
               <NavLink to="/" className="text-decoration-none footer-list"><li className="mt-2">Online MBA</li></NavLink>
            </ul>
          </div>
        </>
    );
}

const WhatsAppIcon = () => {
    return (
        <>
            <div className="whatsapp-box">
                <img src={Whtasapp} alt="icon" className="whatsapp-icon-sz"/>
            </div>
        </>
    )
}


const ChatBox = () => {
    // const [popupShow, setPopupShow] = useState(false);
    return (
        <>
           <div className="chatbot-box">
                <img src={chatbot} alt="icon" className="chatbot-icon"/>
            </div>
            {/* <PopUpBox show={popupShow} onHide={() => setPopupShow(false)} /> */}
             
        </>
    )
}


// const PopUpBox = () => {
//     return (
//         <>
//          <div className="footer-chat-box">
//             <div className="chatbot-header">
//               <h6>Want to know something? - Let's chat</h6>
//               <p><i className="bi bi-x-circle text-white fs-4"></i></p>
//             </div>
//             </div>   
//         </>
//     );
//   }