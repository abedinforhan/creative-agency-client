import React from 'react';
import './ServiceCard.css';
import {Col,Card,CardTitle,CardText } from 'reactstrap';

const Servicecard = ({ title, desc, image }) => {

  return (
    <Col md={4} className='mb-2' >
      <Card className='serviceCard' >
        <img 
         className='serviceCard__img'
         src={`data:image/jpeg;base64,${image.img}`} 
         />
        <CardTitle  className='serviceCard__title'>
          {title}
        </CardTitle>
        <CardText className='serviceCard__desc'>
          {desc}
          </CardText>
      </Card>
    </Col>

  );
};

export default Servicecard;