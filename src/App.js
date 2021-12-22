import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import IndexRouter from "./routes/IndexRouter";
import "./scss/_base.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <IndexRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
