import React from 'react';
import style from "./news.module.scss"
import {Link} from "react-router-dom";
const MainNews = ({data}) => {
    return (
        <div className={style.news_main}>
            <div className={style.news_main_1}>
                <div className={style.news_main_2}>
                    <div className={style.news_main_3}>
                        <div className="w-11 h-11 relative">
                            {/* ФОТО*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.title_news}>
                <div className={style.title_text}>
                    {data[0]}
                </div>
                <div className={style.title_desc}>
                    {data[1]}
                </div>
            </div>
            <Link to={data[2]} className={style.btn_news}>
                <div className={style.btn_text}>Читать больше</div>
                {/*ИКОНКА*/}
                {/*<div className="btn_"></div>*/}
            </Link>
        </div>
    );
};

export default MainNews;