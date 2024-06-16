import React, {useEffect, useState} from 'react';
import Calendar from "../componets/calendar/calendar";
import style from "../componets/calendar/calendar.module.scss"
import axios from "axios";
const CalendarPage = () => {
    const [dataStage, setDataStage]=useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/stages/').then((res)=>setDataStage(res.data))
    }, []);
    return (
        <div className={style.main_cont}>
            <div className={style.main_cont1}>
                {dataStage.map((item)=>
                    <Calendar data={item}/>
                )}
            </div>
        </div>
    );
};

export default CalendarPage;