import React from "react";
import PropTypes from "prop-types";
import staticGIF from "~assets/images/static.gif";

const StaticWall = ({ className, numCols, numRows, overlayStyle }) => (
  <div className={`relative ${className}`}>
    {new Array(numRows).fill(
      <ul
        className="overflow-hidden"
        style={{ height: `${Math.ceil(100 / numRows)}%` }}
      >
        {new Array(numCols).fill(
          <li
            style={{ width: `${Math.ceil(100 / numCols)}%` }}
            className="inline-block overflow-hidden"
          >
            <img
              alt="static"
              className="w-full h-full relative block"
              src={staticGIF}
            />
          </li>
        )}
      </ul>
    )}

    <div
      className="w-full h-full absolute top-0 right-0 bottom-0 left-0 bg-white"
      style={overlayStyle}
    />
  </div>
);

StaticWall.defaultProps = {
  className: ``,
  overlayStyle: {},
  numCols: 5,
  numRows: 5
};

StaticWall.propTypes = {
  className: PropTypes.string,
  numCols: PropTypes.number,
  overlayStyle: PropTypes.shape({}),
  numRows: PropTypes.number
};

export default StaticWall;
