/* eslint-disable jsx-a11y/label-has-associated-control */
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NewTaskSchema } from "../utils/formValidation";

const AddTask = () => {
  const dispatch = useDispatch();
  const initialValues = { summary: "" };
  const handleSubmit = (values) => {
    const payload = { summary: values.summary };
    // dispatch(addTask(payload));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={NewTaskSchema}
    >
      <Form className="add-task">
        <div className="input-box">
          <Field
            type="text"
            className="input"
            name="summary"
            id="summary"
            placeholder="Tarea nueva..."
            required
          />
          <ErrorMessage name="summary">
            {(error) => <div className="alert">{error}</div>}
          </ErrorMessage>
        </div>
        <button type="submit">Agregar</button>
      </Form>
    </Formik>
  );
};

export default AddTask;
