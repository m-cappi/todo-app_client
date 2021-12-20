/* eslint-disable jsx-a11y/label-has-associated-control */
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/slices/authSlice";
import { RegisterSchema } from "../utils/formValidation";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "", confirmPassword: "" };
  const handleSubmit = (values) => {
    const payload = { email: values.email, password: values.password };
    dispatch(register(payload));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            className="input"
            name="email"
            id="email"
            required
          />
          <ErrorMessage name="email">
            {(error) => <div className="alert">{error}</div>}
          </ErrorMessage>
        </div>
        <div className="input-box">
          <label htmlFor="password">Contraseña</label>
          <Field
            type="password"
            className="input"
            name="password"
            id="password"
            required
          />
          <ErrorMessage name="password">
            {(error) => <div className="alert">{error}</div>}
          </ErrorMessage>
        </div>
        <div className="input-box">
          <label htmlFor="confirmPassword">Contraseña</label>
          <Field
            type="password"
            className="input"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
          <ErrorMessage name="confirmPassword">
            {(error) => <div className="alert">{error}</div>}
          </ErrorMessage>
        </div>
        <div className="input-box">
          <button type="submit" className="button button-primary">
            Registrate
          </button>
        </div>
        <span>
          ¿Ya tienes una cuenta?{" "}
          <Link to="/auth/login" className="button">
            Inicia sesion!
          </Link>
        </span>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
