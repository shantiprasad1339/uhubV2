import React from "react";
import { NavLink } from "react-router-dom";
import "./CollegeDetails.css";
import Navbar from "../NavBar/Navbar";
import top_Img from "../../../public/Images/Rectangle 194.png";
import CardImg from "../../../public/Images/cardImg5.png";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FavoriteIcon from "@mui/icons-material/Favorite";
import download from "../../../public/Images/button.jpg";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import CollegeLocation from "../college-location/CollegeLocation";
import EnrollBox from "../enrollbox/EnrollBox";
import Highlights from "../highlights/Highlights";
import Footer from "../footer/footer";
import Card from "../card/card/card";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import verifiedButton from "../../../public/Images/Verified Account.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Course from "../courseData/course";
import Content from "../content/content";
import Placement from "../placement/placement";
import CutOff from "../cutOff/CutOff";
import Infra from "../infastructer/Infastructer";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function CollegeDetails() {
  return (
    <>
      <Navbar />
      <TopImgUniversity />

      <UniversityDetailsButton />
      <UnviversityTable />
      <CollegeLocation />
      <EnrollBox />
      <Highlights />
      <RelatedNewsCarousel />
      <Footer />
    </>
  );
}

export default CollegeDetails;

function TopImgUniversity() {
  return (
    <>
      <div className="CollegeDetails">
        <div className="topImg">
          <img src={top_Img} alt="" />
        </div>
        <div className="UniversityBanner">
          <div className="UniversityLogo">
            <div className="UniLogo">
              <img src={CardImg} alt="" />
            </div>
          </div>
          <div className="UniversityAddressDetails">
            {/* <div className="TopAddress">
              
              
            </div>
            <div className="UniversityRating">
              
            </div> */}

            <div className="uniTopAdress">
              <h3>UNIVERSITY OF BIRMINGHAM</h3>
            </div>
            <div className="unibottomadd">
              <div className="universityLocation">
                <h6>
                  {" "}
                  <LocationOnIcon /> Birmingham, England
                </h6>
              </div>
              <div className="ratingCount">
                <h4>4.5</h4>
              </div>
              <div className="RatingStar">
                <StarOutlineIcon />
                <StarOutlineIcon />
                <StarOutlineIcon />
                <StarOutlineIcon />
                <StarOutlineIcon />
              </div>
              <div className="ratingNumber d-flex gap-2">
                <h6> (72)</h6>
                <FavoriteBorderIcon />
              </div>
              <div className="brochureButton">
                <div className="banner-btn">
                  <button className="banner-btn-1">
                    Will you Get in &nbsp;&nbsp;&nbsp;
                    <CloudDownloadIcon /> Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { TopImgUniversity };
function UnviversityTable() {
  return (
    <>
      <div className="CollegeHero">
        <div className="collegeSummery">
          <div className="summeryHeading">
            <h4>
              Argha DAs{" "}
              <img src={verifiedButton} alt="" style={{ width: "35px" }} />{" "}
            </h4>
            <h6>Updated on Apr 20, 2022</h6>
          </div>
          <div className="summery_ptag">
            <p>
              What's new at ISBR Bangalore? The PGDM batch of 2020-22 recorded a
              placement rate of 96% during ISBR Bangalore placements 2022.
              Further, the highest and average packages offered during ISBR
              Bangalore placements 2021-22 were INR 11 LPA and INR 7.5 LPA,
              respectively.
            </p>
            <p className="secondPtag">
              Jun 3, 2022: List of top 100 B-schools in Indian accepting GMAT
              scores Read More
            </p>
            <p>
              International School of Business and Research, popularly known as
              ISBR Bangalore, is situated in Electronic City, Bangalore which
              was established under the aegis of Bangalore Educational Trust
              (BET). ISBR is one of the top Business Schools in India with
              international education standards. It is approved by the All India
              Council for Technical Education (AICTE) and the Ministry of HRD,
              Government of India and is accredited by the National Board of
              Accreditation (NBA). In 2020, it was ranked 57 for MBA by Times.
              The School has been ranked as Platinum Institute by the AICTE–CII
              Survey for five years in a row (from 2016 to 2020) which places
              ISBR among the top three per cent of Indian Management Colleges.
              At present, the School offers programmes specialised in Business
              Management. Apart from these full-time programmes, it also offers
              an Executive PGDM programme in a weekend mode. These courses are
              offered under five constituent schools, centres or colleges,
              namely ISBR College, ISBR Law College, ISBR Research Centre,
              Centre for Executive Education and ISBR Business School. ISBR has
              more than 40 permanent and visiting faculty members. The School
              has an ISBR Incubation Centre to develop entrepreneurial and
              employable skills in the students. The centre helps students to
              promote their business ideas with support facilities like project
              reports, idea guidance, project implementation and more. Not only
              this, but the College also provides a real learning experience to
              its students by engaging with top industry practitioners in the
              ranks of CEO/ VP/ MD/ Director/ Founder to teach courses across
              diversified functional areas.
            </p>
          </div>
        </div>
        <div className="MainRightNews">
          <div className="rightNews">
            <div className="rightNewsHeading">
              <p>Taking an Exam? Selecting a College?</p>
            </div>
            <div className="rightNewsPtag">
              <p>
                Find insights & recommendations on colleges and exams that you
                won't find anywhere else
              </p>
            </div>

            <div className="rightNewsButton">
              <button>Sing Up & Get Started</button>
            </div>
            <div className="afterButtondetails">
              <h6>---On UKHUB, get access to---</h6>
              <div className="collegeExams">
                <div className="college">70K college</div> |
                <div className="exam">883 Exams</div> |
                <div className="reviews">298 reviews</div> |
                <div className="answers">750 Answers</div>
              </div>
            </div>
          </div>
          <div className="SndRightNews">
            <div className="SecndRightNewsbutton">
              <button>B. Com Application open</button>
            </div>
            <div className="SecndRightNewsptag">
              <h5>UNIVERSITY OF BIRMINGHAM</h5>
              <p>
                Highest CTC 24.28 LPA | Ranked 7th in UK by Education World 2021
              </p>
              <p>
                Powerd by University of Hull{" "}
                <button className="ApplyButton">Apply</button>
              </p>
              <div className="line"></div>
              <p>
                Highest CTC 24.28 LPA | Ranked 7th in UK by Education World 2021
              </p>
              <p>
                Powerd by University of Hull{" "}
                <button className="ApplyButton">Apply</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { UnviversityTable };

function UniversityDetailsButton() {
  return (
    <>
      <div className="detailsButton">
        <div className="buttons">
        <NavLink to="/CollegeDetails">
          <button>Overview</button>
          </NavLink>

          <NavLink to="/Course">
            <button>Course</button>
          </NavLink>
          <NavLink to="/Content">
            <button>Addmision</button>
          </NavLink>
          <NavLink to="/Placement">
            <button>Placements</button>
          </NavLink>
          <NavLink to="/CutOff">
            <button>Cut-Offs</button>
          </NavLink>
          <NavLink to="/Infra">
            <button>Infrastructure</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export { UniversityDetailsButton };

function RelatedNewsCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="relatedNews">
        <div className="relatedNewsHeading">
          <h1>Related News</h1>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
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
export { RelatedNewsCarousel };
