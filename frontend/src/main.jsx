import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { store } from "./store/store.mjs";
import { Provider } from "react-redux";
import { CheckInProvider } from "./Pages/CheckContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CheckInProvider>
          <App />
        </CheckInProvider>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
