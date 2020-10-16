import React,{ useState} from 'react';
import './AddService.css';
import { useForm } from 'react-hook-form';
import { Button, Row, Col } from 'reactstrap';

const AddService = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  
    const onSubmit = data =>{ 
    const file=data.file[0]
    const title=data.title
    const desc=data.description
    
    const formData = new FormData()
    // formData.append('file', File)
    formData.append('file',file)
    formData.append('title',title)
    formData.append('desc',desc)

    
  
    fetch('https://polar-dawn-52722.herokuapp.com/addServiceByAdmin', {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row className='addService ml-3 p-3'>
        <Col md={6}>
           <h6>Title</h6>
          <input
          className='addService__input'
            name="title"
            placeholder="Enter title"
            ref={register({ required: true })}
          />
          <h6>Description</h6>
          <input
          className='addService__input'
            name="description"
            placeholder="Description"
            ref={register({ required: true })}
          />
        </Col>
        <Col md={6}>
          <h6>Icon</h6>
          <input
          //  onChange={handleFileChange}
            type="file"
            name="file"
            ref={register({ required: true })}
           />
         
        </Col>
        </Row>
        
        <Button >Submit</Button>
        
        </form>
  );
};

export default AddService;