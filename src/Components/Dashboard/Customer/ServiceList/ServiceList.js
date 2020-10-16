import React, { useEffect, useState } from 'react';
import {Row} from 'reactstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Servicelist.css';

const ServiceList = () => {

  const [services,setServices]=useState([])
  
  useEffect(()=>{
    fetch('https://polar-dawn-52722.herokuapp.com/servicesByCustomer?email=farhanengn@gmail.com')
    .then(res=>res.json())
    .then(data=> setServices(data))
  },[services])

  return (
   <Row className='ml-3'>
   {
     services.map((service)=>
     <ServiceCard
     catagory={service.catagory}
     details={service.details}
     image={service.image}
     />
     )
   }
   </Row>
  );
};

export default ServiceList;