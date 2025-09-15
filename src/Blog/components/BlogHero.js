import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Bloghero.css";
import blogData from "../Blogs.json";
import { Link } from "react-router-dom";

const Bloghero = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const visiblebloghero = blogData.slice(0, 5);

  // stable resetTimer using useCallback
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex + 1 >= visiblebloghero.length ? 0 : prevIndex + 1
      );
    }, 4000);
  }, [visiblebloghero.length]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handleDotClick = (i) => {
    setIndex(i);
    resetTimer();
  };

  return (
    <section className="bloghero">

      <div className="bloghero_container">
        <div
          className="bloghero_wrapper"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {visiblebloghero.map((post, i) => (
            <div className="bloghero_slide" key={i}>
              <img className="bloghero_img" src={post.img} alt="blog_imgs" />
              <h2>{post.title}</h2>
              <p>{post.description.length > 300
                ? post.description.substring(0, 300) + "..."
                : post.description}</p>
              <Link to={`/blog/${post.id}`} className="blog_card_link">
              Continue reading →
            </Link>
            </div>
          ))}
        </div>

        <div className="bloghero_dots">
          {visiblebloghero.map((_, i) => (
            <span
              key={i}
              className={`bloghero_dot ${i === index ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bloghero;
