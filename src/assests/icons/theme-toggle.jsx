import React, { useEffect, useState } from "react";
import { THEME } from "../../common/constants";
import Sun from "./sun";
import Moon from "./moon";

const ThemeToggle = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return <>{currentTheme === THEME.DARK ? <Sun /> : <Moon />}</>;
};

export default ThemeToggle;
