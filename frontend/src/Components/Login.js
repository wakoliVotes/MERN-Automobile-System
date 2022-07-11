import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <>
        <p>
          We are committed to showcasing the best Automobile in the industry. And as our customer, feel free to
          check and once satisfied, you can contact our sales team.
        </p>
        <div className='actionMsg'>
          <h5>Are You An Admin?. . .<Button type='submit' onClick={() => loginWithRedirect()}>Log In</Button> Here:</h5>
        </div>
      </>
    )
  )
}
export default Login;