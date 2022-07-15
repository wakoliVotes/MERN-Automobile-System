import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CarsList from './CarsList';

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        // displays sign in button, only if nOT authenticated with Auth0
        !isAuthenticated && (
            <button type='submit' onClick={() => loginWithRedirect()}>Sign in</button>
    )
    )
}
export default Login;