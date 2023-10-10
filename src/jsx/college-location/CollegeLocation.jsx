import React from 'react'
import './college-location.css'
import phone from '../../assets/images/phone.png'
import email from '../../assets/images/email.png'
import network from '../../assets/images/Geography.png'
import department from '../../assets/images/Department.png'
const CollegeLocation = () => {
    return (
        <>
         <div className="container mt-3">
         <div className="college-info-box">
            <div className="row">
                <div className="col-md-6">
                <div className="info-detail">
                    <h5 className="info-heading-font">BITS Pilani-K K Birla Goa Campus Contact Number, Address & Location Map, Goa</h5>
                    <CollegeInfo image={phone} detail="+91-832-2580208, +91-832-2580239"/>
                    <CollegeInfo image={email} detail="webmaster@bits-goa.ac.in"/>
                    <CollegeInfo image={network} detail="http://universe.bits-pilani.ac.in/Goa/index.aspx"/>
                    <CollegeInfo image={department} detail="Birla Institute of Technology & Science, Pilani K. K. Birla Goa Campus Zuari Nagar, Goa - 403726"/>
                 </div>
                </div>
                <div className="col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7295083859585!2d73.87558667418236!3d15.39112875723602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb8375851666d%3A0x4ad5683010110240!2sBITS%20Pilani%20K%20K%20Birla%20Goa%20Campus!5e0!3m2!1sen!2sin!4v1694432873088!5m2!1sen!2sin" width="100%" height="400px" className="rounded" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
         </div>
         </div>
        </>
    )
}
export default CollegeLocation; 

const CollegeInfo = (props) => {
    return (
        <>
  <div className="d-flex mt-4">
                    <img src={props.image} alt="icon" className="info-dtl-icons"/>
                       <p className="info-dtl-fnt-sz">{props.detail}</p>
                    </div>
                    <hr className="hr-tagline" />
        </>
    )
}