import React from "react";
import "./card2.css";
import Cardimg from "../../../public/Images/cardImg.jpeg";

function Card() {
  return (
    <>
    <div style={{display:'flex'}}>
      <Card1
        cardHead={
          "JNU CUET UG Application Correction..."
        }
        Cardimg={Cardimg}
        cardContent="In order to make correction in the JNU CUET UG application form..."
            cardDate={'May 27,2002'}
      />
      
      </div>
    </>
  );
}

export default Card;

function Card1(props) {
  return (
    <>
      <div className="card2">
        <div className="card2-img">
          <img src={props.Cardimg} alt="" />
        </div>
        <div className="card2-head">
          <p>{props.cardHead}</p>
        </div>
        <div className="card2-content">
          <p>{props.cardContent}</p>
        </div>
        <div className="card2-date">
          <p> {props.cardDate} </p>
        </div>
      </div>
    </>
  );
}

export { Card1 };
