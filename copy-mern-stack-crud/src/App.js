// Editing to include the menu to make the routing to the app

// React and Bootstrap
import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Importing Custom CSS
import "./App.css"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateCar from "./components/create-carcomponent";

import EditCar from "./components/edit-carcomponent";
import CarList from "./components/car-listcomponent";


// App Component

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-car"}
                  className="nav-link"
                >
                  MERN Stack Car App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end" >
                <Nav>
                  <Link to={"/create-car"}
                    className="nav-link"
                  >
                    Add New Car
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/car-list"}
                    className="nav-link">
                    Available Cars List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/cars" element={<CreateCar />} />
                  <Route path="/create-car" element={<CreateCar />} />
                  <Route path="/edit-car/:id" element={<EditCar />} />
                  <Route path="/car-list" element={<CarList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;