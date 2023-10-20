import React, { useState, useEffect } from "react";
import "./latestnews.css";
import { CollegeCard } from "../recommand-college/RecommandCollege";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import universityimg from "../../assets/images/universityimg.png";
import axios from "axios";

const responsive = {
  0: { items: 1 },
  458: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 },
  1500: { items: 4 },
};

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  function newsGet() {
    return axios
      .get("https://hammerhead-app-p3s8r.ondigitalocean.app/vlog/get")
      .then((res) => {
        console.log(res    );
        setLatestNews(res.data.data[0]);
      });
  }
  const url = "https://hammerhead-app-p3s8r.ondigitalocean.app/";
  useEffect(() => {
    newsGet();
  }, []);

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
    
      const truncatedText = text.split(" ").slice(0, 40).join(" ") + "...";
      return truncatedText;
    }
  }

  const items = latestNews.map((item, index) => (
    <div style={{ margin: "8px" }}>
      <CollegeCard
  title={item.Description}
  image={url + item.image}
  detail={truncateText(item.SecondDescription, 50)}
/>
    </div>
  ));
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
