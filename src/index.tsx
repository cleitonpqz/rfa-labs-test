import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "server";
import App from "./App";

declare global {
  interface Window {
    env: {
      REACT_APP_API_URL: string;
    };
  }
}

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
