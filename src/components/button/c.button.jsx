import React from "react";
import "./s.button.scss";

const CustomButton = ({ children, google = false,type, ...otherProps }) => {
  if (google) var googleStyle = "google";
  return (
    <button className={`custom-button ${googleStyle} `} type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
