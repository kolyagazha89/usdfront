import React from 'react';
import style from "./menu.module.scss"
const Link = ({data}) => {
    return (
        <div className={style.link}>
            {data}
        </div>
    );
};

export default Link;