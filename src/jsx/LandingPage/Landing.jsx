import React, { useState } from "react";
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
function Landing() {
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
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    {
      image: newsimage,
      heading: "JNU CUET UG Application Correction Window to Close on May 31",
      summary:
        "In order to make correction in the JNU CUET UG application form, candidates need to visit the official website of CUET:",
      date: "Argha Das May 27, 2022",
    },
    
  ];

  const toggleCards = () => {
    setShowAllCards(!showAllCards);
  };

  const toggleNews = () => {
    setShowAllNews(!showAllNews);
  };
  return (
    <>
      <div className="heroSaction">
        <div className="banner">
          <img src={banner} alt="" />
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
            .slice(0, showAllCards ? undefined : 8)
            .map((card, index) => (
              <NavLink to="/CollegeDetails" key={index}>
                <UniCard img={card.img} text={card.text} />
              </NavLink>
            ))}
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
          <NavLink to="/AllNewPages" key={index}>
            <Newscard
              image={news.image}
              heading={news.heading}
              summary={news.summary}
              date={news.date}
            />
          </NavLink>
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
            <p>london</p>
          </div>
          <div className="cardStar">
            <StarIcon />
            <p>rating</p>
          </div>
        </div>
      </div>
    </>
  );
}
export { Card };

function UniCard(props) {
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
          <h6>{props.heading}</h6>
          <p>{props.summerry}</p>
          <div className="newsDate">
            <h4>{props.date}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
export { Newscard };
