import React from "react";
import "./CutOff.css";
import { Box1 } from "../content/content";
import EnrollBox from "../Enrollbox/Enrollbox";
import Card from "../card2/card2";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import NavBar from '../NavBar/Navbar'
import { TopImgUniversity } from "../collegeDetails/CollegeDetails";
import { UniversityDetailsButton } from "../collegeDetails/CollegeDetails";
function CutOff() {
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
      <div className="cutOf-container">
        <div className="cutOf-table">
          {/* <div className="cutOf-head"> */}
            <p>
              NEET UG Cutoffs 2019 for Datta Meghe Institute of Medical Sciences
            </p>
          {/* </div> */}

          <table className="table-of-content">
            <thead className="cutOf-thead">
              <tr>
                <th>Course Name</th>
                <th>Category</th>
                <th>Round</th>
                <th>Closing Percentile</th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr className="cutOf-tcontent">
                <td>
                  NOT FOUND
                </td>
                <td>
                  NOT FOUND
                </td>
                <td>
                  NOT FOUND
                </td>
                <td>
                  NOT FOUND
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cutOf-btn">
                <button>See More</button>
            </div>
        </div>

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

export default CutOff;
