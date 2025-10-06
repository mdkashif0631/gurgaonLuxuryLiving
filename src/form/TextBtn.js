import React, { useState } from "react";
import RegisterInterestForm from "./RegisterInterestForm";
import "./InterestPopup.css"; 


const Textbtn = ( {projectName, btnText, nameclass} ) => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <>
      {/* Popup Form */}
      <div className={`side-popup ${showForm ? "open" : ""}`}>
        <span className="popup-close" onClick={closeForm}>
          &times;
        </span>
        <RegisterInterestForm projectName={projectName} closeForm={closeForm} />
      </div>

      {/* Button to open form */}
            <button className={nameclass} onClick={openForm}>
                {btnText}
            </button>

      
    </>
  );
};

export default Textbtn;
