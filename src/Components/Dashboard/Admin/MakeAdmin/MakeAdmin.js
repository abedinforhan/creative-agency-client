import React from 'react';
import './MakeAdmin.css';
import { useForm } from 'react-hook-form';
import { Button, Row, Col } from 'reactstrap';

const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    fetch('https://polar-dawn-52722.herokuapp.com/addAdminEmail', {
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
  <div className='makeAdmin'>
    <form
      onSubmit={handleSubmit(onSubmit)}>
      <h6>Emaiil</h6>
      <input
        className='makeAdmin__input'
        name="email"
        placeholder="Enter title"
        ref={register({ required: true })}
      />
      <Button>Submit</Button>
    </form>
  </div>
);
};

export default MakeAdmin;