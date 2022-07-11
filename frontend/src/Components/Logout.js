import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Navbar, NavItem } from 'react-bootstrap';
import DropdownOptions from './DropdownOptions';
import { BrowserRouter, Route } from 'react-router-dom';
import AddMenu from './AddMenu';
import DeleteMenu from './DeleteMenu';
import UpdateMenu from './UpdateMenu';
import UpdateManyMenu from './UpdateManyMenu';

import CarsList from './CarsList';
const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <>
                <Navbar>
                    <NavItem>
                        Hi, you are in Admin panel, welcome!
                    </NavItem>
                    <NavItem style={{ textAlign:'right', marginLeft: '160px' }}>
                        <Button onClick={() => logout()}>Log Out</Button>
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
            </>
        )
    )
}
export default Logout;