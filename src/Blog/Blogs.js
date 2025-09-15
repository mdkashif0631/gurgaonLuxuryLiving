import React from "react";
import Bloghero from "./components/BlogHero";
import Header from "../Header";
import Blogcards from "./components/Blogcards";
import './Blogs.css'


const Blogs = () => {
  return (
    <div className="blogs">
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
