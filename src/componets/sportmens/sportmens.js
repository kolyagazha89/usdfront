import React, {useEffect} from 'react';
import style from "./sportmes.module.scss"
import ClassList from "./classList";
const Sportmens = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={style.main_cont}>
            <div className={style.cont1}>
                <div className={style.cont_list}>Список участников
                </div>
                <div className={style.cont_name}>Открытие г. Волгоград
                </div>
            </div>
            <div className={style.cont2}>
                <ClassList data={["SPL Sedan",["1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов"]]}/>
                <ClassList data={["SPL Sedan",["1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов"]]}/>
                <ClassList data={["SPL Sedan",["1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов"]]}/>
                <ClassList data={["SPL Sedan",["1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов"]]}/>
                <ClassList data={["SPL Sedan",["1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов","1. Димон Динов"]]}/>
            </div>
        </div>);
};

export default Sportmens;