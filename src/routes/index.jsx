import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { ROUTES } from "../common/constants";
import { createContext, useState } from "react";

const initialState = {
    hideSideBar: false,
    setHideSideBar: (visibility) => { },
}

export const AppContext = createContext(initialState);


const Routing = () => {
    const [hideSideBar, setHideSideBar] = useState(true);
    const contextItems = {
        hideSideBar,
        setHideSideBar
    }

    return (
        <>
            <AppContext.Provider value={contextItems}>
                <BrowserRouter>
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </AppContext.Provider>
        </>
    )
}

export default Routing;