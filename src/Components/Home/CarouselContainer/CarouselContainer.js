import React from 'react';
import Slider from "react-slick";
import { Row, Container } from 'reactstrap';

import CarouselCard from '../CarouselCard/CarouselCard';
import carousel1 from '../../../images/carousel1.png'
import carousel2 from '../../../images/carousel2.png'
import carousel3 from '../../../images/carousel3.png'
import carousel4 from '../../../images/carousel4.png'
import carousel5 from '../../../images/carousel5.png'

const projectsData = [

 {
   name:'project1',
   url:'https://i.ibb.co/KLxCZzY/carousel4.png'
 },
 {
  name:'project2',
  url:'https://i.ibb.co/DzCCyL4/carousel5.png'
},
{
  name:'project3',
  url:'https://i.ibb.co/C20q6ZQ/carousel1.png'
},
{
  name:'project4',
  url:'https://i.ibb.co/mRVjy2Y/carousel2.png'
},
{
  name:'project1',
  url:'https://i.ibb.co/QkR4gTH/carousel3.png'
},


]


const CarouselContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Row className='color-dark pb-5 mb-4'>
      <Container className='my-2'>
        <h4 className='text-center text-white my-4'>
          Here are some of
        <span
            className="text-green ml-2">
            our works
        </span>
        </h4>
        <Slider {...settings}>
         
           {
            projectsData.map(project =>
              <CarouselCard imgUrl={project.url}/>
            )
          } 
        </Slider>
      </Container>
    </Row>
  );
};

export default CarouselContainer;