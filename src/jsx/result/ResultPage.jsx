import React, { useState, useEffect } from "react";
import "./ResultPage.css";
import { NavLink } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import img3 from "../../../public/Images/cardImg.jpeg";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Card from "../card2/card2";
import Navbar from "../NavBar/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../footer/footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setInstitute, setDegree, setHostel } from "../Redux/PostSlice";

function ResultPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [institute, setInstitute] = useState([]);
  const [degree, setDgree] = useState([]);
  const [hostel, setHostel] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [reduxValueGet, setReduxValue] = useState();

  function filterGet() {
    return axios
      .get(
        "https://hammerhead-app-p3s8r.ondigitalocean.app/university/search/filter"
      )
      .then((res) => {
        // console.log( res.data.data[0]);
        setInstitute(res.data.data[0].institute_type);
        setDgree(res.data.data[1].degree.name);
        setHostel(res.data.data[2].hostel);
      });
  }
  function UniversityGet() {
    return axios
      .get(
         'https://hammerhead-app-p3s8r.ondigitalocean.app/university/search?search= + "strValue"'
      )
      .then((res) => {
        console.log(res);
        // setFiltered(res);
      });
  }
  const reduxValue = useSelector((state) => state);

  const strValue = `${reduxValue.filters.degree} ${reduxValue.filters.hostel && reduxValue.filters.hostel } ${reduxValue.filters.institute}`;
  console.log(strValue);

  useEffect(() => {
    filterGet();
    UniversityGet();
  }, [strValue]);

  return (
    <>
      <Navbar />
      <ResultTopBox />
      <ResultTopHeading />
      <div className="filter-content-box">
        <div>
          <p onClick={handleShow} className="hideBox2">
            <MenuIcon />
          </p>
          <ResultFilter show={show} type={institute} name={"Institue Type"} />
          <ResultFilter2 show={show} type={degree} name={"Degree"} />
          <ResultFilter3 show={show} type={hostel} name={"Hostel"} />
        </div>

        {!show && (
          <div className="result-filter-side-box">
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
              <h2 style={{ paddingTop: "50px" }}>
                Commerce and Banking Related News
              </h2>
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
          </div>
        )}
      </div>
      <Footer />
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
          <p className="Search-filter ">
            Search Filter <SearchRoundedIcon />
          </p>
        </div>
      </div>
    </>
  );
}

function ResultFilter({ type, show, name }) {
  const selectedInstitute = useSelector((state) => state.filters.institute);
  const dispatch = useDispatch();
  return (
    <>
      {/* {props.show && <><p style={{ fontSize: "22px" }}>DEGEREE</p>
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
      </div></>} */}
      <div className="hideBox">
        <p style={{ fontSize: "22px" }}>{name}</p>
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
            {type &&
              type.map((item, index) => {
                return (
                  <div key={index}>
                    <input
                      type="radio"
                      name="radioGroup"
                      value={item.name}
                      checked={selectedInstitute === item.name}
                      onChange={() => dispatch(setInstitute(item.name))}
                    />
                    <label htmlFor="" className="result-checkbox-label">
                      {item.name}
                    </label>
                  </div>
                );
              })}
          </fom>
        </div>
      </div>
    </>
  );
}

function ResultFilter2({ type, show, name }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = () => {
    const selectedRadioValue = selectedValue;
  };
  const selectedDegree = useSelector((state) => state.filters.institute);
  const dispatch = useDispatch();
  return (
    <>
      <div className="hideBox">
        <p style={{ fontSize: "22px" }}>{name}</p>
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
            {type &&
              type.map((item, index) => {
                return (
                  <div key={index}>
                    <div style={{ marginTop: "10px" }}>
                      <input
                        type="radio"
                        name="radioGroup"
                        value={item.name}
                        onChange={() => dispatch(setDegree(item))}
                      />
                      <label htmlFor="" className="result-checkbox-label">
                        {item}
                      </label>
                    </div>
                  </div>
                );
              })}
          </fom>
        </div>
      </div>
    </>
  );
}
function ResultFilter3({ type, show, name }) {
  const [selectHostel, setSelecthostel] = useState("");
  const handleRadioChange = () => {
    const selectedRadioValue = selectHostel;
  };
  const selectedDegree = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div className="hideBox">
        <p style={{ fontSize: "22px" }}>{name}</p>
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
            {type &&
              type.map((item, index) => {
                return (
                  <div key={index}>
                    <input
                      type="radio"
                      name="radioGroup"
                      value={item.name}
                      onChange={() => dispatch(setHostel(item.name))}
                    />
                    <label htmlFor="" className="result-checkbox-label">
                      {item.name}
                    </label>
                  </div>
                );
              })}
            <input
              type="radio"
              name="radioGroup"
              value="Boys"
              onChange={() => dispatch(setHostel("Boys"))}
            />
            <label htmlFor="" className="result-checkbox-label">
              Boys
            </label>

            <br />
            <input
              type="radio"
              name="radioGroup"
              value="co-ed  "
              onChange={() => dispatch(setHostel("Co-Ed"))}
            />
            <label htmlFor="" className="result-checkbox-label">
              Co-Ed
            </label>
          </fom>
        </div>
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
