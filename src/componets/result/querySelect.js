import React from 'react';
import style from "./result.module.scss"
const QuerySelect = ({query,data}) => {
    return (
        <div className={style.main_query}>
            <div className={style.main_query2}>
                <div className={style.main_query3}>
                    <div className={style.query_text}>{query}
                    </div>
                    <select>
                        {
                            data.map(item=>
                            <option>{item}</option>)
                        }
                    </select>
                </div>

            </div>
        </div>
    );
};

export default QuerySelect;