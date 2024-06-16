import React from 'react';
import style from "./news.module.scss"
import {Link} from "react-router-dom";
const LitleNews = ({data}) => {
    return (
        <div className={style.litle_news_2}>
            <div className={style.litle_news_photo}>
                <img src={data[5]}/>
            </div>
            <div className={style.litle_news_pub}>
                <div className={style.litle_news_pub_man}>
                    <img src={data[6]}/>
                    <div className={style.litle_news_pub_text}>{data[0]}
                    </div>
                </div>
                <div className={style.litle_news_data}>
                    <div className={style.litle_news_data1}>
                        {/*иконка календаря*/}
                        <div className={style.litle_news_data_icon}/>
                        <div className={style.litle_news_data_text}>{data[1]}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.litle_news_title}>
                <div className={style.litle_news_title_text}>{data[2]}</div>
                <div className={style.litle_news_title_desc}>
                    {data[3]}
                </div>
            </div>
            <Link to={data[4]} className={style.litle_news_btn}>
                <div className={style.litle_news_btn_text}>Читать больше
                </div>
            </Link>
        </div>
    );
};

export default LitleNews;