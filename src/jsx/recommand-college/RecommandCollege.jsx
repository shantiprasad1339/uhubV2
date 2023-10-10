import React from "react";
import "./rdcollege.css";
import universityimg from '../../assets/images/universityimg.png'

const RecommandCollege = () => {
  return (
    <>
      <div className="container">
        <h2 className="heading-text-fnt mt-3">Recommanded Colleges</h2>
        <div className="row">
        <div className="col-md-4">
        <CollegeCard title="Oxford" image={universityimg} detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perspiciatis!"/>
        </div>
        <div className="col-md-4">
        <CollegeCard title="Main Chester" image={universityimg} detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perspiciatis!"/>
        </div>
          <div className="col-md-4">
          <CollegeCard title="Hull" image={universityimg} detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perspiciatis!"/>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default RecommandCollege;

const CollegeCard = (props) => {
  return (
    <>
    <div className="rd-college-box">
       <div>
        <img src={props.image} alt="University Image" className="university-img"/>
       </div>
        <div className="uni-content">
            <h5>{props.title}</h5>
             <p>{props.detail}</p>
        </div>
    </div>

    </>
  );
}

export {CollegeCard};