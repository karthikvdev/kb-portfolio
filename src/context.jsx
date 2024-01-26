import React from "react";
import { THEME } from "./common/constants";

const initialState = {
    hideSideBar: false,
    setHideSideBar: (visibility) => { },
    theme: localStorage?.getItem("theme")?.trim() || THEME.DARK,
    setTheme: (theme) => { }
}

export const AppContext = React.createContext(initialState);