import React from "react";

function Home({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17.436"
      fill="none"
      viewBox="0 0 17 17.436"
    >
      <path
        fill={color}
        fillOpacity="1"
        fillRule="evenodd"
        d="M6.5 11.435h4v6H17V6.56a.25.25 0 00-.098-.199L8.652.052a.25.25 0 00-.304 0L.098 6.36a.25.25 0 00-.098.2v10.876h6.5v-6z"
      ></path>
    </svg>
  );
}

export default Home;
