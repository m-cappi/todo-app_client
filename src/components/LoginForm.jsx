/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginSchema } from "../utils/formValidation";
import { login } from "../redux/slices/authSlice";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (values) => {
    const payload = { email: values.email, password: values.password };
    dispatch(login(payload))
      .unwrap()
      .then(() => {
        navigate(from, { replace: true });
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className="auth">
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            className="input"
            name="email"
            id="email"
            required
            maxlength="100"
          />
          <ErrorMessage name="email">
            {(error) => <div className="alert">{error}</div>}
          </ErrorMessage>
        </div>
        <div className="input-box">
          <label htmlFor="password">Contraseña</label>
          <div>
            <Field
              type={showPassword ? "text" : "password"}
              className="input"
              name="password"
              id="password"
              required
              maxlength="30"
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
          </div>
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
