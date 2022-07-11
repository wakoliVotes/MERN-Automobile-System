import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

class DeleteMenu extends Component {
    constructor(props) {
        super(props);
        this.handleRegistrationChange = this.handleRegistrationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          error: null,
          registration:""
    }};

      handleRegistrationChange(event) {
        this.setState({ registration: event.target.value});
      }

      handleSubmit(e) {
        fetch("/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ registration: this.state.registration }),
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
          <h1>Delete Car in Collection:</h1>
        <div className="FormContainer">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="carRegistration">
                  <Form.Label column sm={4}>Registration No.:</Form.Label>
                  <Col sm="8">
                  <Form.Control required type="text" placeholder="Enter Registration No." onChange={this.handleRegistrationChange}></Form.Control>
                  <Form.Text className="text-white">Enter Regn. No to delete a Vehicle</Form.Text>
                  </Col>
                </Form.Group>
                <Button variant="danger" type="submit">
                  Delete
                </Button>
              </Form>
        </div>
        </div>
      );
    }
  }
}


export default DeleteMenu;