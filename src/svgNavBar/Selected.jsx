import React from "react";

function Selected({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      fill="none"
      viewBox="0 0 14 18"
    >
      <mask id="mask_2_9589" fill={color}>
        <path
          fillOpacity="1"
          fillRule="evenodd"
          d="M12 0H2C.9 0 0 .9 0 2v16l7-3 7 3V2c0-1.1-.9-2-2-2zM7 12.82L12 15V2H2v13l5-2.18z"
          clipRule="evenodd"
        ></path>
      </mask>
      <path
        fill={color}
        fillOpacity="1"
        fillRule="evenodd"
        d="M12 0H2C.9 0 0 .9 0 2v16l7-3 7 3V2c0-1.1-.9-2-2-2zM7 12.82L12 15V2H2v13l5-2.18z"
        clipRule="evenodd"
        mask="url(#mask_2_9589)"
      ></path>
    </svg>
  );
}

export default Selected;