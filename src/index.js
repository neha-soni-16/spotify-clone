import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import DataLayer from "./DataLayer";
import App from "./Components/App";
import { reducer, initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <DataLayer reducer={reducer} initialState={initialState}>
            <App />
        </DataLayer>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
