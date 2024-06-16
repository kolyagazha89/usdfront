import React from 'react';
import style from "./sportmes.module.scss";
import {Link} from "react-router-dom";

const ClassList = ({data}) => {
    return (
        <div className={style.cont_info}>
            <div className={style.cont_info_zag}>{data[0]}
            </div>
            <div className={style.cont_info_list}>
                {data[1].map(item => (
                    <div>{item}</div>
                ))}
            </div>
        </div>
    );
};

export default ClassList;