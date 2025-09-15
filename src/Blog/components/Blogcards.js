import React, { useEffect, useRef, useState } from "react";
import "./Blogcards.css";
import { Link } from "react-router-dom";
import cardsData from "../Blogs.json";

const Blogcards = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-id");
            setVisibleCards((prev) => [...prev, cardId]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="blog_card_list">
      {cardsData.map((card, index) => (
        <div
          key={card.id}
          data-id={card.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className={`blog_card ${visibleCards.includes(card.id.toString()) ? "show" : ""}`}
        >
          <div className="blog_card_content">
            {/* <strong className="blog_card_category">{card.category}</strong> */}
            <h2 className="blog_card_title">{card.title}</h2>
            <p className="blog_card_date">{card.date}</p>
            <p className="blog_card_description">
              {card.description.length > 250
                ? card.description.substring(0, 250) + "..."
                : card.description}
            </p>
            <Link to={`/blog/${card.id}`} className="blog_card_link">
              Continue reading →
            </Link>
          </div>
          <div className="blog_card_thumbnail">
            <img src={card.img} alt={card.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogcards;
