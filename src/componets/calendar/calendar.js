import React, {useContext, useEffect, useState} from 'react';
import style from "./calendar.module.scss"
import Prim from "./prim";
import InfoCal from "./info_cal";
import Partner from "./partner";
import logo from "../../img/logoDB.png"
import afisha from "../../img/calendar.jpg"
import classNames from "classnames";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {authContext} from "../layout/header/context";
const Calendar = ({data}) => {
    const authData=useContext(authContext)
    const [hidden, SetState] = useState(true)
    const navigate=useNavigate()
    const [buttonText, SetText] = useState("Показать больше")
    const [dataPart,setDataPart]=useState([])
    const [dataTag,setDataTag]=useState([])
    const [register,setReg]=useState([])
    const [isReg,setIsReg]=useState(false)
    const reload = useLocation()
    const [type,setType]=useState([])
    const classes = classNames({
        hidden:hidden,
        [style.cont_desc_hide]:hidden,
        [style.cont_desc]:!hidden,
    })
    useEffect(() => {
        axios.get('http://localhost:8000/users/me',{
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res)=>axios.get(`http://127.0.0.1:8000/party/?userId=${res.data.id}&stageId=${data.stage_id}`).then((res)=>setIsReg(res.data)))
            .catch(()=>setIsReg(false))
        axios.get('http://127.0.0.1:8000/stages/sp/?stageId='+data.stage_id).then((res)=>
            setDataPart(res.data)
        )
        axios.get('http://127.0.0.1:8000/stages/st/?stageId='+data.stage_id).then((res)=>
            setDataTag(res.data)
        )
        axios.get(`http://127.0.0.1:8000/type/type/?typeId=${data.stage_type}`).then((res)=>setType(res.data[0]))
    }, [reload, authData]);
    return (
        <div className={style.main_shadow}>
            <img className={style.afisha_img} src={"http://127.0.0.1:8000/img/?path="+data.stage_photo}/>
            <div className={style.cal_cont}>
                <div className={style.cal_cont1}>
                    <div className={style.prim_cont}>
                        {dataTag.map((item)=>
                            <Prim text={item.ST_tags}/>
                        )}
                    </div>
                    <div className={style.cont_info}>
                        <div className={style.cont_info1}>
                            <div className={style.cont_info_name}>{data.stage_name}
                            </div>
                            {!isReg?
                            <div className={style.cont_info_reg}>
                                    <button onClick={() => navigate('/register/' + data.stage_id)}
                                            className={style.cont_info_reg_btn}>Зарегистрироваться
                                    </button>
                            </div>:
                                <p className='text-white'>Вы зарегистрированы</p>}
                            <Link to={"/sportmens"} className={style.cont_info_list}>Список участников
                            </Link>
                        </div>
                        <div className={style.cont_info_btn_close}>
                            <button onClick={() => SetState(state=>!state)}
                                    className={style.cont_info_btn_close_text}>{hidden ? "Показать больше" : "Скрыть"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes}>
                    <div className={style.cont_desc1}>
                        <div className={style.cont_desc_name}>Описание этапа
                        </div>
                        <div className={style.cont_desc_desc}>{data.stage_desc}
                        </div>
                    </div>
                    <div className={style.full_desc}>
                        <InfoCal data={[data.stage_city, data.stage_place, data.stage_date, type.type_name]}/>
                        <div className={style.info_part}>
                            <div className={style.info_part_text}>Партнеры</div>
                            <div className={style.info_part_cont}>
                                {dataPart.map((item)=>
                                    <Partner data={item.SP_partner}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Calendar;