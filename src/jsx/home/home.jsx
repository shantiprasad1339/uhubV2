import React from 'react'
import RecommandCollege from '../recommand-college/RecommandCollege'
import TrendingUniversity from '../trendinguniversity/TrendingUniversity'
import QueryBanner from '../query-banner/QueryBanner'
import Media from '../media/Media'
import LatestNews from '../latest-news/LatestNews'
import Counter from '../counter/Counter'
import CompareUniversity from '../comparisons/CompareUniversity'
import Footer from '../footer/footer'
import Navbar from '../NavBar/Navbar' 
import LandingPage from '../LandingPage/Landing'
const Home = () => {
    return (
        <>
        <Navbar/>
        <LandingPage/>
<RecommandCollege />
{/* <CompareUniversity /> */}
{/* <TrendingUniversity /> */}
<LatestNews />
<Media />
<Counter />
<QueryBanner />
<Footer />

        </>
    )
}
export default Home;