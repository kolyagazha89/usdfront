import React from 'react';
import style from "./lk.module.scss";

const CompVisit = ({place,data}) => {
    return (
        <div className={style.main_vizit}>
            <div className={style.vizit_head}>{data[0]}
            </div>
            <div className={place===1?style.vizit_first:place===2?style.vizit_second:place===3?style.vizit_third:style.vizit_other}>{data[1]}
            </div>
            <div className={style.vizit_res}>{data[2]}
            </div>
        </div>
    );
};

export default CompVisit;