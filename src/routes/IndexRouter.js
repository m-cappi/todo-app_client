/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import AppRouter from "./AppRouter";
import { selectToken } from "../redux/slices/authSlice";
import AuthRouter from "./AuthRouter";

const IndexRouter = () => {
  const token = useSelector(selectToken, shallowEqual);

  return (
    <Switch>
      <Route
        path="/auth"
        component={(props) =>
          !token ? <AuthRouter {...props} /> : <Redirect to="/" />
        }
      />
      <Route
        path="/"
        component={(props) =>
          token ? <AppRouter {...props} /> : <Redirect to="/auth/login" />
        }
      />
    </Switch>
  );
};

export default IndexRouter;

// React-router-dom @6
// const IndexRouter = () => {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
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