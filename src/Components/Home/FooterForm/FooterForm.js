import React from 'react';
import './FooterForm.css';

import { useForm } from "react-hook-form";




const FooterForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  
  return (
    <form
    className='footerForm' 
    onSubmit={handleSubmit(onSubmit)}
    >
   
      <input 
      className='footerForm__input'
      name="email" 
      defaultValue="Your Email Address"
      ref={register({ required: true })} 
      />
      <input 
      className='footerForm__input'
      name="name" 
      defaultValue="Your Name / company's name"
      ref={register({ required: true })} 
      />
      <input 
      className='footerForm__message'
      name="message" 
      defaultValue="Your message"
      ref={register({ required: true })} 
      />
      <br/>
      <input
      className='footerForm__sendBtn'
       type="submit" value='Send' />
      
    </form>
  );
};

export default FooterForm;