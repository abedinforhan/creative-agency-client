
import React, { useState } from 'react';
import logo from '../../../images/logos/logo.png'
import { Container, Row, Col } from 'reactstrap';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';

import './Admin.css'
import AdminServiceList from './AdminServiceList/AdminServiceList';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import { Link } from 'react-router-dom';



const Admin = () => {
  const [title,setTitle]=useState('Service List')
  const [serviceList, setServiceList] = useState(false)
  const [addServiceList, setAddService] = useState(true)
  const [makeAdmin, setMakeAdmin] = useState(false)

  const handleServiceList = () => {
    setTitle('Service')
    setServiceList(true)
    setAddService(false)
    setMakeAdmin(false)
  }
  const handleAddService = () => {
    setTitle('Add Service')
    setServiceList(false)
    setAddService(true)
    setMakeAdmin(false)
  }
  const handleMakeAdmin = () => {
    setTitle('Make Admin')
    setServiceList(false)
    setAddService(false)
    setMakeAdmin(true)
  }
  return (
    <div className='customer .container-fluid'>
        <Row>
          <Col md={2} className='customer__left'>
           <Link to='/home'>
              <img className='logo' src={logo} />
            </Link>
            <div className='customer__listContainer'>
              <div className='customer__listItem'>
                <ShoppingCartOutlinedIcon />
                <span onClick={handleServiceList} className='ml-2'>Service List</span>
              </div>
              <div className='customer__listItem'>
                <ShoppingCartOutlinedIcon />
                <span
                  onClick={handleAddService}
                  className='ml-2'>
                  Add Service
              </span>
              </div>
              <div className='customer__listItem'>
                <RateReviewOutlinedIcon />
                <span
                  onClick={handleMakeAdmin}
                  className='ml-2'>
                  Make Admin
                </span>
              </div>
            </div>
          </Col>
          <Col md={10} className='customer__right'>
            <Row className='customer__header'>
              <h5>{title}</h5>
              <h5>name</h5>
            </Row>
            {
              serviceList && <AdminServiceList/> 
              ||
              addServiceList && <AddService/> 
              || 
              makeAdmin && <MakeAdmin/>
            }
           </Col>
        </Row>
    </div>
  );
};

export default Admin;