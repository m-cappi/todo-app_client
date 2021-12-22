/* eslint-disable react/self-closing-comp */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

const Spinner = ({ size }) => {
  return <div className={`loading-spinner ${size}`}></div>;
};

Spinner.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Spinner.defaultProps = {
  size: null
};

export default Spinner;
