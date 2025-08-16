import React from "react";



const EmperorPartner = () => {
  const partners = [
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755346987/UHA_icsrpn.png", alt: "UHA" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755346987/WET_bntwli.png", alt: "WET" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755346959/CD_M_uq6uyg.png", alt: "CD+M" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755346983/SWA_zhcxvd.png", alt: "SWA" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755346961/LEIGHTON_vgubax.png", alt: "Leighton" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755346959/DSA_kgociw.png", alt: "dsaeng" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755346904/HBA_whys3l.png", alt: "hba" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755346962/MERO_vqmemq.png", alt: "mero" },
    { img: "https://res.cloudinary.com/dif213nbi/image/upload/v1755346984/TT_mluriq.png", alt: "thortom" },
  ];

  return (
    <section className="partners-section" style={{backgroundColor:'#050e1d'}}>
      <p className="partners-subtitle" style={{color:'white'}}>PARTNERS & ASSOCIATES</p>
      <h2 className="partners-title" style={{color:'white'}}>
        To Deliver the Best We Have <br />
        Onboarded Leading Names in the Industry
      </h2>

      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card" style={{backgroundColor:'#050e1d'}}>
            <img src={partner.img} alt={partner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmperorPartner;
