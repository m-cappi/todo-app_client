import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/slices/authSlice";
import { getToken } from "../helpers/localToken";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const localToken = getToken();
  const token = useSelector(selectToken);

  if (!localToken) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
