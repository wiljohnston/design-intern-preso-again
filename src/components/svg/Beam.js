import React from "react";
import PropTypes from "prop-types";

const Beam = ({ className, id, style }) => (
  <svg
    className={className}
    id={id}
    style={style}
    viewBox="0 0 155 185"
    fill="none"
  >
    <path
      d="M73.9988 13.6946L115.998 13.6946L129.31 184.496L2.02581 151.588L73.9988 13.6946Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="90.8464"
        y1="0.356065"
        x2="64.6572"
        y2="174.789"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.104167" stopColor="#C4C4C4" />
        <stop offset="0.885417" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

Beam.defaultProps = {
  className: ``,
  id: ``,
  style: {}
};

Beam.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.shape({})
};

export default Beam;
