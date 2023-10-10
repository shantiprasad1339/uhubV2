import React from 'react';
import './counter.css';
import file from '../../assets/images/file.png'
import globe from '../../assets/images/globe.png'
import people from '../../assets/images/people.png'
import building from '../../assets/images/building.png'
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                
                 <CounterContent  image={building} number="35000" details="Colleges in Database"/>
                 <CounterContent  image={people} number="50000" details="Students got Admission"/>
                 <CounterContent  image={globe} number="10" details="Countries Connected"/>
                 <CounterContent  image={file} number="400" details="Expert Counsellors"/>
            </div>
        </div>
        </>
    )
}

export default Counter;

const CounterContent = (props) =>{
    return (
        <>
        <div className="col-md-6 mt-3">
         <div className="d-flex justify-content-center">
           <img src={props.image} alt="icons" className="cot-icon-sz" />
           <h5 className="count-hd-fnt"><CountUp start={0} end={props.number} duration={5}  enableScrollSpy={true}/>+</h5>
         </div>
         <p className="cont-detl-fnt">{props.details}</p>
          </div>
        </>
    );
}