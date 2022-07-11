import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class DropdownOptions extends Component {


    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Choose CRUD Operation to Perform
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/AddMenu">Create/Add Vehicle</Dropdown.Item>
                    <Dropdown.Item href="/UpdateMenu">Update One Vehicle</Dropdown.Item>
                    <Dropdown.Item href="/UpdateManyMenu">Update Many - Owner</Dropdown.Item>
                    <Dropdown.Item href="/DeleteMenu">Delete Vehicle</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
};

export default DropdownOptions;