import React from "react";
import "./latestnews.css";
import { CollegeCard } from "../recommand-college/RecommandCollege";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import universityimg from "../../assets/images/universityimg.png";

const responsive = {
  0: { items: 1 },
  458: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 },
  1500: { items: 4 },
};
const items = [
  <div style={{margin:'8px'}}><CollegeCard
    title="Oxford"
    image={universityimg}
    detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perspiciatis!"
  /></div>,
  <div style={{margin:'8px'}}><CollegeCard
    title="Hull"
    image={universityimg}
    detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perspiciatis!"
  /></div>,
  <div style={{margin:'8px'}}><CollegeCard
    title="Mainchester"
    image={universityimg}
    detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perspiciatis!"
  /></div>,
  <div style={{margin:'8px'}}><CollegeCard
    title="Oxford"
    image={universityimg}
    detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perspiciatis!"
  /></div>,
 <div style={{margin:'8px'}}><CollegeCard
    title="Hull"
    image={universityimg}
    detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, perspiciatis!"
  /></div> ,
];
const LatestNews = () => {
  return (
    <>
      <div className="container-fluid">
        <h2 className="heading-text-fnt mt-3 text-center">Latest News</h2>
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
      </div>
    </>
  );
};
export default LatestNews;
