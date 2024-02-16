import React from "react";

function CloseSvg({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <defs>
        <clipPath id="clip29_3472">
          <path
            fill="#fff"
            fillOpacity="0"
            d="M0 0H12V12H0z"
            transform="translate(2 2)"
          ></path>
        </clipPath>
      </defs>
      <rect width="16" height="16" fill={color} fillOpacity="1" rx="8"></rect>
      <path
        fill="#FFF"
        fillOpacity="0"
        d="M0 0H12V12H0z"
        transform="translate(2 2)"
      ></path>
      <g clipPath="url(#clip29_3472)">
        <path
          fill="#090808"
          fillOpacity="1"
          fillRule="nonzero"
          d="M11.5 5.205l-.705-.705L8 7.295 5.205 4.5l-.705.705L7.295 8 4.5 10.795l.705.705L8 8.705l2.795 2.795.705-.705L8.705 8 11.5 5.205z"
        ></path>
      </g>
    </svg>
  );
}

export default CloseSvg;