import React from "react";
import "./ArchitectsConsultants.css";

const consultants = [
  { icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769919/knjbqosi0flagjcrsrt1.png", title: "ARCHITECT", name: "Design Plus Associates" },
  { icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769919/knjbqosi0flagjcrsrt1.png", title: "LANDSCAPE", name: "Studio ATK and Design Accord" },
  { icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769919/knjbqosi0flagjcrsrt1.png", title: "CONTRACTOR", name: "M/s RSV Builders Pvt. Ltd." },
  { icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769919/knjbqosi0flagjcrsrt1.png", title: "STRUCTURAL", name: "Civitech Consultants Pvt Ltd" },
  { icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769919/knjbqosi0flagjcrsrt1.png", title: "VERTICAL TRANSPORT", name: "VT Consultants" },
  { icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769919/knjbqosi0flagjcrsrt1.png", title: "FAÇADE", name: "Dema Consultants" },
  { icon: "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757769919/knjbqosi0flagjcrsrt1.png", title: "LIGHTING", name: "Lirio Lopez" },
];

const ArchitectsConsultants = () => {
  return (
    <section className="architectsaipl-section">
      <div className="architectsaipl-container">
        {/* Left Side */}
        <div className="architectsaipl-left">
          <h2 className="architectsaipl-heading">Architects & Consultants</h2>
          <ul className="architectsaipl-list">
            {consultants.map((item, idx) => (
              <li key={idx} className="architectsaipl-item">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="architectsaipl-icon"
                />
                <div className="architectsaipl-text">
                  <h4>{item.title}</h4>
                  <p>{item.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="architectsaipl-right">
          <img
            src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757770031/nwif9mxlzxcxi7vytjmo.webp"   // Replace with your building image
            alt="Buildings"
          />
        </div>
      </div>
    </section>
  );
};

export default ArchitectsConsultants;