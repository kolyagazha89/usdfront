import React from 'react';
import style from "./news.module.scss"
import {Link} from "react-router-dom";
import {CalendarDaysIcon} from "@heroicons/react/24/outline";
const LitleNews = ({data}) => {

    return (
        <div className={style.litle_news_2}>
            <div className={style.litle_news_photo}>
                <img className="w-[200px] h-[120px] rounded-[20px]"
                     src={"http://127.0.0.1:8000/img/?path=" + data[5]}/>
            </div>
            <div className={style.litle_news_pub}>
                <div className={style.litle_news_pub_man}>
                    <img className="w-[200px] h-[120px] rounded-[20px]"
                         src={"http://127.0.0.1:8000/img/?path=" + data[6]}/>
                    <div className={style.litle_news_pub_text}>{data[0]}
                    </div>
                </div>
                <div className={style.litle_news_data}>
                    <div className={style.litle_news_data1}>
                        <CalendarDaysIcon className="size-5 text-white"></CalendarDaysIcon>
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