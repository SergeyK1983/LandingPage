import { FunctionComponent, ReactElement } from "react";
import Header from "../Header/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.tsx";

const Layout: FunctionComponent = (): ReactElement => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
