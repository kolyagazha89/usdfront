import React, {useEffect, useState} from 'react';
import style from "./news.module.scss"
import axios from "axios";
import {useParams} from "react-router-dom";
const News = () => {
    const params = useParams()
    const id=params.id
    const [news,setNews]=useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`http://localhost:8000/news/news/?newsId=${id}`).then((res)=>{
            setNews(res.data[0])
        })
    }, []);
    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        let newDate = `${day}.${month}.${year}`;
        return newDate;
    };
    return (
        <div className={style.main_cont}>
            <div className={style.zag}>
                <div>{news.name_news}
                </div>
            </div>
            <div className={style.cont_info_news}>
                <img className="w-[200px] h-[120px] rounded-[20px]"
                     src={"http://127.0.0.1:8000/img/?path=" + news.photo_news}/>
                <div className={style.cont_info_text}>
                    <div>{news.text_news}
                    </div>
                </div>
            </div>
            <div className={style.cont_author}>
                <div className={style.author_info}>
                    <img className="w-[200px] h-[120px] rounded-[20px]"
                         src={"http://127.0.0.1:8000/img/?path=" + news.photo}/>
                    <div>{news.username}</div>
                </div>
                <div className={style.author_date}>
                    <div className={style.author_date_border}>
                    <div>{formatDate(news.date_news)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;