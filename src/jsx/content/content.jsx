import React from "react";
import "./content.css";
import NavBar from '../NavBar/Navbar'
import { TopImgUniversity } from "../collegeDetails/CollegeDetails";
import { UniversityDetailsButton } from "../collegeDetails/CollegeDetails";
const content = () =>  {
  return (
    <>
    <NavBar/>
    <TopImgUniversity />

      <UniversityDetailsButton />
     <Box1 heading={'Admissions at IIT Bombay'} 
     content=' IIT Bombay begins the admission process for various courses on
              different dates. The official schedule for admissions in B.Tech,
              M.Tech, B.Des, M.Des etc will be released on the official website
              of IIT Bombay. The premier institute has a specific admission
              portal where students can access all details about the admission
              process, entrance exams etc. The candidates must satisfy the
              eligibility criteria specified by IIT Bombay to get admission in
              various courses. All details about IIT Bombay admission such as
              eligibility criteria, entrance exams and admission process can be
              checked below.'
              />
     <Box2 heading={'Admissions at IIT Bombay'} 
     content=' IIT Bombay begins the admission process for various courses on
              different dates. The official schedule for admissions in B.Tech,
              M.Tech, B.Des, M.Des etc will be released on the official website
              of IIT Bombay. The premier institute has a specific admission
              portal where students can access all details about the admission
              process, entrance exams etc. The candidates must satisfy the
              eligibility criteria specified by IIT Bombay to get admission in
              various courses. All details about IIT Bombay admission such as
              eligibility criteria, entrance exams and admission process can be
              checked below.'
              />
     <Box3 heading={'Admissions at IIT Bombay'} 
     content=' IIT Bombay begins the admission process for various courses on
              different dates. The official schedule for admissions in B.Tech,
              M.Tech, B.Des, M.Des etc will be released on the official website
              of IIT Bombay. The premier institute has a specific admission
              portal where students can access all details about the admission
              process, entrance exams etc. The candidates must satisfy the
              eligibility criteria specified by IIT Bombay to get admission in
              various courses. All details about IIT Bombay admission such as
              eligibility criteria, entrance exams and admission process can be
              checked below.'
              />
     <Box4 heading={'Admissions at IIT Bombay'} 
     content=' IIT Bombay begins the admission process for various courses on
              different dates. The official schedule for admissions in B.Tech,
              M.Tech, B.Des, M.Des etc will be released on the official website
              of IIT Bombay. The premier institute has a specific admission
              portal where students can access all details about the admission
              process, entrance exams etc. The candidates must satisfy the
              eligibility criteria specified by IIT Bombay to get admission in
              various courses. All details about IIT Bombay admission such as
              eligibility criteria, entrance exams and admission process can be
              checked below.'
              />
     <Box5 heading={'Admissions at IIT Bombay'} 
     content=' IIT Bombay begins the admission process for various courses on
              different dates. The official schedule for admissions in B.Tech,
              M.Tech, B.Des, M.Des etc will be released on the official website
              of IIT Bombay. The premier institute has a specific admission
              portal where students can access all details about the admission
              process, entrance exams etc. The candidates must satisfy the
              eligibility criteria specified by IIT Bombay to get admission in
              various courses. All details about IIT Bombay admission such as
              eligibility criteria, entrance exams and admission process can be
              checked below.'
              />
    </>
  );
}

export default content;


function Box1 (props)  {
    return(
        <>
         <div className="contect-container">
        <div className="contect-box">
          <div className="contect-head">
            <h3>{props.heading}</h3>
          </div>
          <div className="contect-content">
            <p>
              {props.content}
            </p>
            <div className="buttons-content">
            <button class="btn-hover-content color-1">See More</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
} 

export {Box1};

function Box2 (props)  {
    return(
        <>
         <div className="contect-container">
        <div className="contect-box">
          <div className="contect-head">
            <h3>{props.heading}</h3>
          </div>
          <div className="contect-content">
            <p>
             {props.content}
            </p>
            <div className="buttons-content">
            <button class="btn-hover-content color-1">See More</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
} 

export {Box2};
function Box3 (props)  {
    return(
        <>
         <div className="contect-container">
        <div className="contect-box">
          <div className="contect-head">
            <h3>{props.heading}</h3>
          </div>
          <div className="contect-content">
            <p>
            {props.content}
            </p>
            <div className="buttons-content">
            <button class="btn-hover-content color-1">See More</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
} 

export {Box3};
function Box4 (props)  {
    return(
        <>
         <div className="contect-container">
        <div className="contect-box">
          <div className="contect-head">
            <h3>{props.heading}</h3>
          </div>
          <div className="contect-content">
            <p>
            {props.content}

            </p>
            <div className="buttons-content">
            <button class="btn-hover-content color-1">See More</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
} 

export {Box4};
function Box5 (props)  {
    return(
        <>
         <div className="contect-container">
        <div className="contect-box">
          <div className="contect-head">
            <h3> {props.heading}  </h3>
          </div>
          <div className="contect-content">
            <p>
            {props.content}
            </p>
            <div className="buttons-content">
            <button class="btn-hover-content color-1">See More</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
} 

export {Box5};