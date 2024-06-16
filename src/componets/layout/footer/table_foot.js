import React from 'react';
import {Link} from "react-router-dom";
import style from './footer.module.scss'
const TableFoot = ({title,name_text}) => {
    return (

        <div className={style.component_foot}>
            <div className={style.title_text}>{title}</div>
            <div className={style.main_text}>
                {name_text.map(item => (
                    <Link to={item.link} className={style.ul_text}>{item.name}</Link>
                ))}
            </div>
        </div>
    );
};

export default TableFoot;