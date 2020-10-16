
import React, { useContext, useState } from 'react';
import logo from '../../../images/logos/logo.png'
import { Container, Row, Col } from 'reactstrap';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';

import './Customer.css'
import OrderForm from './OrderForm/OrderForm';
import ReviewForm from './ReviewForm/ReviewForm';
import ServiceList from './ServiceList/ServiceList';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';


const Customer = () => {
  const [user,setUser]=useContext(UserContext)
  const [title,setTitle]=useState('order')
  const [order, setOrder] = useState(true)
  const [serviceList, setServiceList] = useState(false)
  const [review, setReview] = useState(false)

  const handleOrder = () => {
    setTitle('Order')
    setOrder(true)
    setReview(false)
    setServiceList(false)
  }
  const handleReview = () => {
    setTitle('Review')
    setOrder(false)
    setReview(true)
    setServiceList(false)
  }
  const handleServiceList = () => {
    setTitle('Services')
    setOrder(false)
    setReview(false)
    setServiceList(true)
  }
  return (
    <div className='customer'>
        <Row>
          <Col md={2} className='customer__left'>
           <Link to='/home'>
             <img className='logo' src={logo} />
           </Link>
            <div className='customer__listContainer'>
              <div className='customer__listItem'>
                <ShoppingCartOutlinedIcon />
                <span onClick={handleOrder} className='ml-2'>Order</span>
              </div>
              <div className='customer__listItem'>
                <ShoppingCartOutlinedIcon />
                <span
                  onClick={handleServiceList}
                  className='ml-2'>
                  Service List
              </span>
              </div>
              <div className='customer__listItem'>
                <RateReviewOutlinedIcon />
                <span
                  onClick={handleReview}
                  className='ml-2'>
                  Review
                </span>
              </div>
            </div>
          </Col>
          <Col md={10} className='customer__right'>
            <Row className='customer__header'>
              <h5>{title}</h5>
              <h5>{user.name}</h5>
            </Row>
            {
              order && <OrderForm /> || review && <ReviewForm /> || serviceList && <ServiceList />
            }
           </Col>
        </Row>
    </div>
  );
};

export default Customer;