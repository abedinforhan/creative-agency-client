import React,{ useEffect, useState} from 'react';
import './ClientFeedback.css'
import { Container,Row} from 'reactstrap';
import FeedbackCard from '../FeedbackCard/FeedbackCard';


const ClientFeedback = () => {
  
  const [reviews,setReviews]=useState([])
  
  useEffect(()=>{
  fetch('https://polar-dawn-52722.herokuapp.com/reviews')
  .then(res=>res.json())
  .then(data=> setReviews(data))
  },[reviews])

  return (
    <Container className='ClientsFeedback'>
      <h4 className='text-center mb-4'>
          Clients 
        <span className='text-green ml-1'>Feedback</span>
        </h4>
      <Row>
       {
          reviews.map(review =>
            <FeedbackCard 
             name={review.name}
             designation={review.designation}
             description={review.description}
            />)
       }
      </Row>
    </Container>
  );

}
export default ClientFeedback;