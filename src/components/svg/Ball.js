import React from "react";
import PropTypes from "prop-types";

const Ball = ({ className, id }) => (
  <svg id={id} className={className} viewBox="0 0 102 100" fill="none">
    <path
      d="M101.25 45.86C101.25 55.2372 101.165 63.2646 100.387 70.0482C99.6103 76.8319 98.148 82.2994 95.4421 86.5867C90.0825 95.0786 79.6304 99.243 58.725 99.25C34.7007 95.8664 22.0515 89.2404 14.4941 80.7787C7.83052 73.3177 5.05102 64.371 2.01477 54.5978C1.60503 53.2789 1.19061 51.945 0.761341 50.5976C2.11754 36.6145 4.5064 24.1983 11.3463 15.2582C18.1658 6.34469 29.527 0.75 49.1947 0.75C69.0223 0.75 81.9649 2.86118 89.9833 9.45236C97.9532 16.0037 101.25 27.1583 101.25 45.86Z"
      fill="#C4C4C4"
      stroke="black"
      strokeWidth="1.5"
    />
  </svg>
);

Ball.defaultProps = {
  className: ``,
  id: undefined
};

Ball.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

export default Ball;
