import React, { useContext, useState } from 'react';

import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import './Login.css';

import logo from '../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router-dom";

import { googleSignIn, initializeFirebase } from './loginManager';
import { UserContext } from '../../App';



const Login = () => {
  initializeFirebase();

  const [user, setUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false)

  let history = useHistory();
  let location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        setUser(result)
        fetch(`https://polar-dawn-52722.herokuapp.com/checkAdmin?email=${result.email}`)
          .then(res => res.json())
          .then(data => {
            setIsAdmin(data)
            if (data) {
              history.push('/dashboard/admin')
            }
            else {
              history.push('/dashboard/customer')
            }
          })
      })
  }

  return (
    <div className='login'>

      <img
        src={logo}
      />
      <div className='login__container'>
        <h5>Login With</h5>

        <Button
          onClick={handleGoogleSignIn}
          className='login__googleBtn'>
          Continue with Google
     </Button>
        <p>
          Don't have an account?
         <Link to='/login' >
            Create an account
         </Link>
        </p>


      </div>
    </div>
  );
};

export default Login;