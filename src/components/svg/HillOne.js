import React from "react";
import PropTypes from "prop-types";

const HillOne = ({ className }) => (
  <svg className={className} viewBox="0 0 1440 416" fill="none">
    <g clipPath="url(#clip0)">
      <path
        d="M200.836 77.1685C128.431 101.59 49.765 103.637 -26 103.637V275.927C-4.1612 247.612 20.2691 221.136 47.1644 198.243C68.5374 180.05 101.276 171.621 129.169 178.247C188.98 192.456 249.094 205.359 308.694 220.42C373.083 236.691 434.356 270.406 499.854 282.225C533.593 288.312 570.356 288.359 604.577 290.95C656.776 294.902 709.509 295.666 761.753 292.041C850.578 285.876 945.709 263.982 1035.29 275.317C1045.04 276.551 1059.57 292.498 1049.69 302.22C1043.6 308.215 1034.82 305.592 1029.01 311.309C1025.07 315.186 1066.57 323.016 1072.97 324.397C1135.72 337.955 1200.12 347.134 1262.28 362.752C1299.04 371.99 1332.64 388.181 1371.06 392.382C1393.72 394.86 1418.63 399.321 1438.85 410.378C1445.37 413.947 1447.9 415.809 1453.81 413.832L1464 71.1529C1450.77 47.9649 1428.34 22.7903 1400.5 27.7205C1382.68 30.8756 1366.42 39.5707 1350.09 47.0906C1338.14 52.5887 1323.14 58.4436 1312.28 65.6186C1300.9 73.1408 1291.48 78.7875 1278.31 83.0637C1256.71 90.0722 1231.48 86.2031 1208.99 88.4777C1199.03 89.4857 1155.98 98.5516 1154.88 84.6278C1154.23 76.3457 1131.09 79.8153 1125.97 79.8153C1104.14 79.8153 1083.26 80.865 1062.47 87.9965C1048.4 92.8212 1056.48 85.7136 1050.36 73.7997C1047.36 67.9621 1042.81 70.8404 1039.73 66.3404C1037.01 62.3649 1038.56 49.4968 1044.8 49.4968C1053.07 49.4968 1064.35 34.238 1053.57 31.0892C1036.3 26.045 1014.51 26.8493 996.615 28.9236C967.195 32.3341 935.261 31.2957 905.806 29.5252C878.102 27.8598 852.879 19.0278 827.229 9.55346C815.758 5.31654 806.942 3.80848 794.612 4.01914C743.73 4.88841 698.252 37.602 650.925 51.6624C625.891 59.0996 607.561 61.5448 582.355 58.1593C562.034 55.4298 543.402 46.7887 524.04 40.8344C501.423 33.8794 478.62 28.1765 456.088 20.8627C414.464 7.3516 373.765 12.3135 332.292 24.7127C286.677 38.3502 246.024 61.927 200.836 77.1685Z"
        fill="#F8F8F8"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="1440" height="416" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

HillOne.defaultProps = {
  className: ``
};

HillOne.propTypes = {
  className: PropTypes.string
};

export default HillOne;