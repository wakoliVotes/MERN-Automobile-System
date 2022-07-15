import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CarsList from './CarsList';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <>
                <button type='submit' onClick={() => loginWithRedirect()}>Sign in</button>

                <h1 className='text-center'>Kings Auto</h1>
                <h5 className='text-center light'>Home of Best Cars</h5>
                <Navbar className='navbar justify-content-end' >
                    <NavItem>
                        <Login />
                    </NavItem>
                    <NavItem >
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
export default Login;