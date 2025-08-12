import React from 'react'
import './PropertyCardTemplate.css';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaHome, FaRupeeSign } from 'react-icons/fa';
import { FaBed } from "react-icons/fa6";
import { BiSolidArea } from "react-icons/bi";


const PropertyCardTemplate = ({ property }) => (

  <Card className="cardContainer mb-4">
    <div className='stickerimages' style={{ height: '200px' }}>
      <Card.Img className='CardImgyy h-100 w-100' variant="top" src={property.image} />
      <p>RERA No: RC/REP/HARERA/GGM/925/657/2025/28</p>
      <div className='logoImage'>
        <img src={property.logoimg} alt="logo" />
      </div>
    </div>
    <Card.Body>
      <Card.Title style={{ color: "rgb(33, 28, 132)", fontSize: "20px" }}>{property.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>{property.address}</Card.Subtitle>
      <h4 className="text" style={{ color: "rgb(33, 28, 132)" }}>
        <FaRupeeSign />{property.price} {property.mode === 'Rent' && <small>/month</small>}
      </h4>
      <p className="mb-1 text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>
        <FaBed style={{ color: "rgb(33, 28, 132)", fontSize: "16px" }} />: {property.beds}
      </p>
      <p className='mb-1 text-muted' style={{ fontSize: "12px", fontWeight: "600" }}>
        <BiSolidArea style={{ color: "rgb(33, 28, 132)", fontSize: "16px" }} />: {property.area}
      </p>
      <p className="mb-1 text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>
        <FaHome style={{ color: "rgb(33, 28, 132)", fontSize: "16px" }} />: {property.garages}
      </p>
      <div className="d-flex justify-content-end align-items-center mt-2">
        <Button className='viewOfferButton'>
          VIEW OFFER
        </Button>
      </div>
    </Card.Body>
  </Card>
);
export default PropertyCardTemplate

// const PropertyCardTemplate = () => {
//   const grouped = chunkArray(properties, 4);

//   return (
//     <>
//     <Carousel controls={grouped.length > 1} indicators={false} interval={6000}>
//       <Row>
//         {grouped.map((group, idx) => (
//           <Carousel.Item key={idx}>
//             {group.map((property, i) => (
//               <Col key={i} xs={12} sm={6} md={3}>
//                 <PropertyCards property={property} />
//               </Col>
//             ))}
//           </Carousel.Item>
//         ))}
//       </Row>
//     </Carousel>
//     </>

//   )
// }

// export default PropertyCardTemplate

// };

