import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <img className='navbar__logo' src={logo} />


      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Our Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Our Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Conatct Us</a>
          </li>
          <Link to='/login'>
            <button className="btn btn-dark">
              Login
          </button>
          </Link>


        </ul>

      </div>
    </nav>
  );
};

export default Navbar;