import React, { useEffect, useRef } from "react";
import "./Connectivity.css";

const Connectivity = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cloverdale-connectivity_animate");
          } else {
            entry.target.classList.remove("cloverdale-connectivity_animate"); // re-trigger on revisit
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(".cloverdale-connectivity_card");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const data = [
    {
      icon: "⛳",
      img1: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098073/sjvhkorsboaa3nij1fai.svg",
      img2: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098074/ae2sysfqd9ardbqvqral.svg",
      text: "10 minutes' drive from the Golf Course",
    },
    {
        icon: "🛣️",
        img1: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098072/qudejqk1ghuw703wgb5t.svg",
        img2: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098070/kvbsxalnpjgh9gmmh4dd.svg",
        text: "Well connected to National Highway 48",
    },
    {
        icon: "✈️",
        img1: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098064/vas4lav8xdyy3ogtds9j.svg",
        img2: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098064/wfa0ecdqj6jpwfllnprl.svg",
        text: "30 minutes’ drive to IGI Airport via Dwarka Expressway",
    },
    {
        icon: "🏢",
        img1: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098064/vas4lav8xdyy3ogtds9j.svg",
        img2: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757098064/wfa0ecdqj6jpwfllnprl.svg",
      text: "5 minutes’ drive from Cyber Hub",
    },
  ];

  return (
    <section className="cloverdale-connectivity_section" ref={sectionRef}>
      <h2 className="cloverdale-connectivity_title">CONNECTIVITY</h2>
      <p className="cloverdale-connectivity_subtitle">
        Strategically located along Southern Peripheral Road, Cloverdale SPR
        ensures seamless access to key destinations. Enjoy quick connectivity to
        IGI Airport, NH-48, Rajiv Chowk, and Golf Course Road Extension. Every
        drive is effortless, placing you truly at the centre of it all.
      </p>

      <div className="cloverdale-connectivity_grid">
        {data.map((item, index) => (
          <div key={index} className="cloverdale-connectivity_card">
            {/* <div className="cloverdale-icon ">{item.icon}</div> */}
            <img className="cloverdale-connectivity_icon img1"
            src={item.img1}
            alt="img1"
            />
            <img className="cloverdale-connectivity_icon img2"
            src={item.img2}
            alt="img2"
            />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Connectivity;
