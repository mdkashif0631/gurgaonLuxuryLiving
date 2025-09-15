import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './PropertySticker.css';
import properties from '../data/properties.json';
import PropertyCardTemplate from './PropertyCardTemplate';

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};


const PropertySticker = () => {
  const grouped = chunkArray(properties, 4);

  return (
    <div style={{ width: "100%"}}>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Carousel controls={grouped.length > 1} indicators={false} interval={null}>
          {grouped.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Container className="my-1 stickerback p-4">
                <Row>
                  {group.map((property, i) => (
                    <Col key={i} xs={12} sm={6} md={3}>
                      <PropertyCardTemplate property={property} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PropertySticker;


