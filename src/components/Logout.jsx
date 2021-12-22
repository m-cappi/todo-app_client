import React from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../helpers/localToken";
import { logout } from "../redux/slices/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    removeToken();
    dispatch(logout());
  };
  return (
    <button type="button" onClick={handleLogout} className="logout">
      Cerrar Sesion
    </button>
  );
};

export default Logout;
