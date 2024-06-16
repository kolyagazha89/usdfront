import React, {useState} from 'react';
import ItemImg from "./itemImg";
import QuerySelect from "./querySelect";
import style from "./album.module.scss"
import classNames from "classnames";

const Album = () => {
    const [hidden, SetState] = useState(true)
    const classes = classNames({
        hidden: hidden,
        [style.cont_img_animated]:!hidden,
    })
    return (
        <div className={style.main_cont}>
            <div className={style.cont_shadow}>
                <div className={style.cont_flex}>
                    <div className={style.cont_query}>
                        <QuerySelect query = "Год" data={["2023",'2024']}/>
                        <QuerySelect query = "Этап" data={["Финал г. Волгоград",'213123321']}/>
                        <div className={style.query_button}>
                            <button onClick={() => SetState(state => false)}>Показать</button>
                        </div>
                    </div>
                    <div className={classes}>
                        <div className={style.query_text}>Финал г. Волгоград, 2023 Класс SPL Sedan
                        </div>
                        <div className={style.cont_img}>
                            <ItemImg/>
                            <ItemImg/>
                            <ItemImg/>
                            <ItemImg/>
                            <ItemImg/>
                            <ItemImg/>
                            <ItemImg/>
                            <ItemImg/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Album;