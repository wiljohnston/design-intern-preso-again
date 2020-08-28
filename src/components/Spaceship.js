import React from "react";
import PropTypes from "prop-types";
import SpaceshipFrame from "~components/svg/SpaceshipFrame";

const Spaceship = ({
  className,
  style,
  maskColour,
  img,
  glassStyle: injectedGlassSyle
}) => {
  const glassStyle = {
    marginLeft: `3.5%`,
    marginTop: `9.6%`,
    width: `52%`,
    height: `57.6%`,
    borderRadius: `1000px`,
    position: `absolute`,
    zIndex: -10,
    top: `50%`,
    left: `50%`,
    transform: `translate3d(-50%, -50%, 0)`,
    ...injectedGlassSyle
  };

  return (
    <div className={className} style={style}>
      <figure className="w-full relative">
        {img ? (
          <img src={img} style={glassStyle} alt="static" />
        ) : (
          <div style={glassStyle} />
        )}

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
  style: {},
  glassStyle: {}
};

Spaceship.propTypes = {
  glassStyle: PropTypes.shape({}),
  className: PropTypes.string,
  img: PropTypes.string,
  style: PropTypes.shape({}),
  maskColour: PropTypes.string
};

export default Spaceship;
