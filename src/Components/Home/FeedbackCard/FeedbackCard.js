import React from 'react';
import './FeedbackCard.css';

import {
  Col,
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';

import Avatar from '@material-ui/core/Avatar';

const FeedbackCard = ({ name, designation, description }) => {
  return (
    <Col md={4} className='mb-3'>
      <Card className='feedbackCard'>
        <CardTitle className='feedbackCard__header' >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div className='feedbackCard_headerTitle'>
            <span>{name}</span>
            <span>{designation}</span>
          </div>
        </CardTitle>
        <CardText>{description}</CardText>
      </Card>
    </Col>
  );
};

export default FeedbackCard;