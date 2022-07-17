import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import '../App.css';
import About from './About';
import Cards from './Cards';
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
          <Nav style={{padding: '0 20px 0 20px'}}>
            <a href='#aboutUs'>
              About Us
            </a>
          </Nav>
          <Nav>
            <a href='#socials'>
              Our Socials
            </a>
          </Nav>
        </Navbar>
        <CarsList />
        <About />        
        <Cards />
      </>
    )
  )
}
export default HomeNotAuth;