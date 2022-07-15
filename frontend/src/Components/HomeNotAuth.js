import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import '../App.css';
import CarsList from './CarsList';
import Login from './Login';
import Logout from './Logout';

const HomeNotAuth = () => {
  const { isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <>
        <h1 className='text-center'>Kings Auto</h1>
        <h5 className='text-center light'>Home of Best Cars</h5>
        <Navbar className='navbar justify-content-end' >
          <NavItem>
            <Login />
          </NavItem>
          <NavItem>
            <Logout />
          </NavItem>
          <NavItem>
            <Nav.Link href='/About'>
              About
            </Nav.Link>
          </NavItem>
        </Navbar>
        <CarsList />
      </>
    )
  )
}
export default HomeNotAuth;