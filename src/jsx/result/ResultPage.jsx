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
        ` https://hammerhead-app-p3s8r.ondigitalocean.app/university/search?search=${strValue}`
      )
      .then((res) => {
        console.log(res);
        setFiltered(res.data.data);
      });
  }
  const reduxValue = useSelector((state) => state);

  // const strValue = `${reduxValue.filters.degree} ${reduxValue.filters.hostel && reduxValue.filters.hostel } ${reduxValue.filters.institute}`;
  const filters = reduxValue.filters;

  const filteredValues = [
    filters.degree,
    filters.hostel && filters.hostel,
    filters.institute,
  ].filter(Boolean);

  const strValue = filteredValues.join(",");
  const NewArray = filteredValues.join(" ");
  const newArray = [];
  newArray.push(NewArray);
  


  useEffect(() => {
    filterGet();
    UniversityGet();
    
  }, [strValue]);
  console.log(newArray);
  const url = "https://hammerhead-app-p3s8r.ondigitalocean.app/";

  return (
    <>
      <Navbar />
      <ResultTopBox />
      <ResultTopHeading filteredArray={newArray} />
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
            {filtered &&
              filtered.map((item, index) => {
                return (
                  <>
                    <ResultSideBox
                      image={url + item.image}
                      title={item.name}
                      secondDesc={item.SecondDescription}
                      thirdDesc={item.ThirdDescription}
                    />
                  </>
                );
              })}
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

function ResultTopHeading(props) {
  console.log(props.filteredArray);

  return (
    <>
      <div className="result-top-filters">
        <p className="result-degree"></p>
        <div className="filterNames">
          <p className="result-applied">Applied Filter</p>
          {props.filteredArray &&
            props.filteredArray.map((item, index) => {
              console.log(item);
              return (
                <>
                  <p className="result-b-com" key={index}>
                    {item} <ClearRoundedIcon />
                  </p>
                 
                </>
              );
            })}
            
                 
        </div>
      </div>
    </>
  );
}

function ResultFilter({ type, show, name }) {
  const selectedInstitute = useSelector((state) => state.filters.institute);
  const dispatch = useDispatch();

  const [localSelected, setLocalSelected] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (localSelected.includes(value)) {
      const updatedLocalSelected = localSelected.filter(
        (item) => item !== value
      );
      setLocalSelected(updatedLocalSelected);
    } else {
      const updatedLocalSelected = [...localSelected, value];
      setLocalSelected(updatedLocalSelected);
    }
  };

  const applyChanges = () => {
    dispatch(setInstitute(localSelected));
  };

  return (
    <>
      <div className="hideBox">
        <p style={{ fontSize: "22px" }}>{name}</p>
        <div className="ResultFilter-box">
          <form action="">
            <br />
            {type &&
              type.map((item, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="checkboxGroup"
                    value={item.name}
                    checked={localSelected.includes(item.name)}
                    onChange={handleCheckboxChange}
                    className="checkboxSize"
                  />
                  <label
                    htmlFor={item.name}
                    className="result-checkbox-label"
                    style={{ textTransform: "uppercase" }}
                  >
                    {item.name}
                  </label>
                </div>
              ))}
            <div>
              <input
                type="checkbox"
                name="checkboxGroup"
                value="Private"
                checked={localSelected.includes("Private")}
                onChange={handleCheckboxChange}
                className="checkboxSize"
              />
              <label
                htmlFor={"Private"}
                className="result-checkbox-label"
                style={{ textTransform: "uppercase" }}
              >
                Private
              </label>
            </div>

            <input
              type="checkbox"
              name="checkboxGroup"
              value={"Semi Govt."}
              checked={localSelected.includes("Semi Govt.")}
              onChange={handleCheckboxChange}
              className="checkboxSize"
            />
            <label
              htmlFor={"Semi Govt."}
              className="result-checkbox-label"
              style={{ textTransform: "uppercase" }}
            >
              {"Semi Govt."}
            </label>
          </form>
          <button onClick={applyChanges} className="ApplyButton">
            Apply Changes
          </button>
        </div>
      </div>

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
    </>
  );
}

function ResultFilter2({ type, show, name }) {
  const selectedInstitute = useSelector((state) => state.filters.institute);
  const dispatch = useDispatch();

  const [localSelected, setLocalSelected] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (localSelected.includes(value)) {
      const updatedLocalSelected = localSelected.filter(
        (item) => item !== value
      );
      setLocalSelected(updatedLocalSelected);
    } else {
      const updatedLocalSelected = [...localSelected, value];
      setLocalSelected(updatedLocalSelected);
    }
  };

  const applyChanges = () => {
    dispatch(setInstitute(localSelected));
  };

  return (
    <>
      <div className="hideBox">
        <div className="ResultFilter-box">
          <form action="">
            <br />
            {type &&
              type.map((item, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="checkboxGroup"
                    value={item}
                    checked={localSelected.includes(item)}
                    onChange={handleCheckboxChange}
                    className="checkboxSize"
                  />
                  <label
                    htmlFor={item}
                    className="result-checkbox-label"
                    style={{ textTransform: "uppercase" }}
                  >
                    {item}
                  </label>
                </div>
              ))}
          </form>
          <button onClick={applyChanges} className="ApplyButton">
            Apply Changes
          </button>
        </div>
      </div>
    </>
  );
}
function ResultFilter3({ type, show, name }) {
  const selectedInstitute = useSelector((state) => state.filters.institute);
  const dispatch = useDispatch();

  const [localSelected, setLocalSelected] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (localSelected.includes(value)) {
      const updatedLocalSelected = localSelected.filter(
        (item) => item !== value
      );
      setLocalSelected(updatedLocalSelected);
    } else {
      const updatedLocalSelected = [...localSelected, value];
      setLocalSelected(updatedLocalSelected);
    }
  };

  const applyChanges = () => {
    dispatch(setInstitute(localSelected));
  };
  return (
    <>
      <div className="hideBox">
        <p style={{ fontSize: "22px" }}>{name}</p>
        <div className="ResultFilter-box">
          <form action="">
            <br />
            {type &&
              type.map((item, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="checkboxGroup"
                    value={item.name}
                    checked={localSelected.includes(item.name)}
                    onChange={handleCheckboxChange}
                    className="checkboxSize"
                  />
                  <label
                    htmlFor={item.name}
                    className="result-checkbox-label"
                    style={{ textTransform: "uppercase" }}
                  >
                    {item.name}
                  </label>
                </div>
              ))}

            <input
              type="checkbox"
              name="checkboxGroup"
              value={"Boys"}
              checked={localSelected.includes("Boys")}
              onChange={handleCheckboxChange}
              className="checkboxSize"
            />
            <label
              htmlFor={"Boys"}
              className="result-checkbox-label"
              style={{ textTransform: "uppercase" }}
            >
              Boys
            </label>
          </form>
          <button onClick={applyChanges} className="ApplyButton">
            Apply Changes
          </button>
        </div>
      </div>
    </>
  );
}

function ResultSideBox(props) {
  return (
    <>
      <div className="side-result-box">
        <div style={{ display: "flex" }}>
          <div className="side-result-box-img">
            <img src={props.image} alt="" />
          </div>
          <div className="side-result-box-content">
            <p className="side-result-box-content-p1">{props.title}</p>
            <address>{props.secondDesc}</address>
            <p className="side-result-box-content-p2">{props.thirdDesc}</p>
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
