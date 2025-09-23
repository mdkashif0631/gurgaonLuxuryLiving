import { Helmet } from "@dr.pogodin/react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

const Seo = ({ project, desc, img, link}) => {
  const [proj, setProj] = useState(null);

  useEffect(() => {
    if (!project) return;

    axios
      .get(`${BASE_URL}/properties`)
      .then((res) => {
        const foundProj = res.data.find(
          (item) => item.Link === project || item.slug === project
        );
        setProj(foundProj || null);
      })
      .catch(() => setProj(null));
  }, [project]);

  const seoData = proj || {
    Project_Name: project,
    Link: link,
    Description: desc,
    image: img,
  };

  return (
    <Helmet>
      <title>{seoData.Project_Name}</title>

      <link
        rel="canonical"
        href={`https://www.luxuryabodellp.com/${seoData.Link}`}
      />

      <meta charSet="utf-8" />
      <meta name="description" content={seoData.Description} />

      <meta property="og:title" content={seoData.Project_Name} />
      <meta property="og:description" content={seoData.Description} />
      <meta property="og:url" content={`https://www.luxuryabodellp.com/${seoData.Link}`} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.Project_Name} />
      <meta name="twitter:description" content={seoData.Description} />
      <meta name="twitter:image" content={seoData.image} />
    </Helmet>
  );
};

export default Seo;
