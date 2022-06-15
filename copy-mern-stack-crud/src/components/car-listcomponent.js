// This step displays the student details in a table
// We fetch student's data and iterate over it to create table row for every student

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import  CarTableRow from "./CarTableRow";

const CarList = () => {
    // useState, the initial state was an empty array
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:4000/cars/car-list/')
        .then(({ data }) => {
            setCars(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const DataTable = () => {
        return cars.map((res, i) => {
            return <CarTableRow obj={res} key={i} />
        });
    };
    return (
        <div className="table-wrapper">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Car Brand</th>
                    <th>Car Type</th>
                    <th>Status-New/Old</th>
                    <th>Country Of Manufacture</th>
                    <th>Year Of Manufacture</th>
                    <th>Price</th>
                    <th>Previous Owners</th>
                </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default CarList;