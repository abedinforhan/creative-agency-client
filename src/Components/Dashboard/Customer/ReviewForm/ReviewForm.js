import React from 'react';
import './Reviewform.css';
import { useForm } from 'react-hook-form';
import { Button, Row } from 'reactstrap';

const ReviewForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    fetch('https://polar-dawn-52722.herokuapp.com/addReviewByCustomer', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
  return (
    <Row className='ml-3'>
      <div className='orderForm'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            placeholder="Your name"
            ref={register({ required: true })}
          />
          <input
            name="designation"
            placeholder="Your name/company's name"
            ref={register({ required: true })}
          />
          <input
            style={{ height: '80px' }}
            name="description"
            placeholder="Description"
            ref={register({ required: true })}
          />
          <br />
          <br />
          <Button type="submit" >Send</Button>
        </form>
      </div>
    </Row>


  );
};

export default ReviewForm;