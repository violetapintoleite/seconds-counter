import React from "react";
import SecondsCard from "./SecondsCard.jsx";
import IconCard from "./IconCard.jsx";
import Buttons from "./Buttons.jsx";
import propTypes from "prop-types";
//include images into your bundle

//create your first component

const Home = (prop) => {
	var digit = "" + prop.number;

	return (
		<div>
			<div className="container">
				<div className="row row-cols-7">
					<div className="col">
						<IconCard />
					</div>
					<div className="col">
						<SecondsCard number={digit[digit.length - 6]} />
					</div>
					<div className="col">
						<SecondsCard number={digit[digit.length - 5]} />
					</div>
					<div className="col">
						<SecondsCard number={digit[digit.length - 4]} />
					</div>
					<div className="col">
						<SecondsCard number={digit[digit.length - 3]} />
					</div>
					<div className="col">
						<SecondsCard number={digit[digit.length - 2]} />
					</div>
					<div className="col">
						<SecondsCard number={digit[digit.length - 1]} />
					</div>
				</div>
			</div>
			<div className="buttons">
				<Buttons />
			</div>
		</div>
	);
};

Home.propTypes = {
	number: propTypes.number.isRequired,
};
export default Home;
