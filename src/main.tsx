import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
