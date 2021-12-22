/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // "react-router-dom": "^6.2.1",
import { useDispatch } from "react-redux";
import { reauthenticate } from "../redux/slices/authSlice";
import { getToken } from "../helpers/localToken";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TaskPage from "../pages/TaskPage";
import NotFoundPage from "../pages/NotFoundPage";

const IndexRouter = () => {
  const localToken = getToken();
  const dispatch = useDispatch();

  useEffect(() => {
    // Refreshes your last session
    if (localToken) {
      dispatch(reauthenticate(localToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <TaskPage />
            </RequireAuth>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
