import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        // displays sign out button, only if Authenticated with Auth0
        isAuthenticated && (
            <>
                <button onClick={() => logout()}>Sign out</button>
            </>
        )
    )
}
export default Logout;