import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login({ email: "demo@mail.com", password: "demo123" }))
      .unwrap()
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <p>Login page</p>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
