import React from 'react';
import style from "./record.module.scss"
const RecordIcon = () => {
    return (
        <div className={style.cont_info_border}>
            <div className={style.cont_info_icon}>
                <div className={style.icon}/>
            </div>
        </div>
    );
};

export default RecordIcon;