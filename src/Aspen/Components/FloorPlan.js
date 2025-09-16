import "./FloorPlan.css";

export default function FloorPlans() {

  return (
    <div className="aspen_plans-container">
      <h1 className="aspen_title">FLOOR PLANS</h1>
      <p className="aspen_subtitle">
        Every aspect of your home is meticulously designed to align with your unique preferences and desires.
      </p>


      {/* Large screen: show both images side by side */}
      <div className="aspen_plans-large">
        <div className="aspen_plan-wrapper">
          <img
            src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757989403/g6wosr9xba1eam1zy5aq.png"
            alt="Lower Level Plan"
            className="aspen_plan-img"
          />
          <p className="aspen_plan-text">
            Lower Level Plan <br />
            <span className="aspen_plan-subtext">
              Penthouse - Duplex (4BHK L2 & 3BHK L3)
            </span>
          </p>
        </div>

        <div className="aspen_plan-wrapper">
          <img
            src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1757989402/khfnsgsuuk98tlxtt5b4.png"
            alt="Upper Level Plan"
            className="aspen_plan-img"
          />
          <p className="aspen_plan-text">
            Upper Level Plan <br />
            <span className="aspen_plan-subtext">
              Penthouse - Duplex (4BHK L2 & 3BHK L3)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}