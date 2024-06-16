import React from 'react';
import style from "./news.module.scss"
import LitleNews from "./litle_news";
import MainNews from "./main_news";
import news from "../../img/news.jpg"
import ava from "../../img/ava.jpg"
const News = () => {
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
                            <LitleNews data={[
                                "Димон Динов",
                                "Сентбярь 2023",
                                "Завершение сезона 2023",
                                "Ну вот и завершился сезон 2023. Финал состоялся по истине фееричный. Мы обещали,\n" +
                                "что это, будет САМЫЙ КРУТОЙ ФИНАЛ....",
                                "/news",
                                news,
                                ava
                            ]}/>
                            <LitleNews data={[
                                "Димон Динов",
                                "Сентбярь 2023",
                                "Завершение сезона 2023",
                                "Ну вот и завершился сезон 2023. Финал состоялся по истине фееричный. Мы обещали,\n" +
                                "что это, будет САМЫЙ КРУТОЙ ФИНАЛ....",
                                "/news",
                                news,
                                ava
                            ]}/>
                            <LitleNews data={[
                                "Димон Динов",
                                "Сентбярь 2023",
                                "Завершение сезона 2023",
                                "Ну вот и завершился сезон 2023. Финал состоялся по истине фееричный. Мы обещали,\n" +
                                "что это, будет САМЫЙ КРУТОЙ ФИНАЛ....",
                                "/news",
                                news,
                                ava
                            ]}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;