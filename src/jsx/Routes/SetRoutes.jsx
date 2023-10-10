import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RecommandCollege from '../recommand-college/RecommandCollege'
import TrendingUniversity from '../trendinguniversity/TrendingUniversity'
import QueryBanner from '../query-banner/QueryBanner'
import Media from '../media/Media'
import LatestNews from '../latest-news/LatestNews'
import Counter from '../counter/Counter'
import CompareUniversity from '../comparisons/CompareUniversity'
import Home from '../home/home'
import EnrollBox from '../enrollbox/EnrollBox'
import CollegeLocation from '../college-location/CollegeLocation'
import Highlights from '../highlights/Highlights'
import SignUp from '../SignUp/sing-up'
import LogIn from '../login/login'
import CollegeDetails from '../collegeDetails/CollegeDetails'
import DropDownButton from '../DropDownButton/DropDownButton'
import AllNewPages from '../AllNewPages/AllNewPages'
import OtpPage from '../OtpPage/OtpPage'
import ResultPage from '../result/ResultPage'
import Course from '../courseData/course'
import CutOff from './../cutOff/CutOff'
import Infra from '../infastructer/Infastructer'
import Placement from '../placement/placement'
import Content from '../content/content'
const SetRoutes = () => {
    return (
        <>
 <Routes>
 <Route path='/' element={<Home />} /> 
 <Route path='/recommandedcollege' element={<RecommandCollege />} /> 
 <Route path='/trendinguniversity' element={<TrendingUniversity />} /> 
 <Route path='/ResultPage' element={<ResultPage />} /> 
 <Route path='/media' element={<Media />} /> 
 <Route path='/latestnews' element={<LatestNews />} />
 <Route path='/AllNewPages' element={<AllNewPages />} />
 <Route path='/CollegeDetails' element={<CollegeDetails />} />
 <Route path='/enrollbox' element={<EnrollBox />} />
 <Route path='/collegelocation' element={<CollegeLocation />} />
 <Route path='/highlights' element={<Highlights />} />
 <Route path='/signUp' element={<SignUp />} />
 <Route path='/logIn' element={<LogIn />} />
 <Route path='/OtpPage' element={<OtpPage />} />
 <Route path='/CutOff' element={<CutOff />} />
 <Route path='/Content' element={<Content />} />
 <Route path='/Course' element={<Course />} />
 <Route path='/Placement' element={<Placement />} />
 <Route path='/ResultPage' element={<ResultPage />} />

 <Route path='/Infra' element={<Infra />} />


 


 </Routes>

        </>
    );

}
export default SetRoutes;