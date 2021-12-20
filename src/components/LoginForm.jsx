/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginSchema } from "../utils/formValidation";
import { login } from "../redux/slices/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };
  const handleSubmit = (values) => {
    const payload = { email: values.email, password: values.password };
    dispatch(login(payload));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
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
          <button type="submit" className="button button-primary">
            Login
          </button>
        </div>
        <span>
          ¿Aún no tienes una cuenta?{" "}
          <Link to="/auth/register" className="button">
            Registrate!
          </Link>
        </span>
      </Form>
    </Formik>
  );
};

export default LoginForm;
