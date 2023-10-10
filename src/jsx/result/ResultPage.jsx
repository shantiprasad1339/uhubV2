import React, { useState } from "react";
import "./ResultPage.css";
import { NavLink } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import img3 from "../../../public/Images/cardImg.jpeg";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Card from "../card2/card2";
import Navbar from '../NavBar/Navbar'
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../footer/footer'

function ResultPage() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  
   return (
    <>
 <Navbar/>
      <ResultTopBox />
      <ResultTopHeading />
      <div className="filter-content-box">
        <div>
          <p onClick={handleShow} className="hideBox2"><MenuIcon/></p>
          <ResultFilter show={show}/>
          <ResultFilter show={show}/>
          <ResultFilter show={show}/>
          <ResultFilter show={show}/>
          <ResultFilter show={show}/>
          <ResultFilter show={show}/>
        </div>

        {!show && <div className="result-filter-side-box">
          <ResultSideBox />
          <ResultSideBox />
          <ResultSideBox />
          <ResultDownBox />
          <ResultSideBox />
          <ResultSideBox />
          <ResultSideBox />
          <ResultDownBox />
          <ResultSideBox />
          <ResultSideBox />
          <ResultSideBox />
          <ResultSideBox />
          <ResultSideBox />
          <ResultSideBox />
          <div>
            <h2 style={{paddingTop:'50px'}}>Commerce and Banking Related News</h2>
            <div className="result-filter-card-box">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="result-filter-card-box">
            <Card />
            <Card />
            <Card />
          </div>
        </div>}
      </div> 
      <Footer/>
    </>
  );
}

export default ResultPage;

function ResultTopBox() {
  return (
    <>
      <div className="topBox">
        <p className="box-Heading-1">Top B.Com Colleges in UK</p>
        <p className="box-Heading-2">List Of 4191 B.Com Colleges in UK</p>
        <p className="box-content">
          One of the many popular choices among commerce students is Bachelor of
          Commerce or B.Com. It is because B.Com comprises subjects that will
          help in gaining knowledge related to commerce and entrepreneurship. As
          an undergraduate degree in commerce, the basic focus is to build the
          accounting and finance concept. However, there are many areas of
          specialization that a student can exercise choices such as Economics,
          Banking, Marketing, Law, Tax, and so on. This article will mainly
          focus on top B.Com colleges in India including their rankings,
          admission process, placements, etc.
        </p>
        <NavLink to="/" className="result-NavLink">
          <div className="result-btn">Read More</div>
        </NavLink>
      </div>
    </>
  );
}

function ResultTopHeading() {
  return (
    <>
      <div className="result-top-filters">
        <p className="result-degree"></p>
        <div className="filterNames">
        <p className="result-applied">Applied Filter</p>
        <p className="result-b-com">
          B.Com. <ClearRoundedIcon />
        </p>
        <p className="result-b-com">
          M.Com. <ClearRoundedIcon />
        </p>
        <p className="Search-filter " >
          Search Filter <SearchRoundedIcon />
        </p>
        </div>
      </div>
    </>
  );
}

function ResultFilter(props) {
  return (
    <>
      {props.show && <><p style={{ fontSize: "22px" }}>DEGEREE</p>
      <div className="ResultFilter-box">
        <fom action="">
          <input
            type="search"
            id="gsearch"
            name="gsearch"
            placeholder=" Search"
            className="result-search"
          />
          <br />
          <RadioBtn name={"B.A"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.S.C"} />
          <RadioBtn name={"B.C.A"} />
          <RadioBtn name={"B.Tech"} />
          <RadioBtn name={"B.Ed"} />
          <RadioBtn name={"M.A"} />
          <RadioBtn name={"M.Com"} />
          <RadioBtn name={"M.S.C"} />
          <RadioBtn name={"M.C.A"} />
          <RadioBtn name={"M.Tech"} />
          <RadioBtn name={"M.Ed"} />
          <RadioBtn name={"M.B.B.S"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.com"} />
        </fom>
      </div></>}
      <div className="hideBox">
      <p style={{ fontSize: "22px" }}>DEGEREE</p>
      <div className="ResultFilter-box">
        <fom action="">
          <input
            type="search"
            id="gsearch"
            name="gsearch"
            placeholder=" Search"
            className="result-search"
          />
          <br />
          <RadioBtn name={"B.A"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.S.C"} />
          <RadioBtn name={"B.C.A"} />
          <RadioBtn name={"B.Tech"} />
          <RadioBtn name={"B.Ed"} />
          <RadioBtn name={"M.A"} />
          <RadioBtn name={"M.Com"} />
          <RadioBtn name={"M.S.C"} />
          <RadioBtn name={"M.C.A"} />
          <RadioBtn name={"M.Tech"} />
          <RadioBtn name={"M.Ed"} />
          <RadioBtn name={"M.B.B.S"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.com"} />
          <RadioBtn name={"B.com"} />
        </fom>
      </div>
      </div>
    </>
  );
}
function RadioBtn(props) {
  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <input
          type="checkbox"
          id="course"
          name="vehicle1"
          value="Bike"
          className="result-checkbox"
        />
        <label htmlFor="" className="result-checkbox-label">
          {props.name}
        </label>
      </div>
    </>
  );
}

function ResultSideBox() {
  return (
    <>
      <div className="side-result-box">
        <div style={{ display: "flex" }}>
          <div className="side-result-box-img">
            <img src={img3} alt="" />
          </div>
          <div className="side-result-box-content">
            <p className="side-result-box-content-p1">UNIVERSITY OF HALL</p>
            <address>Approved by: NAAC Type: Private</address>
            <p className="side-result-box-content-p2">
              SRCC Hull Fee Structure
            </p>
          </div>
        </div>
        <div className="side-result-box-button">
          <button className="side-result-box-button-1">Shortlist</button> <br />
          <button className="side-result-box-button-2">
            About college
          </button>{" "}
          <br />
          <NavLink to="/" className="side-result-box-NavLink">
            <div className="result-btn">
              {" "}
              <PictureAsPdfIcon /> Download Brochure
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

function ResultDownBox() {
  return (
    <>
      <div className="result-down-box">
        <h2>Quick Filiter</h2>
        <div className="result-quick-filter">
          <div>
            <p className="result-down-box-p1">Commerse(4082)</p>
          </div>
          <div>
            <p className="result-down-box-p2">Computer Application(592)</p>
          </div>
          <div>
            <p className="result-down-box-p3">Accounting(458)</p>
          </div>
        </div>
        <div className="result-down-box-bottom-line"> </div>
      </div>
    </>
  );
}
