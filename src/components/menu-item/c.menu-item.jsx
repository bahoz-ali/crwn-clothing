import React from "react";
import "./s.menu-item.scss";
import { useNavigate } from "react-router";

//* menuItem is part of (Directory-component)
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
