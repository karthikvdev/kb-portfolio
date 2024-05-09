import React, { useContext, useState } from "react";
import { NAMES, ROUTES, THEME, scrollToTop } from "../../common/constants";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../../assests/icons/theme-toggle";
import { AppContext } from "../../context";
import HamburgerMenu from "../hamburgerMenu";
import "./style.scss";
import MenuItems from "../hamburgerMenu/menuItem";
import CloseIcon from "../../assests/icons/close-icon";
import HamburgerMenuIcon from "../../assests/icons/hamburger-menu-icon";

const Header = () => {
  const { theme, setTheme } = useContext(AppContext);
  const [isDarkTheme, setIsDarkTheme] = useState(
    theme === THEME.DARK ? true : false
  );
  const location = useLocation();
  const centerMenu = [
    { label: "_about-me", to: ROUTES.ABOUT },
    { label: "_skills", to: ROUTES.SKILLS },
    { label: "_projects", to: ROUTES.PROJECTS },
  ];
  const arr = ["karthik", "Balaji", "Venkatesan"];

  const handleOnToggle = (darkTheme) => {
    localStorage?.setItem("theme", darkTheme ? THEME.DARK : THEME.LIGHT);
    setTheme(darkTheme ? THEME.DARK : THEME.LIGHT);
    setIsDarkTheme(darkTheme);
  };

  const [open, setOpen] = useState(false);

  const handleOnOpenMenu = () => {
    setOpen(!open);
    console.log("open", open);
  };

  return (
    <div className="header-container">
      <div className="menu hamburger-menu">
        <>
          <div className="hamburger-menu-container" onClick={handleOnOpenMenu}>
            {open ? <CloseIcon /> : <HamburgerMenuIcon />}
          </div>
        </>
      </div>
      <Link className="menu" to={ROUTES.HOME} onClick={scrollToTop}>
        {NAMES.USER_NAME}
      </Link>
      <div className="center-menu text-align">
        {centerMenu?.map((menu, index) => (
          <a
            key={index}
            className={`sub-menu ${
              location.pathname === menu.to ? "active" : ""
            }`}
            href={"#" + menu.to}
          >
            {menu?.label}
          </a>
        ))}
      </div>
      <div className="menu toggle-theme">
        <span
          className="theme-btn"
          onClick={() => handleOnToggle(!isDarkTheme)}
        >
          <ThemeToggle theme={theme} />
        </span>
      </div>
      <div
        className="hamburger-menu-container-menu"
        style={{ height: open ? "auto" : "0" }}
      >
        {open ? (
          <div className="hamburger-menu-container-menu-list">
            {centerMenu?.map((menu, index) => (
              <>
                <div
                  className="hamburger-menu-items-container"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    className=""
                    key={index}
                    href={"#" + menu?.to}
                    onClick={handleOnOpenMenu}
                  >
                    <div
                      className="menu-items"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {menu?.label}
                    </div>
                  </a>
                  <div
                    className="line"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                </div>
              </>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
