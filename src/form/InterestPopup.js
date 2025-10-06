import React, { useState } from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import RegisterInterestForm from "./RegisterInterestForm";
import "./InterestPopup.css"; 

const InterestPopup = ( {projectName} ) => {
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
      <div
        className="enqurie_popup"
        onClick={openForm}
        title="Register Your Interest"
      >
        <SlEnvolopeLetter />
      </div>
    </>
  );
};

export default InterestPopup;
