import React, { useEffect, useState } from 'react';
import './Services.css';
import Servicecard from '../serviceCard/Servicecard';
import { Container, Row } from 'reactstrap';


const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://polar-dawn-52722.herokuapp.com/services')
      .then(res => res.json())
      .then(data => {
        setServices(data)
      })
  }, [])

  return (
    <Container>
      <Row className='row services'>
        {
          services.map(service =>
            <Servicecard
              title={service.title}
              desc={service.desc}
              image={service.image}
            />)
        }
      </Row>
    </Container>
  );
};

export default Services;