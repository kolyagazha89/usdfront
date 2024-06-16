import React, {useContext, useEffect, useState} from 'react';
import style from './header.module.scss'
import logo_head from "./../../../img/logo_usd.jpg";
import logo_vk from "./../../../img/logo_vk.jpg";
import Popup from 'reactjs-popup';
import {Link} from "react-router-dom";
import Autorization from "../../auth/autorization";
import axios from "axios";
import Registarion from "../../auth/registarion";
import {authContext} from "./context";

const Header = () => {
    const authData=useContext(authContext)
    const [authReg,setAuthReg]=useState(false)
    return (
        <header className={style.header}>
            <div className={style.first_header}>
                <Link to="/" className={style.logo_header}>
                    <img src={logo_head}/>
                </Link>
                <div className={style.link_header}>
                    <Link to="/calendar" className={style.link_text}>Календарь</Link>
                    <Link to="/results" className={style.link_text}>Результаты</Link>
                    <Link to="/records" className={style.link_text}>Рекорды</Link>
                    <Link to="/album" className={style.link_text}>Фото-Видео</Link>
                    <Link to="/partners" className={style.link_text}>Партнеры</Link>
                    <Link to="/rules" className={style.link_text}>Правила</Link>
                    <Link to="/live" className={style.link_text}>Прямой эфир</Link>
                </div>

            </div>
            <div className={style.second_header}>
                <a href="https://vk.com/usd_russia" className={style.vk_logo}>
                    <img src={logo_vk}/>
                </a>
                { authData.auth?
                    <div className="inline-flex gap-3">
                        {!authData.authAdmin?
                            <Link to="/lk" className={style.link_text}>Личный кабинет</Link>:
                            <Link to="/admin/main" className={style.link_text}>Панель администратора</Link>}
                        <button onClick={()=>axios.post("http://localhost:8000/auth/jwt/logout",{'':''},{
                            headers: {
                                'accept': 'application/json',
                            },
                            withCredentials: true
                        }).then((res)=>authData.sucessAuth(false))} className={style.link_text}>Выход</button></div>
                :
                    <Popup className="popup-arrow-gray-700" onClose={()=>setAuthReg(false)} trigger={
                        <button className={style.link_text}>Авторизация</button>
                    }>{!authReg?
                        <Autorization succes={(val)=>authData.sucessAuth(val)} reg={(val)=>setAuthReg(true)}/>
                        :
                        <Registarion succes={(val)=>authData.sucessAuth(val)} />
                    }
                    </Popup>
                }
            </div>
        </header>
    );
};

export default Header;