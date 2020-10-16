import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Customer from './Components/Dashboard/Customer/Customer';
import Admin from './Components/Dashboard/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext=createContext()

function App() {
  const [user,setUser]=useState('t')
  return (
    <UserContext.Provider value={[user,setUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/dashboard/customer'>
          <Customer/>
        </PrivateRoute>
        <PrivateRoute path='/dashboard/admin'>
          <Admin/>
        </PrivateRoute>
        <Route path='*'>
           <h2>Error</h2>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
