import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";

const CatalogMagic = ({
  heading = { width: 140, height: 24 },
  row = 2,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let column = 5;
  if (windowWidth < 480) column = 1;       
  else if (windowWidth < 768) column = 2;  
  else if (windowWidth < 1024) column = 3; 
  else if (windowWidth < 1280) column = 4; 

  const width = Math.max(windowWidth * 0.95, 320); 
  const list = [];
  let height = heading.height + padding * 3;

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column;

      const x = padding + j * (itemWidth + padding);
      const height1 = itemWidth;
      const height2 = 20;       
      const height3 = 20;       

      const y1 = height + padding; 
      const y2 = y1 + padding + height1;
      const y3 = y2 + padding / 2 + height2;

      list.push(
        <React.Fragment key={`${i}-${j}`}>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
          <rect x={x} y={y2} width={itemWidth} height={height2} />
          <rect x={x} y={y3} width={itemWidth * 0.6} height={height3} />
        </React.Fragment>
      );

      if (j === column - 1) {
        height = y3 + height3 + padding * 2; 
      }
    }
  }

  return (
    <div style={{ backgroundColor: "#100b28", width: "100%", minHeight: "100vh" }}>
      <ContentLoader
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height}
        backgroundColor="#100b28"
        foregroundColor="#2a214d"
        {...props}
      >
        {heading && (
          <rect
            x={padding}
            y={padding}
            width={heading.width}
            height={heading.height}
          />
        )}
        {list}
      </ContentLoader>
    </div>
  );
};

CatalogMagic.metadata = {
  name: "Responsive Catalog Loader",
  description: "Responsive skeleton loader with dynamic grid",
  filename: "CatalogMagic",
};

export default CatalogMagic;
