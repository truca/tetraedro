import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/store";

const ProviderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
