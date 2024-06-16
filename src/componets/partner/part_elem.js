import React from 'react';
import style from "./partner.module.scss"

const PartElem = ({data}) => {
    return (
        <div className={style.part_shadow}>
            <img src={"http://127.0.0.1:8000/img/?path="+data[2]} alt={'asa'}/>
            <div className={style.main_cont_info}>
                <div className={style.main_cont_title}>
                    <div className={style.main_cont_text}>{data[0]}
                    </div>
                </div>
                <div className={style.main_cont_desc}>
                    <div className={style.main_cont_desc_title}>Описание
                    </div>
                    <div className={style.main_cont_desc_text}>{data[1]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartElem;