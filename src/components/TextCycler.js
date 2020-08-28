import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "underscore";
import text from "~assets/text";
import { splitStringToParagraphs } from "~utils/helpers";

const textArray = _.shuffle(splitStringToParagraphs(text));
const numParagraphs = textArray.length;

const TextCycler = ({ className, style, cycling, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (cycling) {
      const intervalToClear = setInterval(() => {
        requestAnimationFrame(() => {
          setCurrentIndex(oldIndex => (oldIndex + 1) % numParagraphs);
        });
      }, interval);
      return () => clearInterval(intervalToClear);
    }

    return undefined;
  }, [cycling]);

  return (
    <div className={className} style={style}>
      {textArray[currentIndex]}
    </div>
  );
};

TextCycler.defaultProps = {
  className: ``,
  style: {},
  interval: 50
};

TextCycler.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  cycling: PropTypes.bool.isRequired,
  interval: PropTypes.number
};

export default TextCycler;
