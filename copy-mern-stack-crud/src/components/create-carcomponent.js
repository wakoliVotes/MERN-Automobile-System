// Create car component to add new car

// Import modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CarForm from "./CarForm";

// CreateCar Component

const CreateCar = () => {
    // useState
    const [formValues, setFormValues] = useState({
        carbrand: "",
        cartype: "",
        carstatus: "",
        countryOfman: "",
        yearOfman: "",
        price: "",
        prevowners: "",
    })

    // onsubmit handler
    const onSubmit = (carObject) => {
        axios.post(
            'http://localhost:4000/cars/create-car', carObject)
            .then(res => {
                if (res.status === 200)
                alert('Car Created Successfully')
                else
                    Promise.reject()
            })
            .catch(err => alert('Error! Something Went Wrong !'))
    }
    // Return car form
    return (
        <CarForm initialValues ={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        Create Car

        </CarForm>
    )
}
// Export CreateCar Component
export default CreateCar;