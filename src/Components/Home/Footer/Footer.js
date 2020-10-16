import React from 'react';
import './Footer.css';

import { Row, Col } from 'reactstrap';
import FooterForm from '../FooterForm/FooterForm';

const Footer = () => {
  return (
    <Row className='footer container-fluid'>
      <Col
        md={{ size: 3, offset: 1 }}
        className='footer__left'
      >
        <h4>Let Us handle your project, professionally.</h4>
        <p>with all written codes, we build amazing apps for all platforms , mobile and web apps in general  </p>
      </Col>
      <Col md={{ size: 5, offset: 1 }}>
        <FooterForm />
      </Col>
    </Row>
  );
};

export default Footer;