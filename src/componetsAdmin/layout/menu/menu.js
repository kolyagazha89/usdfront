import React from 'react';
import {Link, useLocation} from "react-router-dom";
import style from "./menu.module.scss"
import {Squares2X2Icon, CalendarIcon, NewspaperIcon, UserGroupIcon, ClipboardDocumentListIcon, VideoCameraIcon, ClipboardDocumentCheckIcon} from "@heroicons/react/24/outline";
import classNames from "classnames";

const Menu = () => {
    const {pathname}=useLocation()
    const classes = (path)=> classNames({
        [style.linkCont]:true,
        [style.linkContTemp]:pathname.includes(path),
    })
    return (
        <div className={style.main}>
            <div className={classes("/admin/main")}>
                <Squares2X2Icon className="size-5 text-blue-600"/>
                <Link to={"/admin/main"} className={style.link}>Главная</Link>
            </div>
            <div className={classes("/admin/stage")}>
                <CalendarIcon className="size-5"/>
                <Link to={"/admin/stage"} className={style.link}>Этапы</Link>
            </div>
            <div className={classes("/admin/news")}>
                <NewspaperIcon className="size-5"/>
                <Link to={"/admin/news"} className={style.link}>Новости</Link>
            </div>
            <div className={classes("/admin/partner")}>
                <UserGroupIcon className="size-5"/>
                <Link to={"/admin/partner"} className={style.link}>Партнеры</Link>
            </div>
            <div className={classes("/admin/rtc")}>
                <ClipboardDocumentCheckIcon className="size-5"/>
                <Link to={"/admin/rtc"} className={style.link}>Регистрация</Link>
            </div>
        </div>
    );
};

export default Menu;