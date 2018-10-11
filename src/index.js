import "react-app-polyfill/ie9";
import "whatwg-fetch"; // fetch pollyfill
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
/*import * as api from "./api/api";
import { queryFactory } from "./queryFactory";*/
import { dataGetQueries } from "./store/actions/queries";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();

console.log(process.env.REACT_APP_API_KEY);
dataGetQueries();
