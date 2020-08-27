import React from "react";
import PropTypes from "prop-types";

const Bush = ({ className, id }) => (
  <svg className={className} id={id} viewBox="0 0 532 331" fill="none">
    <path
      d="M1 102.386L228.719 276.286L326.792 330L531 180.943L338.883 268.229L443.674 102.386L311.342 234.657L366.425 42.6286L300.594 156.1L205.208 1L274.397 215.857L76.2345 30.5429L228.719 215.857L1 102.386Z"
      fill="#C4C4C4"
      stroke="black"
      strokeWidth="1.5"
    />
  </svg>
);

Bush.defaultProps = {
  className: ``,
  id: undefined
};

Bush.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

export default Bush;
