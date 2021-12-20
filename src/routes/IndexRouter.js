/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppRouter from "./AppRouter";
import { reauthenticate } from "../redux/slices/authSlice";
import AuthRouter from "./AuthRouter";
import { getToken } from "../helpers/localToken";

const IndexRouter = () => {
  const localToken = getToken();
  const dispatch = useDispatch();

  useEffect(() => {
    // Refresh your last session
    if (localToken) {
      dispatch(reauthenticate(localToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
          localToken ? <AppRouter {...props} /> : <Redirect to="/auth/login" />
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
