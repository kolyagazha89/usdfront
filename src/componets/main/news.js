import React, {useEffect, useState} from 'react';
import style from "./news.module.scss"
import LitleNews from "./litle_news";
import MainNews from "./main_news";
import axios from "axios";
const News = () => {
    const [news, setNews]=useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/news/').then((res)=>setNews(res.data))
    }, []);
    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        let newDate = `${day}.${month}.${year}`;
        return newDate;
    };
    return (
        <div className={style.main_news}>
            <div className={style.title}>
                <div className={style.title_text}>Новости</div>

            </div>
            <div className={style.news}>
                <div className={style.news_1}>
                    <MainNews data={["Правила на сезон 2024 готовы",
                        "Итак, господа маньяки! Правила на сезон 2024 готовы! Начинаем подготовку Впереди еще будут\n" +
                        "новости по новшествам в формате, которые всех только порадуют Всем удачи и не забывайте\n" +
                        "читать правила",
                        "/news"
                    ]}/>
                    <div className={style.litle_news}>
                        <div className={style.litle_news_1}>
                            {news.map(i=>
                            <LitleNews data={[
                                i.username,
                                formatDate(i.date_news),
                                i.name_news,
                                i.text_news,
                                `/news/${i.id_news}`,
                                i.photo_news,
                                i.photo
                            ]}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;