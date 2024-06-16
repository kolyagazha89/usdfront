import React from 'react';
import style from "./record.module.scss"
import RecordIcon from "./recordIcon";
const OneRecord = () => {
    return (
        <div className={style.record}>
            <div className={style.sportsman}>
                <div className={style.cont_img}>
                    <div className={style.img_shadow}>
                        <img src="https://via.placeholder.com/80x80"/>
                    </div>
                </div>
                <div className={style.name_sportsman}>Shvardigulin Evgenyi
                </div>
                <div className={style.cont_rec}>
                    <div>SPL Sedan 157,4 db</div>
                </div>
            </div>
            <div className={style.cont_info}>
                <RecordIcon/>
                <RecordIcon/>
                <RecordIcon/>
            </div>
        </div>
    );
};

export default OneRecord;