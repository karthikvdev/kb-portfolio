import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { ROUTES } from "../common/constants";
import About from "../pages/about";
import Contact from "../pages/contact";
import Projects from "../pages/projects";


const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route path={ROUTES.PROJECTS} element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;