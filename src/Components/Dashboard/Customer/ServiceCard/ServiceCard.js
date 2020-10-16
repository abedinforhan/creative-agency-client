import React, { useState } from 'react';
import './ServiceCard.css';

import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

const ServiceCard = ({catagory,details,image}) => {
 console.log(catagory,details)
  return (
    <Col md={4} className='mb-2'>
      <Card>
        <CardBody>
        <img 
         className='serviceCard__img'
         src={`data:${image.contentType};base64,${image.img}`} 
         />
          <CardTitle  className='serviceCard_title'>
           {catagory}
           </CardTitle>
           <CardText>{details}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ServiceCard;