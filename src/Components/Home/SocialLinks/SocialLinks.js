import React from 'react';
import './SocialLinks.css';

import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'


const SocialLinks = () => {
  return (
    <div className='socialLinks .container-fluid'>
      <img src={slack}/>
      <img src={google}/>
      <img src={uber}/>
      <img src={netflix}/>
      <img src={airbnb}/>
    </div>
  
  );
};

export default SocialLinks;