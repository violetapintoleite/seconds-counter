//import react into the bundle

import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.jsx";

var i = 0;
const myInterval = setInterval(() => {
	++i;

	ReactDOM.render(<Home number={i} />, document.querySelector("#app"));
}, 10);
