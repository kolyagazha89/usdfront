import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import "../../../style.css"
import {Outlet} from "react-router-dom";
const Container = () => {
    return (
        <div className="Main">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Container;