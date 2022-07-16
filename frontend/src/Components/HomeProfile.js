import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import '../App.css';
import CarsList from './CarsList';
import Login from './Login';
import Logout from './Logout';
import { BrowserRouter, Route } from 'react-router-dom';
import AddMenu from './AddMenu';
import DeleteMenu from './DeleteMenu';
import UpdateMenu from './UpdateMenu';
import UpdateManyMenu from './UpdateManyMenu';
import DropdownOptions from './DropdownOptions';

const HomeProfile = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
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
        </Navbar>
        <div className='actionMsg'>
          <BrowserRouter>
            <nav className="navbar navbar-expand-lg fixed-top" id="sideNav">
              <DropdownOptions />
              <Route path="/AddMenu" component={AddMenu} />
              <Route path="/UpdateMenu" component={UpdateMenu} />
              <Route path="/UpdateManyMenu" component={UpdateManyMenu} />
              <Route path="/DeleteMenu" component={DeleteMenu} />
              <Route path="/CarsList" component={CarsList} />
            </nav>
          </BrowserRouter>
        </div>
        <CarsList />
      </>
    )
  )
}
export default HomeProfile;