/* eslint-disable react/self-closing-comp */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

const Spinner2 = ({ size }) => {
  return <div className={`loading-spinner ${size}`}></div>;
};

Spinner2.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Spinner2.defaultProps = {
  size: null
};

export default Spinner2;
