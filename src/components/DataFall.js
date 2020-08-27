import React, { useRef, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { DocumentContext } from "~context/DocumentContext";

const DataFall = ({
  className,
  fontClass,
  char,
  children,
  interval,
  craziness,
  restTime
}) => {
  const { windowWidth } = useContext(DocumentContext);

  const containerRef = useRef();
  const rulerRef = useRef();
  const heightRulerRef = useRef();

  const [containerWidth, setContainerWidth] = useState(null);
  const [containerHeight, setContainerHeight] = useState(null);

  const [rulerWidth, setRulerWidth] = useState(null);
  const [rulerHeight, setRulerHeight] = useState(null);
  const [charWidth, setCharWidth] = useState(null);
  const [charHeight, setCharHeight] = useState(null);
  const [rulerText, setRulerText] = useState(char);
  const [heightRulerText, setHeightRulerText] = useState(`${char}\n`);
  const [matrix, setMatrix] = useState([[]]);

  const buffer = 1;

  //

  useEffect(() => {
    setTimeout(() => {
      requestAnimationFrame(() => {
        if (
          document?.readyState === `ready` ||
          document?.readyState === `complete`
        ) {
          setContainerWidth(
            containerRef?.current?.getBoundingClientRect()?.width
          );
          setContainerHeight(
            containerRef?.current?.getBoundingClientRect()?.height
          );
        }
      });
    }, 1000);
  }, [containerRef.current, windowWidth, document?.readyState]);

  //

  useEffect(() => {
    setRulerWidth(rulerRef?.current?.getBoundingClientRect()?.width);
    setCharHeight(rulerRef?.current?.getBoundingClientRect()?.height);
  }, [rulerRef.current, rulerRef.current?.innerText]);

  //

  useEffect(() => {
    setRulerHeight(heightRulerRef?.current?.getBoundingClientRect()?.height);
    setCharWidth(heightRulerRef?.current?.getBoundingClientRect()?.width);
  }, [heightRulerRef.current, heightRulerRef.current?.innerText]);

  //

  useEffect(() => {
    if (rulerWidth && charWidth && rulerHeight && charHeight) {
      if (Math.floor(rulerWidth + buffer * charWidth) <= containerWidth) {
        setRulerText(`${rulerText}${char}`);
      } else if (Math.floor(rulerWidth - buffer * charWidth) > containerWidth) {
        setRulerText(rulerText.substring(0, rulerText.length - 1));
      }

      if (Math.floor(rulerHeight + buffer * charHeight) <= containerHeight) {
        setHeightRulerText(`${heightRulerText}${char}\n`);
      } else if (
        Math.floor(rulerHeight - buffer * charHeight) > containerHeight
      ) {
        setHeightRulerText(
          heightRulerText.substring(0, heightRulerText.length - 2)
        );
      }
    }
  }, [rulerText, heightRulerText, charWidth, containerWidth, containerHeight]);

  //

  useEffect(() => {
    requestAnimationFrame(() => {
      setMatrix(
        new Array(Math.floor(heightRulerText.length / 2)).fill(
          new Array(rulerText.length).fill(char)
        )
      );
    });
  }, [heightRulerText, rulerText]);

  //

  const cellOptionsMap = { "0": `*`, "*": `.`, ".": `0` };
  const restingState = `0`;

  const getRandomisedMatrix = () => {
    const newMatrix = matrix.map(row =>
      row.map(cell => {
        const calc = Math.random();
        if (cell !== restingState) {
          // if cell isn't in resting state, it'll evolve depending on the normal random seed
          return calc < craziness ? cellOptionsMap[cell] : cell;
        }
        // but if it's resting, it start to evolve slower – based on restTime
        return calc < craziness / restTime ? cellOptionsMap[cell] : cell;
      })
    );
    return newMatrix;
  };

  //

  useEffect(() => {
    const intervalKey = setInterval(() => {
      requestAnimationFrame(() => {
        if (matrix) {
          setMatrix(getRandomisedMatrix());
        }
      });
    }, interval);

    return () => {
      clearInterval(intervalKey);
    };
  });

  //

  return (
    <div
      className={`${className ||
        `w-full h-full block cursor-pointer`} ${fontClass}`}
      style={{ position: `relative` }}
      ref={containerRef}
    >
      <span
        className="absolute top-0 left-0 whitespace-no-wrap opacity-0"
        ref={rulerRef}
      >
        {rulerText}
      </span>

      <span
        className=" absolute top-0 right-0 whitespace-pre-line opacity-0"
        ref={heightRulerRef}
      >
        {heightRulerText}
      </span>

      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center whitespace-pre-line">
        {matrix.map(row => row.join(``)).join(`\n`)}
      </div>

      {children && children}
    </div>
  );
};

DataFall.defaultProps = {
  className: ``,
  char: `0`,
  interval: 40,
  craziness: 0.05,
  restTime: 0.9999,
  fontClass: `font-mono`,
  children: null
};

DataFall.propTypes = {
  className: PropTypes.string,
  char: PropTypes.string,
  interval: PropTypes.number,
  restTime: PropTypes.number,
  craziness: PropTypes.number,
  fontClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default DataFall;
