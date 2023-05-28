import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./1-App/Routing";
import reportWebVitals from "./7-Shared/setupTest/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routing />);

reportWebVitals();
