import React, { useState } from "react";
import HamburgerMenuIcon from "../../assests/icons/hamburger-menu-icon";
import CloseIcon from "../../assests/icons/close-icon";
import "./style.scss";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOnToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="hamburger-menu-container" onClick={handleOnToggle}>
        {open ? <CloseIcon /> : <HamburgerMenuIcon />}
      </div>
    </>
  );
};

export default HamburgerMenu;
