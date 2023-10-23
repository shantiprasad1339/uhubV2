import React, { useState, useEffect } from "react";
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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Landing() {
  const [bannerImg, setBannerImg] = useState([]);
  const [newsDataArray, setnewsData] = useState([]);
  const [universties, setUniversities] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  
  const toggleCards = () => {
    setShowAllCards(!showAllCards);
  };
  const toggleNews = () => {
    setShowAllNews(!showAllNews);
  };
  useEffect(() => {
    BannerGet();
    NewsGet();
    universtyGet()
  }, []);
  function BannerGet() {
    return axios
      .get("https://hammerhead-app-p3s8r.ondigitalocean.app/banner/get")
      .then((res) => {
        // console.log( res.data.data);
        setBannerImg(res.data.data);
      });
  }
  function universtyGet() {
    return axios
      .get("https://hammerhead-app-p3s8r.ondigitalocean.app/university/gets")
      .then((res) => {
        console.log(res.data.data);
        setUniversities(res.data.data);
      });
  }
  function NewsGet() {
    return axios
      .get("https://hammerhead-app-p3s8r.ondigitalocean.app/vlog/get")
      .then((res) => {
        // console.log( res.data.data);
        setnewsData(res.data.data[0]);
      });
  }
  const url = "https://hammerhead-app-p3s8r.ondigitalocean.app/";
  // console.log(bannerImg);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="heroSaction">
        <div className="banner">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {bannerImg.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <img src={url + item.image} alt="" />{" "}
                  </div>
                </>
              );
            })}
          </Carousel>
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
          {universties
            .slice(0, showAllCards ? undefined : 6)
            .map((card, index) => (
              <NavLink to="/CollegeDetails" key={index}>
                <UniCard img={url+card.image} text={card.name} address={card.shortaddress} description={card.Description}/>
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
          {newsDataArray
            .slice(0, showAllNews ? undefined : 5)
            .map((news, index) => {
              // console.log(news);
              function truncateText(text, maxLength) {
                if (text.length <= maxLength) {
                  return text;
                } else {
                  // Use slice to get the first 'maxLength' words and add "..."
                  const truncatedText =
                    text.split(" ").slice(0, 25).join(" ") + "...";
                  return truncatedText;
                }
              }
              return (
                <Newscard
                  image={url + news.image}
                  heading={news.Description}
                  summary={truncateText(news.SecondDescription, 50)} // Adjust '50' to your desired word limit
                  date={news.date}
                  name={news.who_upload}
                />
              );
            })}
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
  };
  return (
    <>
      {/* <div className="unicard">
        <div className="UniversityCard">
          <div className="universityimg">
            <img src={props.img} alt="" />
            <h4>{props.text}</h4>
            <p>6077 College</p>
          </div>
        </div>
      </div> */}
      {/* <div className="unicard">
        <div className="UniversityCard">
        </div>
      </div> */}
      <div className="unicard">
        <div class="maincontainer">
          <div class="thecard">
            <div class="thefront">
              <img src={props.img} alt="" />
              <h4>{props.text}</h4>
              <p>6077 College</p>
            </div>
            <div class="theback">
              <p className="theback-p1">Description</p>
              <p className="theback-p2">
              {props.description}
              </p>
            </div>
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
          <img src={props.image} alt="Image" />
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