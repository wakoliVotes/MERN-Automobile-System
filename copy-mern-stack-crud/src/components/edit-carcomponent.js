// This section is for updating details
// We have reusable carForm component
// We will fetch car details to reinitilise form


// Importing Required Modules
import React, { useEffect, useState } from "react";
import axios from 'axios';
import CarForm from "./CarForm";

// Edit car Component
const EditCar = (props) => {
    // Use state
    const [formValues, setFormValues] = useState({
        carbrand:"",
        cartype:"",
        email:"",
        carstatus:"",
        countryOfman:"",
        yearOfman:"",
        price:"",
        prevowners:"",
    });

    // onSubmit handler
    const onSubmit = (carObject) => {
        axios.put('http://localhost:4000/cars/update-car/' +
            props.match.params.id, carObject
        )
        .then((res) => {
            if (res.status === 200) {
                alert("Car Updated Successfully");
                props.history.push("/car-list");
            } else Promise.reject();
        })
        .catch((err) => alert("Error! Something Went Wrong"));
    };

    // Load data from server and reinitialize car form
    useEffect(() => {
        axios.get('http://localhost:4000/cars/update-car/'
            + props.match.params.id
        )
            .then((res) => {
                const { carbrand, cartype, carstatus, countryOfman, yearOfman, price, prevowners } = res.data;
                setFormValues({ carbrand, cartype, carstatus, countryOfman, yearOfman, price, prevowners });
            })
            .catch((err) => console.log(err));
    }, []);   // saves the update in updated list


    // Return the car form upon updating
    return (
        <CarForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
            Update Car
        </CarForm>
    );
}

// Export EditCar Component
export default EditCar;