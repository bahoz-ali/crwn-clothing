import React from "react";
import MenuItem from "../menu-item/c.menu-item";
import "./s.directory.scss";
import { useSelector } from "react-redux";

//* Directory is part of (HomepageComponent)
function Directory() {
  const sections = useSelector((state) => state.section.sections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default Directory;
