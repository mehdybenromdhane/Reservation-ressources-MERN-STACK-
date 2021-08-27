import React from "react";
import ReactDOM from "react-dom";
import "@material-tailwind/react/tailwind.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "react-datetime/css/react-datetime.css";

import App from "./App";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
