import "./course.css";
import { NavLink } from "react-router-dom";
import NavBar from '../NavBar/Navbar'
import { TopImgUniversity } from "../collegeDetails/CollegeDetails";
import { UniversityDetailsButton } from "../collegeDetails/CollegeDetails";
const Course = () => {
  return (
    <>
      <Details />
    </>
  );
};

export default Course;

function Details() {
  return (
    <>
    <NavBar/>
    <TopImgUniversity />

      <UniversityDetailsButton />
      <div className="course-container">
        <div className="course-heading">
          <p>Courses at Datta Meghe Institute of Medical Sciences</p>
        </div>
        <div className="course-content">
          <p>
            Datta Meghe Institute of Medical Sciences (DMIMS Wardha) Fee
            Structure and Courses List{" "}
          </p>
        </div>
        <div className="course-table table-responsive">
          <table>
            <thead className="course-thead">
              <tr>
                <th>Course</th>
                <th>Fees</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr className="course-tcontent">
                <td >B.Sc</td>
                <td >Rs 1.35 Lakhs</td>
                <td >
                  10+2: 45 % in PCB and individually passed in English
                </td>
              </tr>

              <tr className="course-tcontent">
                <td>B.Sc</td>
                <td>Rs 1.35 Lakhs</td>
                <td>10+2: 45 % in PCB and individually passed in English</td>
              </tr>

              <tr className="course-tcontent">
                <td>B.Sc</td>
                <td>Rs 1.35 Lakhs</td>
                <td>
                  10+2: 45 % in PCB and individually passed in English
                </td>
              </tr>

              <tr className="course-tcontent">
                <td>B.Sc</td>
                <td>Rs 1.35 Lakhs</td>
                <td>
                  10+2: 45 % in PCB and individually passed in English
                </td>
              </tr>

              <tr className="course-tcontent">
                <td>B.Sc</td>
                <td>Rs 1.35 Lakhs</td>
                <td>
                  10+2: 45 % in PCB and individually passed in English
                </td>
              </tr>
              <tr className="course-tcontent">
                <td>B.Sc</td>
                <td>Rs 1.35 Lakhs</td>
                <td>
                  10+2: 45 % in PCB and individually passed in English
                </td>
              </tr>
              <tr className="course-tcontent">
                <td>B.Sc</td>
                <td>Rs 1.35 Lakhs</td>
                <td>
                  10+2: 45 % in PCB and individually passed in English
                </td>
              </tr>
              <tr className="course-tcontent">
                <td>B.Sc</td>
                <td>Rs 1.35 Lakhs</td>
                <td>
                  10+2: 45 % in PCB and individually passed in English
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="course-content-2">
          <p>
            Datta Meghe Institute of Medical Sciences or DMIMS is located in
            Wardha in the state of Maharashtra and is deemed to become a
            university. DMIMS is an excellent choice for all the students who
            wish to pursue a career in Dentistry, Ayurveda, Allied Sciences,
            Physiotherapy, Nursing, Epidemiology, Dentistry, and a lot more. The
            Datta Meghe Institute of Medical Sciences fees structure is also
            quite inclusive for the students. Selective DMIMS courses are also
            available in the mode of Online Distance Learning and Virtual
            Learning. DMIMS is a beautiful campus that sprawls across 125+ acres
            and has all the necessary facilities for the resident students.{" "}
            <br /> <br />
            Some of the most popular Datta Megha Institute or Medical Science
            courses and fees are given below.
          </p>

          <ul>
            <li>
              Datta Meghe Institute of Medical Sciences B.Sc fees is Rs 1.35
              Lakhs per year.
            </li>
            <li>
              Datta Meghe Institute of Medical Sciences fees for BPT is Rs 1.75
              Lakhs per year.
            </li>
            <li>DMIMS Wardha fees for M.Sc is Rs 1.86 Lakhs per year.</li>
            <li>
              Datta Meghe Institute of Medical Sciences fees for MBBS is Rs 21.5
              Lakhs per year.
            </li>
            <li>
              Datta Meghe Institute of Medical Sciences fee for BDS is Rs 4.75
              Lakhs per year.
            </li>
            <li>
              Datta Meghe Institute of Medical Sciences fees for MPH is Rs
              75,000 per year.
            </li>
            <li>
              Datta Meghe Institute of Medical Sciences MD fees is Rs 2.50 Lakhs
              per year.
            </li>
            <li>DMIMS Wardha fees for BOPTM is Rs 80,000 per year.</li>
            <li>
              Datta Meghe Institute of Medical Sciences B.A.M.S. fee is Rs 4.50
              Lakhs per year.
            </li>
          </ul>
        </div>
        <div className="course-cours">
          <h4>
            115 Courses are offered by Datta Meghe Institute of Medical Sciences
          </h4>
          <p>
            MBBS&#160;&#160; BSc&#160;&#160; B.Tech&#160;&#160; BA&#160;&#160;
            BBA&#160;&#160; B.Com&#160;&#160; BCA&#160;&#160; BDS&#160;&#160;
            BPT&#160;&#160; B.Optom&#160;&#160; B.Pharm&#160;&#160;
            BBA+MBA&#160;&#160; B.Sc(Hons)&#160;&#160; MSc
          </p>
          <NavLink to="/" className="course-NavLink">
            <div className="course-btn">+13 More</div>
          </NavLink>
        </div>
        <div className="course-courseDetails">
          <div className="course-head1">
            <p>B.B.A. (Bachelor of Business Administration)</p>
          </div>
          <div className="course-fees">
            <p> Duration: <b>3 Years</b></p>
            <p> Annual Fee: <b>15,000 - 40,000</b></p>
            <p> Study Mode: <b>Regular, Online Distance <br /> Learning</b></p>
          </div>
          <div className="course-fees">
            <p> Available courses <br /> <b>B.A in Clinical Psychology (AHS Nagpur) </b></p>
            <p> Annual Fee: <br /><b> ₹30000</b></p>
            <p> Duration <br /> <b>3 Years</b></p>
            <div><button className="course-fees-btn"> Apply Now</button></div>
          </div>
          <hr />

          <div className="course-fees">
            <p><b>B.A in Clinical Psychology (AHS Nagpur) </b></p>
            <p><b> ₹30000</b></p>
            <p><b>3 Years</b></p>
            <div><button className="course-fees-btn-2"> Apply Now</button></div>
          </div>
            {/* <div><button className="fees-btn-2" style={{marginRight:'20px'}}> See More</button></div> */}
        </div>
        <div className="course-courseDetails-2">
          <div className="course-head1">
            <p>M.B.A. (Bachelor of Business Administration)</p>
          </div>
          <div className="course-fees">
            <p> Duration: <b>3 Years</b></p>
            <p> Annual Fee: <b>15,000 - 40,000</b></p>
            <p> Study Mode: <b>Regular, Online Distance <br /> Learning</b></p>
          </div>
          <div className="course-fees">
            <p> Available courses <br /> <b>B.A in Clinical Psychology (AHS Nagpur) </b></p>
            <p> Annual Fee: <br /><b> ₹30000</b></p>
            <p> Duration <br /> <b>3 Years</b></p>
            <div><button className="course-fees-btn"> Apply Now</button></div>
          </div>
          <hr />

          <div className="course-fees">
            <p><b>B.A in Clinical Psychology (AHS Nagpur) </b></p>
            <p><b> ₹30000</b></p>
            <p><b>3 Years</b></p>
            <div><button className="course-fees-btn-2"> Apply Now</button></div>
          </div>
            {/* <div><button className="fees-btn-2" style={{marginRight:'20px'}}> See More</button></div> */}
        </div>
       
      </div>
    </>
  );
}
