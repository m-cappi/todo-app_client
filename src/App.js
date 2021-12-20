import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import IndexRouter from "./routes/IndexRouter";
import "./scss/_base.scss";

const App = () => {
  return (
    <Provider store={store}>
      <IndexRouter />
    </Provider>
  );
};

export default App;
