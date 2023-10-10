import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import twitter from "../../assets/images/twitter.png";
import pintrest from "../../assets/images/pintrest.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import snapchat from "../../assets/images/snapchat.png";
import whatsapp from "../../assets/images/whatsapp.png";
import "./media.css";

const responsive = {
  0: { items: 3 },
  568: { items: 3 },
  768: { items: 4 },
  1024: { items: 5 },
  1500: { items: 5 },
};
const items = [
    
  <div className="social-icon-box">
    <img src={twitter} alt="Social Media" className="social-icon" />
  </div>,
  <div className="social-icon-box">
    <img src={pintrest} alt="Social Media" className="social-icon" />
  </div>,
  <div className="social-icon-box">
    <img src={facebook} alt="Social Media" className="social-icon" />
  </div>,
  <div className="social-icon-box">
    <img src={instagram} alt="Social Media" className="social-icon" />
  </div>,
  <div className="social-icon-box">
    <img src={snapchat} alt="Social Media" className="social-icon" />
  </div>,
  <div className="social-icon-box">
    <img src={whatsapp} alt="Social Media" className="social-icon" />
  </div>,
 
];

const Media = () => {
  return (
    <>
      <div className="container">
        <h2 className="heading-text-fnt mt-3 text-center mb-3">
          Uk Universities Hub in Media
        </h2>
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
      </div>
    </>
  );
};

export default Media;
