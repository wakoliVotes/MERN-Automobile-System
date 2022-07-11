import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

class UpdateManyMenu extends Component {
    constructor(props) {
        super(props);
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.handleCurrentOwnerChange = this.handleCurrentOwnerChange.bind(this);
        this.state = {
          error: null,
          currentowner: "",
          owner:""       
    }};

    handleCurrentOwnerChange(event) {
      this.setState({ currentowner: event.target.value});
    }
    
      handleOwnerChange(event) {
        this.setState({ owner: event.target.value});
      }

      handleSubmit(e) {
        fetch("/updatebyowner", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ currentowner: this.state.currentowner, owner: this.state.owner })
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
          <h4>Change owner's name for all cars matching listed owner:</h4>
        <div className="FormContainer">
        <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="carCurrentOwner">
                  <Form.Label column sm={4}>Current Owner:</Form.Label>
                  <Col sm="8">
                  <Form.Control required type="text" placeholder="Enter Current Owner" onChange={this.handleCurrentOwnerChange}></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="carOwner">
                  <Form.Label column sm={4}>New Owner:</Form.Label>
                  <Col sm="8">
                  <Form.Control type="text" placeholder="Enter New Owner" onChange={this.handleOwnerChange}></Form.Control>
                  <Form.Text className="text-white">All current owner matching cars will change to new owner name</Form.Text>
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
export default UpdateManyMenu;