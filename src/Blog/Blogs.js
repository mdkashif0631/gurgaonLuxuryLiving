import React from "react";
import Bloghero from "./components/BlogHero";
import Header from "../Header";
import Blogcards from "./components/Blogcards";
import './Blogs.css'
import Seo from "../Seo";


const Blogs = () => {
  return (
    <div className="blogs">
      <Seo project="Gurgaon Real Estate Blog | Market Trends & Property Insights – The Luxury Abode"
          desc = "Stay updated on Gurgaon’s real estate market with The Luxury Abode. Read expert blogs on property trends, investment tips, and upcoming project insights."
            img= "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757927534/neddeee9mqnycslnigdg.jpg"
            link= "/blogs"/>
        <Header/>
        <h1 className="blogs_heading">Real Estate News & Expert Stories</h1>
        <Bloghero/>
        <div className="blog_card_display">

        <Blogcards/>
        </div>
    </div>
  );
};

export default Blogs;
