import React from "react";
import "./Faqs.css";

const faqs = [
  {
    question: "WHAT IS THE ASPEN, AND WHAT MAKES IT UNIQUE?",
    answer:
      "Ultra-luxury 3/4 BHK residences and duplex penthouses with state-of-the-art amenities. It features 2 apartments per floor, ensuring privacy and exclusivity for residents.",
  },
  {
    question: "WHERE IS IT LOCATED?",
    answer: "The Aspen is located in the prime area with excellent connectivity.",
  },
  {
    question: "WHAT TYPES OF UNITS ARE AVAILABLE?",
    answer: "3 BHK, 4 BHK residences, and duplex penthouses.",
  },
  {
    question: "WHICH ARE THE NEAREST SCHOOLS?",
    answer: "Reputed schools within a short drive from the property.",
  },
  {
    question: "WHAT IS THE TOTAL CLUBHOUSE SPACE AVAILABLE?",
    answer: "A sprawling clubhouse with premium amenities.",
  },
  {
    question: "WHICH ARE THE NEAREST HOSPITALS?",
    answer: "Top multi-specialty hospitals are located nearby.",
  },
  {
    question: "WHO IS THE ARCHITECT & PRINCIPAL DESIGN CONSULTANT?",
    answer: "Renowned architects and consultants designed the project.",
  },
  {
    question: "CAN YOU ELABORATE ON THE CLUB FACILITIES, AND THEIR UNIQUE OFFERINGS?",
    answer: "The club offers indoor games, swimming pool, spa, and more.",
  },
  {
    question: "HOW CAN I SCHEDULE A VISIT TO THE ASPEN AND EXPLORE THE PROPERTY?",
    answer: "You can book a site visit through our official website or contact team.",
  },
  {
    question: "WHAT IS THE RERA REGISTRATION NUMBER?",
    answer: "RERA Registration Number: XXXX12345",
  },
];

export default function Faqs() {
  return (
    <div className="faqs">
      <h3>FAQS</h3>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
