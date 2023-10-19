import React, { useState,useEffect } from "react";
import "./Landing.css";
import Navbar from "../NavBar/Navbar";
import { NavLink } from "react-router-dom";

import banner from "../../../public/Images/BannerImage.png";
import logo from "../../../public/Images/cardLogo.png";
import logo2 from "../../../public/Images/cardImg2.png";
import logo3 from "../../../public/Images/cardImg3.png";
import logo4 from "../../../public/Images/cardImg4.png";
import logo5 from "../../../public/Images/cardImg5.png";
import heroImage from "../../../public/Images/heroImage (2).png";
import Maintenance from "../../../public/Images/Maintenance.png";
// import { AiTwotoneStar } from "react-icons/ai";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import newsimage from "../../../public/Images/newsImage.png";
import CollegeDetails from "../collegeDetails/CollegeDetails";
import AllNewPages from "../AllNewPages/AllNewPages";
import axios from "axios";
import ReactFlipCard from 'reactjs-flip-card'

function Landing() {
  const [bannerImg,setBannerImg] = useState([])
  const [showAllCards, setShowAllCards] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);

  const cardData = [
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
    { img: Maintenance, text: "Engineering" },
  ];
  const newsData = [
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "May 27, 2022",
      name: "Argha Das",
    },
  ];

  const toggleCards = () => {
    setShowAllCards(!showAllCards);
  };

  const toggleNews = () => {
    setShowAllNews(!showAllNews);
  };
  useEffect(()=>{
    BannerGet()
  })
  
  function BannerGet(){
    return(

      axios.get('https://hammerhead-app-p3s8r.ondigitalocean.app/banner/get').then((res)=>{
        console.log(url + res.data.data[1].image);
      })
     
    )
  }
const url = 'https://hammerhead-app-p3s8r.ondigitalocean.app/';
  return (
    <>
      <div className="heroSaction">
        <div className="banner">
          {/* <img src={banner} alt="" /> */}
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    
    {bannerImg.map((item,index)=>{
      <div className="carousel-item">
      <img className="d-block w-100" src={url + item.image} alt="Third slide"/>
    </div>
    })}
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
        <div className="cardArea">
          <Card image={logo} university={"University Of oxford"} />
          <Card image={logo2} university={"University of Hertfordshire"} />
          <Card image={logo3} university={"University of West London"} />
          <Card image={logo4} university={"University of Hull"} />
          <Card image={logo5} university={"University of Birmingham"} />
        </div>
        <div className="heroBox">
          <div className="heroImg">
            <p>#UniversitiesHub</p>
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
      <div className="heroUniversities">
        <div className="heroText">
          <h4>Explore 35000+ Collages, 200+ Exams & More</h4>
        </div>
        {/* <div className="heroButtonss">
          <button>Collage</button>
          <button>Exams</button>
          <button>Course</button>
        </div> */}

        <div className="UniversityCards">
          {cardData
            .slice(0, showAllCards ? undefined : 5)
            .map((card, index) => (
              <NavLink to="/CollegeDetails" key={index}>
                <UniCard img={card.img} text={card.text} />
              </NavLink>
            ))}

{/* <UniCard img={Maintenance} text={'Engineering'} /> */}
        </div>

        <div className="seeMoreBtn">
          <button className="btn btn-primary mb-4" onClick={toggleCards}>
            {showAllCards ? "See Less" : "See More"}
          </button>
        </div>
      </div>
      <div className="latestNews">
        <div className="latesText">
          <h4>Latest News & Papers</h4>
        </div>
        <div className="NewsCard">
          {newsData.slice(0, showAllNews ? undefined : 5).map((news, index) => (
            <Newscard
              image={news.image}
              heading={news.heading}
              summary={news.summary}
              date={news.date}
              name={news.name}
            />
          ))}
        </div>
        <div className="viewAllBtn">
          <button onClick={toggleNews}>
            {showAllNews ? "View Less Updates" : "View All Updates"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;

function Card(props) {
  const { image, university } = props;
  return (
    <>
      <div className="card ">
        <div className="cardImg">
          <img src={image} alt="" />
        </div>
        <div className="cardText">
          <h4>{university}</h4>
        </div>
        <div className="cardIcons">
          <div className="cardLocation">
            <LocationOnIcon />
            <p>London</p>
          </div>
          <div className="cardStar">
            <StarIcon />
            <p>Rating</p>
          </div>
        </div>
      </div>
    </>
  );
}
export { Card };

function UniCard(props) {
  const styles = {
    card: {},
}
  return (
    <>
     
     <div className="unicard">
            <div className="UniversityCard">
              <div className="universityimg">
                <img src={props.img} alt="" />
                <h4>{props.text}</h4>
                <p>6077 College</p>
              </div>
            </div>
          </div>
           <div className="unicard">
            <div className="UniversityCard">
              <div className="universityimg">
                <img src={props.img} alt="" />
                <h4>{props.text}</h4>
                <p>6077 College</p>
              </div>
            </div>
          </div>
      
      {/* <div className="unicard">
        <div className="UniversityCard">
          <div className="the-card">
            
          </div>

        </div>
      </div> */}
    </>
  );
}
export { UniCard };

function Newscard(props) {
  return (
    <>
      <div className="news">
        <div className="newsImg">
          <img src={props.image} alt="" />
        </div>
        <div className="headingNews">
          <h6 className="headingNews-h">{props.heading}</h6>
          <p className="headingNews-p">{props.summary}</p>
          <div className="newsDate">
            <p className="newsDate-name">{props.name}</p>
            <p className="newsDate-date">{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export { Newscard };
