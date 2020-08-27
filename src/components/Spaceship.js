import React from "react";
import PropTypes from "prop-types";
import SpaceshipFrame from "~components/svg/SpaceshipFrame";
import staticGIF from "~assets/images/static.gif";

const Spaceship = ({ className, style, maskColour, img }) => {
  return (
    <div className={className} style={style}>
      <figure className="w-full relative">
        <img
          src={img || staticGIF}
          alt="static"
          style={{
            marginLeft: `3.5%`,
            marginTop: `9.6%`,
            width: `52%`,
            borderRadius: `1000px`
          }}
          className="absolute -z-10 transform-center"
        />

        <SpaceshipFrame
          maskColour={maskColour}
          className="w-full relative block"
        />
      </figure>
    </div>
  );
};

Spaceship.defaultProps = {
  className: ``,
  img: null,
  maskColour: null,
  style: {}
};

Spaceship.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  style: PropTypes.shape({}),
  maskColour: PropTypes.string
};

export default Spaceship;
