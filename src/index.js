import "react-app-polyfill/ie9";
import "whatwg-fetch"; // fetch pollyfill
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
