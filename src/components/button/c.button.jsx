import React from "react";
import "./s.button.scss";

const CustomButton = ({
  children,
  inverted = false,
  google = false,
  type,
  ...otherProps
}) => {
  if (google) var googleStyle = "google";
  if (inverted) var invertStyle = "inverted";

  return (
    <button
      className={`custom-button ${invertStyle} ${googleStyle} `}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
