import React from "react";
import { Box1 } from "../content/content";
import "./Infastructer.css";
import img1 from "../../../public/Images/cardImg2.png";
import img2 from "../../../public/Images/cardImg3.png";
import img3 from "../../../public/Images/cardImg4.png";
import img4 from "../../../public/Images/cardImg5.png";
import img5 from "../../../public/Images/Caduceus.png"
import Cardimg from "../../../public/Images/cardImg.jpeg";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Card from "../card2/card2";
import NavBar from '../NavBar/Navbar'
import { TopImgUniversity } from "../collegeDetails/CollegeDetails";
import { UniversityDetailsButton } from "../collegeDetails/CollegeDetails";

function Infastructer() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 370 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 370, min: 0 },
      items: 1,
    },
  };
  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
    <NavBar/>
    <TopImgUniversity />

      <UniversityDetailsButton />
      <div className="info-container">
        <Box1
          heading={"Admissions at IIT Bombay"}
          content=" IIT Bombay begins the admission process for various courses on
          different dates. The official schedule for admissions in B.Tech,
          M.Tech, B.Des, M.Des etc will be released on the official website
          of IIT Bombay. The premier institute has a specific admission
          portal where students can access all details about the admission
          process, entrance exams etc. The candidates must satisfy the
          eligibility criteria specified by IIT Bombay to get admission in
          various courses. All details about IIT Bombay admission such as
          eligibility criteria, entrance exams and admission process can be
          checked below."
        />

        <div className="info-img">
          <div className="info-heading">
            <p>Datta Meghe Institute of Medical Sciences Facilities</p>
          </div>
          <div className="info-img-section">
            <div className="info-image">
              <img src={img1} alt="" />
            </div>
            <div className="info-image">
              <img src={img2} alt="" />
            </div>
            <div className="info-image">
              <img src={img3} alt="" />
            </div>
            <div className="info-image">
              <img src={img4} alt="" />
            </div>
            <div className="info-image">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
        <div className="info-video">
          <p>Video and images About Campus</p>

          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive2}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
          >
            <img src={Cardimg} alt="" />
            <img src={Cardimg} alt="" />
            <img src={Cardimg} alt="" />
            <img src={Cardimg} alt="" />
            <img src={Cardimg} alt="" />
            <img src={Cardimg} alt="" />
            <img src={Cardimg} alt="" />
            <img src={Cardimg} alt="" />
          </Carousel>
        </div>
        <div className="info-club">
          <p className="info-head-p">Students Activities & Clubs</p>
          <div className="info-content">
            <p className="info-content-p">
              Placement Cell Club - <br />
              Health Club - <br />
              Quiz Club -
            </p>
            <p className="info-content-p">
              Music Club - <br />
              Sports Club - <br />
              Art & Craft Club -
            </p>
          </div>
            <div className="info-btn">
                <button>See More</button>
            </div>
        </div>

        <div className="newsHead">
            <p>Related News</p>
         </div>
       
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            // removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            
          </Carousel>
        


      </div>
    </>
  );
}

export default Infastructer;
