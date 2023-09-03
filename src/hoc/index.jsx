import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const PageWrapper = (WrappedComponent) => {
    return (props) => {
        return <>
            <Header />
            <WrappedComponent {...props} />
            <Footer />
        </>;
    };
};

export default PageWrapper;