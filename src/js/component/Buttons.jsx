import React from "react";
const Buttons = () => {
	return (
		<div>
			<button onClick={() => window.location.reload(false)}>RESET</button>
			<button onClick={() => clearInterval(myInterval)}>STOP</button>
		</div>
	);
};

export default Buttons;
