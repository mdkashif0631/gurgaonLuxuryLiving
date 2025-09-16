import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Andrew Rathore",
    role: "Executive",
    rating: "⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "We are idea generators, goal seekers, and challenge-thirsty professionals...",
  },
  {
    name: "Michael Smith",
    role: "Manager",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/men/21.jpg",
    text: "Creators of unique internet projects. We deliver unconventional solutions...",
  },
  {
    name: "Sophia Lee",
    role: "Designer",
    rating: "⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/women/31.jpg",
    text: "Our mission is to combine creativity with technology for unique solutions...",
  },
  {
    name: "David Johnson",
    role: "Developer",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "We build high-performance products using cutting-edge technologies...",
  },
  {
    name: "Emma Brown",
    role: "HR",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/women/51.jpg",
    text: "Our culture values teamwork, innovation, and long-term growth...",
  },
  {
    name: "Chris Evans",
    role: "Team Lead",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    text: "We ensure all projects are delivered on time with maximum quality...",
  },
  {
    name: "Olivia White",
    role: "Consultant",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
    text: "Helping businesses grow with smart and scalable solutions...",
  },
  {
    name: "Daniel Wilson",
    role: "Executive",
    rating: "⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/men/81.jpg",
    text: "We take pride in delivering value-driven digital solutions...",
  },
  {
    name: "Sophia Patel",
    role: "Marketing",
    rating: "⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/women/91.jpg",
    text: "Our campaigns are designed to connect brands with people...",
  },
  {
    name: "James Carter",
    role: "Analyst",
    rating: "⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    text: "Data-driven decisions help us craft better solutions...",
  },
  {
    name: "Isabella Green",
    role: "UI/UX",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/women/24.jpg",
    text: "We design seamless and user-friendly digital experiences...",
  },
  {
    name: "William Scott",
    role: "CTO",
    rating: "⭐⭐⭐⭐",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "Always pushing boundaries with next-gen technology...",
  },
];

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="aspen_testimonial-section" data-aos="fade-up" id="testimonial">
      <h2 className="aspen_testimonial-title">TESTIMONIALS</h2>
      <div
        className={`aspen_testimonial-slider ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="aspen_testimonial-track">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div key={index} className="aspen_testimonial-card">
              <img src={t.img} alt={t.name} className="aspen_testimonial-img" />
              <h3>{t.name}</h3>
              <p className="aspen_role">{t.role}</p>
              <p className="aspen_text">{t.text}</p>
              <div className="aspen_stars">{t.rating}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
