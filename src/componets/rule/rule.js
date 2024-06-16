import React from 'react';
import style from "./rules.module.scss"
const Rule = ({data}) => {
    return (
        <div className={style.cont_rule}>
            <div className={style.cont_rule_zag}>{data[0]}
            </div>
            <div className={style.cont_rule_text}> {data[1]}
            </div>
        </div>
    );
};

export default Rule;