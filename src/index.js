import "react-app-polyfill/ie9";
import "whatwg-fetch"; // fetch pollyfill
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
/*import * as api from "./api/api";
import { queryFactory } from "./queryFactory";
import { dataCreateQuery } from "./store/actions/queries";*/

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
