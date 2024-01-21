import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import "./styles.scss";

const PageWrapper = (WrappedComponent, data) => {
    return (props) => {
        return <>
            <Header />
            <div id="body-container" className={data?.isSideBar ? "main-container" : "body-container"}>
                {data?.isSideBar && <SideBar sideBarMenu={data?.sideBarMenu} />}
                <WrappedComponent {...props} />
            </div>
            <Footer />
        </>;
    };
};

export default PageWrapper;