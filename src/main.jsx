import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormspreeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FormspreeProvider>
);
