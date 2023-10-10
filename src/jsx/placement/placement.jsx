import React from "react";
import { Box1 } from "../content/content";
import { Box2 } from "../content/content";
import Card from "../card2/card2";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import EnrollBox from "../Enrollbox/Enrollbox";
import NavBar from '../NavBar/Navbar'
import { TopImgUniversity } from "../collegeDetails/CollegeDetails";
import { UniversityDetailsButton } from "../collegeDetails/CollegeDetails";
function Placement() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };
  return (
    <>
    <NavBar/>
    <TopImgUniversity />

      <UniversityDetailsButton />
      <div className="placement-container">
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

        <EnrollBox />

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

export default Placement;
