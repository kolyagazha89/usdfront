import React from 'react';
import style from "./record.module.scss"
import OneRecord from "./oneRecord";
const Record = () => {
    return (
        <div className={style.container_main}>
            <div className={style.container_flex}>
                <div className={style.container_rec}>
                    <OneRecord/>
                    <OneRecord/>
                    <OneRecord/>
                    <OneRecord/>
                    <OneRecord/>
                    <OneRecord/>
                    <OneRecord/>
                    <OneRecord/>
                </div>
            </div>
        </div>
    );
};

export default Record;