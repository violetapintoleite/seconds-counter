import React from "react";
import propTypes from "prop-types";
const Buttons = (prop) => {
	return (
		<div>
			<button onClick={() => window.location.reload(false)}>RESET</button>
			<button onClick={() => clearInterval(prop.interval)}>STOP</button>
		</div>
	);
};

Buttons.propTypes = {
	interval: propTypes.func,
};
export default Buttons;
