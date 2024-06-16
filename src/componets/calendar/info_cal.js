import React from 'react';
import style from "./calendar.module.scss"
const InfoCal = ({data}) => {
    return (
        <div className={style.full_desc_cont}>
            <div className={style.full_desc_info}>
                <div className={style.full_desc_info_key}>Город
                </div>
                <div className={style.full_desc_info_value}>{data[0]}
                </div>
            </div>
            <div className={style.full_desc_info}>
                <div className={style.full_desc_info_key}>Место проведения
                </div>
                <div className={style.full_desc_info_value}>{data[1]}
                </div>
            </div>
            <div className={style.full_desc_info}>
                <div className={style.full_desc_info_key}>Дата проведения
                </div>
                <div className={style.full_desc_info_value}>{data[2]}
                </div>
            </div>
            <div className={style.full_desc_info_last}>
                <div className={style.full_desc_info_key}>Тип этапа
                </div>
                <div className={style.full_desc_info_value}>{data[3]}
                </div>
            </div>
        </div>
    );
};

export default InfoCal;