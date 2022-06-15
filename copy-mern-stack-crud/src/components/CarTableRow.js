// In this step, we are returnng table row which is responsible to display car data

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

const CarTableRow = (props) => {
    const { _id, carbrand, cartype, carstatus, countryOfman, yearOfman, price, prevowners } = props.obj;

    const deleteCar = () => {
        axios.delete('http://localhost:4000/cars/delete-car/' + _id).then((res) => {
                if (res.status === 200) {
                    alert("Car successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went terribly wrong"));
    };
    return (
        <tr>
            <td>{carbrand}</td>
            <td>{cartype}</td>
            <td>{carstatus}</td>            
            <td>{countryOfman}</td>
            <td>{yearOfman}</td>
            <td>{price}</td>
            <td>{prevowners}</td>
            <td>
                <Link className="edit-link"
                    to={"/edit-car/" + _id}>
                    Edit
                </Link>
                <Button onClick={deleteCar}
                size='sm' variant="danger">
                Delete
                </Button>
            </td>
        </tr>
    );
};

export default CarTableRow;