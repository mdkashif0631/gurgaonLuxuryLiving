import React, { useEffect, useRef, useState } from "react";
import "./Blogfooter.css";
import { Link } from "react-router-dom";
import cardsData from "./Blog/Blogs.json";

const Blogfooter = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(cardsData[0]); // default first card
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
        <div className="blogfooter_container">
            {/* Left side: titles list (only first 5 blogs) */}
            <div className="blogfooter_list">
                <h3>LATEST BLOG</h3>
                {cardsData.slice(0, 5).map((card, index) => (
                    <div
                        key={card.id}
                        data-id={card.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`blogfooter_title_item ${visibleCards.includes(card.id.toString()) ? "show" : ""
                            } ${selectedCard.id === card.id ? "active" : ""}`}
                        onClick={() => setSelectedCard(card)}
                    >
                        <p>
                             {card.title.length > 30
                                ? card.title.substring(0, 30) + "..."
                                : card.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right side: selected card details */}
            <div className="blogfooter_details">
                <div className="blogfooter_details_thumbnail">
                    <img src={selectedCard.img} alt={selectedCard.title} />
                    <div className="blogfoot_text">

                        <p className="blogfooter_details_description">
                            {selectedCard.description.length > 100
                                ? selectedCard.description.substring(0, 100) + "..."
                                : selectedCard.description}
                        </p>
                        <Link to={`/blog/${selectedCard.id}`} className="blogfooter_footer_link">
                            Continue reading →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogfooter;
