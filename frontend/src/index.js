import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";


import "./index.css"; // Ensure the path is correct
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  // </React.StrictMode>
);
