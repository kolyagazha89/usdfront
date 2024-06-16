import React, {Children} from 'react';
import Header from "../header/headerAdmin";
// import Footer from "../footer/footer";
import "../../../style.css"
import {Outlet} from "react-router-dom";
import Menu from "../menu/menu";
import style from "./containerAdmin.module.scss"
import Button from "./button";
const Container = () => {
    return (
        <div className={style.MainAdmin}>
            <Header/>
            <Menu/>
            <Outlet/>

        </div>
    );
};

export default Container;