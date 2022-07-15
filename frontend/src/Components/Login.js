import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CarsList from './CarsList';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
            <button type='submit' onClick={() => loginWithRedirect()}>Sign in</button>
    )
}
export default Login;