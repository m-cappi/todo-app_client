import React from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/slices/authSlice";
import Logout from "./Logout";

const Header = () => {
  const token = useSelector(selectToken);
  return (
    <header>
      {token && <Logout />}
      <h1>Todo List</h1>
    </header>
  );
};

export default Header;
