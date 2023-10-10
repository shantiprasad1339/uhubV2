import React from 'react';
import './cmpuniversity.css'
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
const CompareUniversity = () => {
    return (
        <>
         <div className="container">
        <h2 className="heading-text-fnt mt-3">Recommended Comparisons</h2>
        <div className="row">
        <CompareCard />
        <CompareCard />
        <CompareCard />
        </div>
      </div>
        </>
    )
}

export default CompareUniversity;

const CompareCard = () => {
    return (
        <>
         <div className="col-md-4">
           <div className="compare-cd-box">
             <div className="college-lg-box">
               <img src={logo1} alt="logo" className="uni-logo-size" />
               <div>
                 <h6 className="vs-fnt-vw">VS</h6>
               </div>
               <img src={logo2} alt="logo" className="uni-logo-size" />
             </div>

             <div className="college-lg-box">
                <div className="uni-content">
                    <h5>University of oxford of UK</h5>
                    <p>Program in java, flutter and more ...</p>

                    <p>5 <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i></p>
                </div>

                <div  className="cmp-line"></div>
             <div className="uni-content">
                    <h5>University of Hertfordshire of UK</h5>
                    <p>Program in java, flutter and more ...</p>

                    <p>4 <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star"></i></p>
                </div>

             </div>

            <div className="compare-btn">
                <button>Compare</button>
            </div>
          
           </div>
         </div>
        </>
    );
}