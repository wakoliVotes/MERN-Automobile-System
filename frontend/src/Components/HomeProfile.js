import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import '../App.css';
import CarsList from './CarsList';
import Login from './Login';
import Logout from './Logout';

const HomeProfile = () => {
  return (
      <div className='homeProfile'>
        <h1 className='bannerTag'>Welcome to Kings Autos</h1>
        {/* <h4 className='slogan'>Home of Best Automobile</h4> */}
        <Navbar>
          <NavItem>
            <Login type='submit' className='btnlog' />
          </NavItem>
          <NavItem>
            <Logout type='submit' className='btnlog' />
          </NavItem>
          <NavItem>
            About Us
          </NavItem>
        </Navbar>
        <CarsList />               
      </div>
  )
}
export default HomeProfile;