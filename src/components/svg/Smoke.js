import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Smoke = ({ className, colour, style, drift, interval }) => {
  const getRandomScale = () =>
    `scale3d(${1 + Math.random() * drift}, ${1 +
      Math.random() * (drift / 2)}, 0)`;

  const getNewScales = () =>
    new Array(12).fill(null).map(() => getRandomScale());

  const [scales, setScales] = useState(getNewScales());

  useEffect(() => {
    const intervalSet = setInterval(() => {
      setScales(getNewScales());
    }, interval);
    return () => clearInterval(intervalSet);
  }, []);

  return (
    <svg
      id="smoke"
      style={style}
      className={className}
      viewBox="0 0 307 626"
      fill="none"
    >
      <path
        d="M307.001 427.725C307.001 489.542 256.86 559.641 211.316 559.641C165.772 559.641 128.852 509.529 128.852 447.713C128.852 385.896 165.772 335.784 211.316 335.784C256.86 335.784 307.001 365.909 307.001 427.725Z"
        fill={colour || `#DFDFDF`}
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[0]
        }}
      />
      <path
        d="M307.001 427.725C307.001 489.542 256.86 559.641 211.316 559.641C165.772 559.641 128.852 509.529 128.852 447.713C128.852 385.896 165.772 335.784 211.316 335.784C256.86 335.784 307.001 365.909 307.001 427.725Z"
        fill="url(#paint0_linear)"
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[1]
        }}
      />
      <path
        d="M233.346 399.386C233.346 461.202 181.318 497.681 135.773 497.681C90.2294 497.681 61.4922 454.54 61.4922 392.723C61.4922 330.907 105.337 287.457 150.882 287.457C196.426 287.457 233.346 337.569 233.346 399.386Z"
        fill={colour || `#DFDFDF`}
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[2]
        }}
      />
      <path
        d="M233.346 399.386C233.346 461.202 181.318 497.681 135.773 497.681C90.2294 497.681 61.4922 454.54 61.4922 392.723C61.4922 330.907 105.337 287.457 150.882 287.457C196.426 287.457 233.346 337.569 233.346 399.386Z"
        fill="url(#paint1_linear)"
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[3]
        }}
      />
      <path
        d="M303.852 271.159C303.852 332.976 266.931 406.406 221.387 406.406C175.843 406.406 138.922 356.294 138.922 294.478C138.922 232.661 160.735 192.543 206.279 192.543C251.823 192.543 303.852 209.343 303.852 271.159Z"
        fill={colour || `#DFDFDF`}
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[4]
        }}
      />
      <path
        d="M303.852 271.159C303.852 332.976 266.931 406.406 221.387 406.406C175.843 406.406 138.922 356.294 138.922 294.478C138.922 232.661 160.735 192.543 206.279 192.543C251.823 192.543 303.852 209.343 303.852 271.159Z"
        fill="url(#paint2_linear)"
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[5]
        }}
      />
      <path
        d="M229.571 223.857C229.571 285.673 178.277 335.785 115.002 335.785C51.727 335.785 9.875 299.664 9.875 237.848C9.875 176.031 83.8316 113.927 147.107 113.927C210.382 113.927 229.571 162.04 229.571 223.857Z"
        fill={colour || `#DFDFDF`}
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[6]
        }}
      />
      <path
        d="M229.571 223.857C229.571 285.673 178.277 335.785 115.002 335.785C51.727 335.785 9.875 299.664 9.875 237.848C9.875 176.031 83.8316 113.927 147.107 113.927C210.382 113.927 229.571 162.04 229.571 223.857Z"
        fill="url(#paint3_linear)"
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[7]
        }}
      />
      <path
        d="M264.822 543.251C264.822 605.067 226.416 625.198 189.911 625.198C153.406 625.198 106.816 596.142 106.816 534.325C106.816 472.509 162.219 431.322 198.724 431.322C235.229 431.322 264.822 481.434 264.822 543.251Z"
        fill={colour || `#DFDFDF`}
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[8]
        }}
      />
      <path
        d="M264.822 543.251C264.822 605.067 226.416 625.198 189.911 625.198C153.406 625.198 106.816 596.142 106.816 534.325C106.816 472.509 162.219 431.322 198.724 431.322C235.229 431.322 264.822 481.434 264.822 543.251Z"
        fill="url(#paint4_linear)"
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[9]
        }}
      />
      <path
        d="M136.405 111.928C136.405 173.745 91.6296 223.857 42.6089 223.857C-6.4118 223.857 -60 173.745 -60 111.928C-60 50.1121 -6.4118 0 42.6089 0C91.6296 0 136.405 50.1121 136.405 111.928Z"
        fill={colour || `#DFDFDF`}
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[10]
        }}
      />
      <path
        d="M136.405 111.928C136.405 173.745 91.6296 223.857 42.6089 223.857C-6.4118 223.857 -60 173.745 -60 111.928C-60 50.1121 -6.4118 0 42.6089 0C91.6296 0 136.405 50.1121 136.405 111.928Z"
        fill="url(#paint5_linear)"
        style={{
          transition: `3000ms ease-in-out transform`,
          transform: scales[11]
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="217.926"
          y1="335.784"
          x2="217.926"
          y2="559.641"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.18" />
          <stop offset="0.921875" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="147.419"
          y1="287.457"
          x2="147.419"
          y2="497.681"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.18" />
          <stop offset="0.921875" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="221.387"
          y1="192.543"
          x2="221.387"
          y2="406.406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.18" />
          <stop offset="0.921875" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="119.723"
          y1="113.927"
          x2="119.723"
          y2="335.785"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.18" />
          <stop offset="0.921875" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="185.819"
          y1="431.322"
          x2="185.819"
          y2="625.198"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.18" />
          <stop offset="0.921875" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="38.2024"
          y1="0"
          x2="38.2024"
          y2="223.857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.18" />
          <stop offset="0.921875" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Smoke.defaultProps = {
  className: ``,
  colour: null,
  style: {},
  interval: 3000,
  drift: 0.3
};

Smoke.propTypes = {
  className: PropTypes.string,
  colour: PropTypes.string,
  style: PropTypes.shape({}),
  drift: PropTypes.number,
  interval: PropTypes.number
};

export default Smoke;
