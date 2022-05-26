import React from "react";
import PropTypes from "prop-types";

const SecondsCard = (prop) => {
	return <div>{prop.number ? prop.number : 0}</div>;
};

SecondsCard.propTypes = {
	number: PropTypes.string.isRequired,
};

export default SecondsCard;
