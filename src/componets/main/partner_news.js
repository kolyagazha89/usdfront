import React from 'react';
import style from "./news_partners.module.scss"
const PartnerNews = ({data}) => {
    return (
        <div  className={style.news_part}>
            <div className={style.news_part_img}>
                <div className={style.news_part_img1}>
                    <img src={data[3]}/>
                </div>
            </div>
            <div className={style.title_news}>
                <img src={data[2]}/>
                <div className={style.partner}>
                    <div className={style.partner_name}>{data[0]}
                    </div>
                    <div className={style.partner_desc}>{data[1]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerNews;