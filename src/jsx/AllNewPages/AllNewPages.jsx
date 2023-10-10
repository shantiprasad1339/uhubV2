import React from 'react'
import './AllNewPages.css'
import NavBar from '../NavBar/Navbar'
import {TopImgUniversity} from '../collegeDetails/CollegeDetails'
import {UnviversityTable} from '../collegeDetails/CollegeDetails'
import EnrollBox from '../enrollbox/EnrollBox'
import {RelatedNewsCarousel} from '../collegeDetails/CollegeDetails'
import Footer from '../footer/footer'
import VideosImg from '../../../public/Images/videoImage.png'
// import {TopImgUniversity} from '../collegeDetails/CollegeDetails'
function AllNewPages() {
  return (
   <>
   <NavBar/>
   <TopImgUniversity/>
   <UnviversityTable/>
   <VideosTag/>
   <EnrollBox/>
   <RelatedNewsCarousel/>
   <Footer/>
   </>
  )
}

export default AllNewPages
function VideosTag (){
    return(
        <>
        <div className="videosDiv">
            <img src={VideosImg} alt="" />
        </div>
        </>
    )
}
export {VideosTag}