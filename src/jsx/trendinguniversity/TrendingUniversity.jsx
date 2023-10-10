import React from 'react';
import './trendinguni.css'
const TrendingUniversity = () => {
    return (
        <>
       <div className="container-fluid">
       <div className="trending-uni-box">
       <h2 className="heading-text-fnt mt-3">Tranding on Uk Universities Hub</h2>

       <div className="row">
        <UniversityTab tabtitle="Oxford"/>
        <UniversityTab tabtitle="Hertfordshier"/>
        <UniversityTab tabtitle="West London"/>
        <UniversityTab tabtitle="Birstol"/>
        <UniversityTab tabtitle="Combridge"/>
        <UniversityTab tabtitle="ManChester"/>
        <UniversityTab tabtitle="London School of Economics"/>
        <UniversityTab tabtitle="Imperial College London"/>
       </div>
       </div>
       </div>
        </>
    )
}

export default TrendingUniversity;

const UniversityTab = (props) => {
    return (
        <>
        <div className="column-tab">
         <div className="uni-tab-box">
            <h6>{props.tabtitle}</h6>
         </div>
         </div>
        </>
    );
}