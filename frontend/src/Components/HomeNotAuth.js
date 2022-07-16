import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
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
          <Nav>
            <a href='#aboutUs'>
              About Us
            </a>
          </Nav>
        </Navbar>
        <CarsList />
        <div className='text-center' id='aboutUs' >
          <div>
            <h1>About Us</h1>
            <h6>Welcome to the Home of Best Cars</h6>
            <h5>Welcome Message</h5>
            <p>As our valued customer, we are happy for deciding to engage with us, and viewing some of our vehicles. With the need in making buying decisions
              the provided information is essential in acting as the benchmark for decision-making. The automobile industry is wide, which makes it essential in considering
              all the availble information as the basis in making choices.</p>
            <p>
              As an organization, Kings Autos has provided you with a summary of core data items, ranging from the car's make, the car's model, and the car's registration number.
              Similarly, Kings Autos provides you with information about the current car owners, of which can be useful in the purchasing process.</p>
            <p>
              Also, to meet the rising car needs of out diverse and globally spread customers, Kings Autos has different car models and makes, ranging from Toyotas, Mercedes Benz, FIAT and many more.
              This aspect is essential, as it helps you as our customer to have access to different options and makde decisions based on personal and professional preferences.
            </p>
            <h5>History</h5>
            <p>Kings Autos was established in 2022, and has continued to offer the best services in the market. We pride ourselves
              in growing over the years, and this has been core in remaining reliable to our customers.
            </p>
            <p>
              Our cliet base has also grown immensely, with the expansion of the company's operations across three (3) different continents, i.e.,
              Asia, Europe and the America's. And with the massive investment that our founders have gathered, there are core plans towards serving more
              customers across the remaining nations, with a focus on more product offerings.

            </p>
            <p>
              The success of our business has highly relied on the efficient cordination and investment in getting the best talents across the industry. Wwith the need to ensure better outcomes,
              our talent acquisition department has taken considerable time in searching for the best talents
            </p>
            <p>
              With our employees, we are committed in ensuring that our clients get the best services, while enjoying the overall experience while interacting with our services. As an organization,
              we are always doing our best in ensuring that each experience is the best, and one can feel satisfied upon visiting our physical offices or when interacting with our services online.
            </p>
            <p>
              With the need to meet all customer, needs, our communication lines are always open, and we always have people ready to offer the right information and support upon request.
              Irrespective of the time, we have a dedicated team of customer service representatives, willing to hear and offer the needed support. Moreover, as an organization, we understand that
              our customers comes from different regions, and with this we are always working to meet everyone's needs. As such, we have custoemr care representatives that are skilled in multiple languages,
              ready to talk to anyone, from anywhere across the world.
            </p>
            <h5>Our Services</h5>
            <p>Kings Autos is committed in offering the bellow services to our customers:</p>
            <div className='ourservices'>
            <ListGroup>
              <ListGroup.Item variant='primary'>Car importation from overseas</ListGroup.Item>
              <ListGroup.Item>Car's inspection and valuations</ListGroup.Item>
              <ListGroup.Item variant='primary'>Car's transportation from one region to another, by sea</ListGroup.Item>
              <ListGroup.Item>Car's trade ins for specific models and makes since 2015</ListGroup.Item>
              <ListGroup.Item variant='primary'>Car hiring for special occasions across specific timeListGroup.Itemnes</ListGroup.Item>
              <ListGroup.Item>Car buying for specific models and manufacture years</ListGroup.Item>
              <ListGroup.Item variant='primary'>Car related consultation for proper decision making</ListGroup.Item>
            </ListGroup>
            </div>

          </div>
        </div>
      </>
    )
  )
}
export default HomeNotAuth;