import React from "react";
import "./styles.scss";

const MenuItems = ({ delay , label}) => {
  return (
    <div
      className="hamburger-menu-items-container"
      style={{ animationDelay: delay }}
    >
      <div className="menu-items" style={{ animationDelay: delay }}>
        {label}
      </div>
      <div className="line" style={{ animationDelay: delay }} />
    </div>
  );
};

export default MenuItems;
