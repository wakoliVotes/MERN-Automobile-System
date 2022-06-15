import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

  
const CarForm = (props) => {
  const validationSchema = Yup.object().shape({
    carbrand: Yup.string().required("Required"),
    cartype: Yup.string().required("Required"),
    carstatus: Yup.string().required("Required"),
    countryOfman: Yup.string().required("Required"),
    yearOfman: Yup.date().required("Required"),
    price: Yup.number().required("Required"),
    prevowners: Yup.number().required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
          Car Brand:
            <Field name="carbrand" type="text" 
                className="form-control" />
            <ErrorMessage
              name="carbrand"
              className="d-block invalid-feedback"
              component="span"
            />           
          </FormGroup>
          <FormGroup>
          Car Type:
            <Field name="cartype" type="text" 
                className="form-control" />
            <ErrorMessage
              name="cartype"
              className="d-block invalid-feedback"
              component="span"
            />           
          </FormGroup>
          <FormGroup>
          Status-New/Old:
            <Field name="carstatus" type="text" 
                className="form-control" />
            <ErrorMessage
              name="carstatus"
              className="d-block invalid-feedback"
              component="span"
            />           
          </FormGroup>
          <FormGroup>
          Country of Manufacture:
            <Field name="countryOfman" type="text" 
                className="form-control" />
            <ErrorMessage
              name="countryOfman"
              className="d-block invalid-feedback"
              component="span"
            />           
          </FormGroup>
          <FormGroup>
          Year of Manufacture:
            <Field name="yearOfman" type="number" 
                className="form-control" />
            <ErrorMessage
              name="yearOfman"
              className="d-block invalid-feedback"
              component="span"
            />           
          </FormGroup>
          <FormGroup>
          Price:
            <Field name="price" type="number" 
                className="form-control" />
            <ErrorMessage
              name="price"
              className="d-block invalid-feedback"
              component="span"
            />           
          </FormGroup>
          <FormGroup>
          No. of Previous Owners:
            <Field name="prevowners" type="number" 
                className="form-control" />
            <ErrorMessage
              name="prevowners"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button className="btn-look" variant="danger" size="md" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default CarForm;