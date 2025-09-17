import "./FloorPlan.css";

// FloorPlan Dataset 1 (Aspen)
const aspenFloorPlans = [
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757989403/g6wosr9xba1eam1zy5aq.png",
    title: "Lower Level Plan",
    description: "Penthouse - Duplex (4BHK L2 & 3BHK L3)",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1757989402/khfnsgsuuk98tlxtt5b4.png",
    title: "Upper Level Plan",
    description: "Penthouse - Duplex (4BHK L2 & 3BHK L3)",
  },
];

// FloorPlan Dataset 2 (Iconic)
const iconicFloorPlans = [
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758118307/sxr7sgu9wjiyrrlprupn.webp",
    title: "4 BHK - L4 - Unit 1",
    description: "",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758118306/kwaot7gysclrku6wfla2.webp",
    title: "4 BHK - L3 Unit 2",
    description: "",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758118306/kwaot7gysclrku6wfla2.webp",
    title: "4 BHK - L4 - Unit 3",
    description: "",
  },
];

// FloorPlan Dataset 3 (XYZ)
const xyzAmenities = [
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758120788/mhw8gsehwjgzg4vmrsfw.webp",
    title: "4 BHK - L4 - Unit 1",
    description: "",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758120787/e9k6pp2ccygx4dk5om5w.webp",
    title: "4 BHK - L3 Unit 2",
    description: "",
  },
  {
    image:
      "https://res.cloudinary.com/daa1hgr9j/image/upload/v1758120787/othmmogzkyn6my0drvqq.webp",
    title: "4 BHK - L4 - Unit 3",
    description: "",
  },
];

// Dataset lookup
const datasets = {
  aspen: aspenFloorPlans,
  iconic: iconicFloorPlans,
  blissville: xyzAmenities,
};

export default function FloorPlans({ dataset }) {
  // Pick dataset, fallback to Aspen
  const plans = datasets[dataset] || aspenFloorPlans;

  return (
    <div id="floorplan" className="aspen_plans-container">
      <h2 className="aspen_title">FLOOR PLANS</h2>
      <p className="aspen_subtitle">
        Every aspect of your home is meticulously designed to align with your unique preferences and desires.
      </p>

      {/* Render floor plans */}
      <div className="aspen_plans-large">
        {plans.map((plan, index) => (
          <div key={index} className="aspen_plan-wrapper">
            <img
              src={plan.image}
              alt={plan.title}
              className="aspen_plan-img"
            />
            <p className="aspen_plan-text">
              {plan.title} <br />
              <span className="aspen_plan-subtext">{plan.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
