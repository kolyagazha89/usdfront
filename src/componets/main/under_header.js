import React from 'react';
import afisha from "../../img/afisha.jpg";
import style from "./under_header.module.scss"
const UnderHeader = () => {
    return (
        <div className={style.under_header}>
            <img src={afisha}/>
            <a href="#" className={style.btn_reg}>
                <div className={style.text_btn}>Зарегистрироваться</div>
            </a>
            <div className={style.title_under}>Финал в городе Волгоград
            </div>
            <div className={style.desc_under}>Вас ждет большой розыгрыш призов, мощные проекты со всей страны и ГРАНДИОЗНОЕ фаер-шоу
            </div>
        </div>
    );
};

export default UnderHeader;