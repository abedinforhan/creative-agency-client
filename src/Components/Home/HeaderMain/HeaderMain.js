import React from 'react';
import './HeaderMain.css';

import Frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
  return (
    <div className='row container mt-4'>
      <div className="offset-md-1 col-md-4">
       <h2>Let's grow your brand to the next level</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolor doloremque itaque labore pariatur ratione?</p>
       <button className="btn btn-dark">
         Hire Me
       </button>
      </div>

      <div className="offset-md-1 col-md-6 img-fluid">
        <img className='headerMain__img' src={Frame}/>
      </div>
      
    </div>
  );
};

export default HeaderMain;