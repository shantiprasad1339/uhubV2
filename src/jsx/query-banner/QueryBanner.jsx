import React from 'react';
import './querybanner.css';
import mail from '../../assets/images/email.png'
import phone from '../../assets/images/phone.png'
import doctor from '../../assets/images/doctor.png'
const QueryBanner = () => {
    return (
        <>
        <div className="container mb-3">
            <div className="query-banner">
                <div className="row clm-dirt-vw">
                   <QueryBox />
                   <div className="col-md-6">
                   <div className="bnr-img-box">
                    </div>
                   </div>
                </div>
              
            </div>
            <div className="banner-img-box-vw"><img src={doctor} alt="Banner" className="banner-img-sz" /></div>
        </div>
        </>
    )
}

export default QueryBanner;

const QueryBox = () => {
    return (
        <>
 <div className="col-md-6">
    <h6 className="quest-h6-tag">Have a Question?</h6>
    <h4 className="quest-h4-tag">We are here to help!</h4>
    <p className="quest-h6-tag">If you have any questions for us, feel free to reach out to us on the details given below.</p>
    <div className="banner-box-vw-sz">
<QueryInfoBox detail="hello@collageUk@gmail.com" title="For admissions mail us on" image={mail}/>
<QueryInfoBox detail="1800-572-9877" title="For general queries call us on" image={phone}/>
</div>
 </div>
        </>
    )
}
const QueryInfoBox = (props) =>{
    return (
        <>
        <div className="d-flex info-box-sz">
         <img src={props.image} alt="icon" className="qry-br-icon" />
         <div className="info-dtl-fnt">
            <p>{props.title}</p>
            <h6>{props.detail}</h6>
         </div>
        </div>

        </>
    )
}