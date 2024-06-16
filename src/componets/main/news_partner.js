import React from 'react';
import style from "./news_partners.module.scss"
import PartnerNews from "./partner_news";
import logo from "../../img/afisha.jpg"
import SwiperPart from "./swiper_part";
const NewsPartner = () => {
    return (
        <div className={style.news_partners}>
            <div className={style.title}>
                <div className={style.title_text}>Новинки от партнёров
                </div>
            </div>
            <div className={style.news} >
                <div className={style.news_shadow}>
                    <SwiperPart/>
                </div>
            </div>

        </div>
    );
};

export default NewsPartner;