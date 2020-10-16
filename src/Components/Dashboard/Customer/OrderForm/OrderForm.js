import React, { useState,useContext } from 'react';
import './OrderForm.css';
import { useForm } from 'react-hook-form';
import { Button, Row } from 'reactstrap';
import {UserContext} from '../../../../App'

const OrderForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [user,setUser]=useContext(UserContext)
  
  const onSubmit = data => {
    const file=data.file[0]
    const catagory=data.catagory
    const details=data.details
    const email=data.email
    
    const formData = new FormData()

    formData.append('file',file)
    formData.append('catagory',catagory)
    formData.append('details',details)
    formData.append('email',email)

    
  
    fetch('https://polar-dawn-52722.herokuapp.com/addServiceByCustomer', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }
  return (
    <Row className='ml-3'>
        <div className='orderForm'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            defaultValue={user.name}
            ref={register({ required: true })}
          />
          <br />
          <input
            name="email"
            defaultValue={user.email}
            ref={register({ required: true })}
          />
          <br />
          <input
            placeholder="graphic design"
            name="catagory"
            ref={register({ required: true })}
          />
          <br />
          <input
            style={{ height: '80px' }}
            placeholder="Project Details"
            name="details"
            ref={register({ required: true })}
          />
          <br />
          <div className="two__input">
            <input
              placeholder="Price"
              type="number"
              name="price"
              ref={register({ required: true })}
            />
            <input
              className="ml-2"
              type="file"
              name="file"
              ref={register({ required: true })}
             />
          </div>
          <br />
          <br />
          <Button type="submit" >Send</Button>
        </form>
      </div>

    </Row>

  );
};

export default OrderForm;