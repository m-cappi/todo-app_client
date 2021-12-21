/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginSchema } from "../utils/formValidation";
import { login } from "../redux/slices/authSlice";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
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
            type={showPassword ? "text" : "password"}
            className="input"
            name="password"
            id="password"
            required
          />
          <i
            className={`bi ${
              !showPassword ? "bi-eye" : "bi-eye-slash"
            } toggle-password`}
            role="button"
            tabIndex={0}
            onKeyPress={() => setShowPassword((c) => !c)}
            onClick={() => setShowPassword((c) => !c)}
          />
          <ErrorMessage name="password">
            {(error) => <div className="alert">{error}</div>}
          </ErrorMessage>
        </div>
        <div className="input-box">
          <button type="submit" className="button button-primary">
            Inicia Sesion
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
