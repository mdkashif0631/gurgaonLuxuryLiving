import React, { useEffect, useRef, useState } from "react";
import "./JoinForm.css";

const JoinForm = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 1200); // reset for re-trigger
        }
      },
      { threshold: 0.3 }
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`join_section ${isVisible ? "animate" : ""}`}
    >
      <h2 className="form-title">JOIN OUR TEAM</h2>
      <p className="form-subtitle">
        <a href="mailto:join@elliman.com">JOIN@luxuryabodellp.com</a>
      </p>

      <form className="form">
        <div className="form-row">
          <input id="first_name" type="text" placeholder="First Name" required />
          <input id="last_name" type="text" placeholder="Last Name" required />
        </div>

        <div className="form-row">
          <input id="email_id" type="email" placeholder="Email" required />
          <input id="phone_no" placeholder="Phone (optional)" />
        </div>

        <div className="form-row">
          <select defaultValue="" id="state_of_agent">
            <option value="" disabled>
              Agent State
            </option>
            <option value="NY">Gurgaon</option>
            <option value="CA">Delhi</option>
            <option value="FL">New Delhi</option>
            <option value="TX">Noida</option>
          </select>

          <input id="annual_volume" type="text" placeholder="Annual Sales Volume" />
        </div>

        <textarea id="message_of_agent" placeholder="Message (optional)" rows="3"></textarea>

        <button type="submit" className="submit-btn">
          CONNECT NOW
        </button>
      </form>
    </section>
  );
};

export default JoinForm;
