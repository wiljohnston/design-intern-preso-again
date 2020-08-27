import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, color, onClick, text, transparent, style }) => {
  let motion = null;
  if (typeof window !== `undefined`) {
    // eslint-disable-next-line
    motion = require(`framer-motion`).motion;
  }

  const buttonJSX = (
    <button
      type="button"
      className={`button button--${color} ${
        transparent ? `button--transparent` : ``
      } ${className} relative b1`}
      onClick={onClick}
    >
      {text}
    </button>
  );

  return motion !== null ? (
    <motion.div
      style={style}
      className={`${className}`}
      whileHover={{
        scale: 1.025
      }}
      whileTap={{ scale: 0.975 }}
    >
      {buttonJSX}
    </motion.div>
  ) : (
    buttonJSX
  );
};

Button.defaultProps = {
  color: ``,
  className: ``,
  onClick: () => {},
  text: `Button`,
  transparent: false,
  style: {}
};

Button.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  transparent: PropTypes.bool,
  style: PropTypes.shape({})
};

export default Button;
