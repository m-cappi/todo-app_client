/* eslint-disable jsx-a11y/label-has-associated-control */
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, selectTaskStatus } from "../redux/slices/tasksSlice";
import { NewTaskSchema } from "../utils/formValidation";
import Spinner from "./Spinner";

const TaskAdd = () => {
  const taskStatus = useSelector(selectTaskStatus);
  const dispatch = useDispatch();

  const initialValues = { summary: "" };

  const handleSubmit = (values, { resetForm }) => {
    const payload = { summary: values.summary };
    dispatch(addTask(payload));
    resetForm(initialValues);
  };

  // if the app is waiting for the server, it disables the add button and shows a spinner
  const isLoading = taskStatus === "loading";

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
            maxlength="50"
          />
          <button type="submit" className="btn-add" disabled={isLoading}>
            {isLoading ? (
              <Spinner size="small" />
            ) : (
              <>
                <i className="bi bi-calendar-plus" />
                <span>Agregar</span>
              </>
            )}
          </button>
        </div>
        <ErrorMessage name="summary">
          {(error) => <div className="alert">{error}</div>}
        </ErrorMessage>
      </Form>
    </Formik>
  );
};

export default TaskAdd;
