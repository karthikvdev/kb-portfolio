import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { ROUTES } from "../common/constants";
import { useContext } from "react";
import { AppContext } from "../context";

const Routing = () => {
    const { theme } = useContext(AppContext)
    return (
        <div className={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;