import React from 'react';
import {CardImg} from 'reactstrap';
import carousel from '../../../images/carousel1.png'

const CarouselCard = ({imgUrl}) => {
  return (
    <div className='mb-2'>
        <img style={{height:'150px',width:'80%'}} src={imgUrl}  />
    
    </div>
  );
};

export default CarouselCard;