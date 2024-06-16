import React, {useState} from 'react';
import Td_zag from "./td_zag";
import Td_first from "./td_first";
import TdSecond from "./td_second";
import TdThird from "./td_third";
import TdOther from "./td_other";
import QuerySelect from "./querySelect";
import style from "./result.module.scss"
import classNames from "classnames";

const Result = () => {
    const [hidden, SetState] = useState(true)
    const classes = classNames({
        hidden: hidden,
        [style.query_info]: !hidden,
    })
    return (<div className={style.main_cont}>
            <div className={style.main_cont2}>
                <div className={style.main_cont3}>
                    <div className={style.main_cont4}>
                        <div className={style.main_cont5}>
                            <div className={style.query}>
                                <QuerySelect query = "Год" data={["2023",'2024']}/>
                                <QuerySelect query = "Этап" data={["Финал г. Волгоград",'213123321']}/>
                                <QuerySelect query = "Класс" data ={["SPL Sedan",'123123123']}/>
                                <div className={style.query_btn}>
                                    <button onClick={() => SetState(state => false)}>Показать</button>
                                </div>
                            </div>
                            <div className={classes}>
                                <div className={style.query_text}>Финал г. Волгоград, 2023 Класс SPL Sedan
                                </div>
                                <div className={style.query_table}>
                                    <div className={style.table_border}>
                                        <div className={style.table_tr}>
                                            <Td_zag isPlace={1} data={"№"}/>
                                            <Td_zag isPlace={2} data={"Участник"}/>
                                            <Td_zag isPlace={3} data={"Результат"}/>
                                            <Td_zag isPlace={4} data={"Команда"}/>
                                            <Td_zag isPlace={5} data={"Бренд сабвуфера"}/>
                                            <Td_zag isPlace={6} data={"Бренд усилителей"}/>
                                            <Td_zag isPlace={7} data={"Питание"}/>
                                        </div>
                                        <div className={style.table_tr}>
                                            <Td_first isPlace={1} data={"003"}/>
                                            <Td_first isPlace={2} data={"Шваргидулин Евгений"}/>
                                            <Td_first isPlace={3} data={"157,4"}/>
                                            <Td_first isPlace={4} data={"Global Team"}/>
                                            <Td_first isPlace={5} data={"Machete"}/>
                                            <Td_first isPlace={6} data={"DST"}/>
                                            <Td_first isPlace={7} data={"Титанат"}/>
                                        </div>
                                        <div className={style.table_tr}>
                                            <TdSecond isPlace={1} data="109"/>
                                            <TdSecond isPlace={2} data="Savchenko Mihail"/>
                                            <TdSecond isPlace={3} data="156,7"/>
                                            <TdSecond isPlace={4} data="Команда"/>
                                            <TdSecond isPlace={5} data="dst"/>
                                            <TdSecond isPlace={6} data="dst"/>
                                            <TdSecond isPlace={7} data="Титанат"/>

                                        </div>
                                        <div className={style.table_tr}>
                                            <TdThird isPlace={1} data={"075"}/>
                                            <TdThird isPlace={2} data={"Kravcov Mihail"}/>
                                            <TdThird isPlace={3} data={"155,6"}/>
                                            <TdThird isPlace={4} data={"Команда"}/>
                                            <TdThird isPlace={5} data={"dst"}/>
                                            <TdThird isPlace={6} data={"dst"}/>
                                            <TdThird isPlace={7} data={"Манганат"}/>
                                        </div>
                                        <div className={style.table_tr}>
                                            <TdOther isPlace={1} data={"138"}/>
                                            <TdOther isPlace={2} data={"Trifonov Kirill"}/>
                                            <TdOther isPlace={3} data={"152,4"}/>
                                            <TdOther isPlace={4} data={"Aura team"}/>
                                            <TdOther isPlace={5} data={"Machete"}/>
                                            <TdOther isPlace={6} data={"Apocalypse"}/>
                                            <TdOther isPlace={7} data={"Кислота"}/>
                                        </div>
                                        <div className={style.table_tr}>
                                            <TdOther isPlace={1} data={"138"}/>
                                            <TdOther isPlace={2} data={"Trifonov Kirill"}/>
                                            <TdOther isPlace={3} data={"152,4"}/>
                                            <TdOther isPlace={4} data={"Aura team"}/>
                                            <TdOther isPlace={5} data={"Machete"}/>
                                            <TdOther isPlace={6} data={"Apocalypse"}/>
                                            <TdOther isPlace={7} data={"Кислота"}/>
                                        </div>
                                        <div className={style.table_tr}>
                                            <TdOther isPlace={1} data={"138"}/>
                                            <TdOther isPlace={2} data={"Trifonov Kirill"}/>
                                            <TdOther isPlace={3} data={"152,4"}/>
                                            <TdOther isPlace={4} data={"Aura team"}/>
                                            <TdOther isPlace={5} data={"Machete"}/>
                                            <TdOther isPlace={6} data={"Apocalypse"}/>
                                            <TdOther isPlace={7} data={"Кислота"}/>
                                        </div>
                                        <div className={style.table_tr}>
                                            <TdOther isPlace={1} data={"138"}/>
                                            <TdOther isPlace={2} data={"Trifonov Kirill"}/>
                                            <TdOther isPlace={3} data={"152,4"}/>
                                            <TdOther isPlace={4} data={"Aura team"}/>
                                            <TdOther isPlace={5} data={"Machete"}/>
                                            <TdOther isPlace={6} data={"Apocalypse"}/>
                                            <TdOther isPlace={7} data={"Кислота"}/>
                                        </div>
                                        <div className={style.table_tr}>
                                            <TdOther isPlace={1} data={"138"}/>
                                            <TdOther isPlace={2} data={"Trifonov Kirill"}/>
                                            <TdOther isPlace={3} data={"152,4"}/>
                                            <TdOther isPlace={4} data={"Aura team"}/>
                                            <TdOther isPlace={5} data={"Machete"}/>
                                            <TdOther isPlace={6} data={"Apocalypse"}/>
                                            <TdOther isPlace={7} data={"Кислота"}/>
                                        </div>
                                        <div className={style.table_tr}>
                                            <TdOther isPlace={1} data={"138"}/>
                                            <TdOther isPlace={2} data={"Trifonov Kirill"}/>
                                            <TdOther isPlace={3} data={"152,4"}/>
                                            <TdOther isPlace={4} data={"Aura team"}/>
                                            <TdOther isPlace={5} data={"Machete"}/>
                                            <TdOther isPlace={6} data={"Apocalypse"}/>
                                            <TdOther isPlace={7} data={"Кислота"}/>
                                        </div>
                                        <div className={style.table_tr}>
                                            <TdOther isPlace={1} data={"138"}/>
                                            <TdOther isPlace={2} data={"Trifonov Kirill"}/>
                                            <TdOther isPlace={3} data={"152,4"}/>
                                            <TdOther isPlace={4} data={"Aura team"}/>
                                            <TdOther isPlace={5} data={"Machete"}/>
                                            <TdOther isPlace={6} data={"Apocalypse"}/>
                                            <TdOther isPlace={7} data={"Кислота"}/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Result;