import Routing from "./routes";
import "./App.css"
import { useState } from "react";
import { THEME } from "./common/constants";
import { AppContext } from "./context";

function App() {
  const [hideSideBar, setHideSideBar] = useState(true);
  const [theme, setTheme] = useState(localStorage?.getItem("theme")?.trim() ?? THEME.DARK)
  const contextItems = {
    hideSideBar,
    setHideSideBar,
    theme,
    setTheme
  }

  return (
    <AppContext.Provider value={contextItems}>
      <Routing />
    </AppContext.Provider>
  );
}

export default App;
