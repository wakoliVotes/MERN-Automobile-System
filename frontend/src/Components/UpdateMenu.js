import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

class UpdateMenu extends Component {
    constructor(props) {
        super(props);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleMakeChange = this.handleMakeChange.bind(this);
        this.handleRegistrationChange = this.handleRegistrationChange.bind(this);
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          error: null,
          model:"",
          make:"",
          registration:"",
          owner:"",
          year:"",
          
    }};

    handleModelChange(event) {
        this.setState({ model: event.target.value });
    }
  
      handleMakeChange(event) {
        this.setState({ make: event.target.value});
      }
  
      handleRegistrationChange(event) {
        this.setState({ registration: event.target.value});
      }
  
      handleOwnerChange(event) {
        this.setState({ owner: event.target.value});
      }

      handleYearChange(event) {
        this.setState({ year: event.target.value});
      }

      handleSubmit(e) {
        fetch("/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ model: this.state.model, make: this.state.make, year: this.state.year, registration: this.state.registration, owner: this.state.owner })
            }).then(res => res.json())
            .then(response => alert('Success:', JSON.stringify(response)))
            .catch(error => console.log('Error:', error));
    }


render(){
    const { error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else {
      return(
        <div className="App">
          <h1>Update One Car:</h1>
        <div className="FormContainer">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="carRegistration">
                  <Form.Label column sm={4}>Registration ID:</Form.Label>
                  <Col sm="8">
                  <Form.Control required type="text" placeholder="Enter Registration ID" onChange={this.handleRegistrationChange}></Form.Control>
                  <Form.Text className="text-white">Regn. No. needed to modify</Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="carMake">
                  <Form.Label column sm={4}>Make:</Form.Label>
                  <Col sm="8">
                  <Form.Control type="text" placeholder="Enter Make ex. Nissan, Toyota, BMW" onChange={this.handleMakeChange}></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="carModel">
                  <Form.Label column sm={4}>Model:</Form.Label>
                  <Col sm="8">
                  <Form.Control type="text" placeholder="Enter Model ex. Rogue, Pathfinder, Pickup" onChange={this.handleModelChange}></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="carYear">
                  <Form.Label column sm={4}>Year:</Form.Label>
                  <Col sm="8">
                  <Form.Control type="number" placeholder="Enter Year" onChange={this.handleYearChange}></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="carOwner">
                  <Form.Label column sm={4}>Owner:</Form.Label>
                  <Col sm="8">
                  <Form.Control type="text" placeholder="Enter Owner's Name" onChange={this.handleOwnerChange}></Form.Control>
                  </Col>
                </Form.Group>
                <Button variant="warning" type="submit">
                  Update
                </Button>
              </Form>
        </div>
        </div>
      );
    }
  }
}


export default UpdateMenu;