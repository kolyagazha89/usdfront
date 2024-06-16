import React, {useEffect, useState} from 'react';
import style from "./lk.module.scss"
import SwiperAchiv from "./swiper_achiv";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const Lk = () => {

    const navigate = useNavigate()
    const [dataUser,setDataUser]=useState([])
    useEffect(() => {
        window.scroll(0,0)
        axios.get('http://localhost:8000/users/me',{
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res) => setDataUser(res.data)
        ).catch((exp) => null)
    }, []);
    return (
        <div className={style.main_cont}>
            <div className={style.cont_info}>
                <div className={style.cont_info_img}>
                    <div className={style.cont_info_border}/>
                    <div className={style.cont_infoImg}>
                        <img className={style.img_pers} src={"http://localhost:8000/img/?path="+dataUser.photo}/>
                        <div className={style.img_border}/>
                    </div>
                </div>
                <div className={style.cont_personal}>
                    <div className={style.cont_personal_name}>
                        <div className={style.name}>{dataUser.username}
                        </div>
                        <button onClick={()=>navigate('/lk/changeprofile/')} className={style.ref}>Редактировать
                        </button>
                    </div>
                    <div className={style.team}>
                        <div className={style.team_name}>{dataUser.team}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.cont_vizit}>
                <div className={style.zag}>Ваши результаты на этапах
                </div>
                <div className={style.cont_vizit_spin}>
                    <SwiperAchiv/>
                </div>
            </div>
        </div>
    );
};

export default Lk;