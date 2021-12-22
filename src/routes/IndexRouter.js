/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
// import { Switch, Route, Redirect, useHistory } from "react-router-dom"; // "react-router-dom": "5.3.0",
import { Routes, Route } from "react-router-dom"; // "react-router-dom": "^6.2.1",
import { useDispatch, useSelector } from "react-redux";
import { reauthenticate, selectToken } from "../redux/slices/authSlice";
import { getToken } from "../helpers/localToken";
// import AppRouter from "./AppRouter";
// import AuthRouter from "./AuthRouter";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import Layout from "./Layout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RequireAuth from "./RequireAuth";
import TaskPage from "../pages/TaskPage";

const IndexRouter = () => {
  // const token = useSelector(selectToken);
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
      </Route>
    </Routes>
  );
};

export default IndexRouter;

// "react-router-dom": "^6.2.1",
// const IndexRouter = () => {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route path="/auth/login" element={<LoginPage />} />
//         <Route path="/auth/register" element={<RegisterPage />} />
//         <Route
//           path="/"
//           element={
//             <RequireAuth>
//               <TaskPage />
//             </RequireAuth>
//           }
//         />
//       </Route>
//     </Routes>
//   );
// };

//  "react-router-dom": "5.3.0",
/* <>
<Header />
<Switch>
  <Route
    path="/auth"
    component={(props) =>
      !localToken ? <AuthRouter {...props} /> : <Redirect to="/" />
    }
  />
  <Route
    path="/"
    component={(props) =>
      localToken ? (
        <AppRouter {...props} />
      ) : (
        <Redirect to="/auth/login" />
      )
    }
  />
</Switch>
<Footer />
</> */
