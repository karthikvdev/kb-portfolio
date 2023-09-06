import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import "./styles.scss";

const PageWrapper = (WrappedComponent, data) => {
    return (props) => {
        return <>
            <Header />
            <div className="main-container">
                {data?.isSideBar && <SideBar />}
                <WrappedComponent {...props} />
            </div>
            <Footer />
        </>;
    };
};

export default PageWrapper;