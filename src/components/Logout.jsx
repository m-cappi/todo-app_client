import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../helpers/localToken";
import { logout } from "../redux/slices/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <button type="button" onClick={handleLogout} className="logout">
      Cerrar Sesion
    </button>
  );
};

export default Logout;
