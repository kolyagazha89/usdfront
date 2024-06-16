import React, {useContext, useEffect, useState} from 'react';
import style from "../album/album.module.scss";
import QuerySelect from "../album/querySelect";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {authContext} from "../layout/header/context";

const Register = () => {
    const authData=useContext(authContext)
    const params = useParams();
    const id = params.id;
    const [blockF, setF]=useState(false)
    const [blockB, setB]=useState(false)
    const [blockS, setS]=useState(false)
    const [blockBR, setBR]=useState(false)
    const [valF,setValF]=useState('')
    const [valB,setValB]=useState('')
    const [valS,setValS]=useState('')
    const [valBR,setValBR]=useState('')
    const [userId,setUserId]=useState(0)
    const navigate= useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8000/users/me',{
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res)=>setUserId(res.data.id)).catch(
            ()=>setUserId(false)
        )
    }, [authData]);
    const reg=()=>{
        axios.post('http://localhost:8000/party/add?stageId='+id,{user_id:userId}).then((res)=>
        {
            if(!blockF)
                axios.post(`http://localhost:8000/party/pc/add/?userId=${res.data}&stageId=${id}`,{PC_class:valF})
            if(!blockB)
                axios.post(`http://localhost:8000/party/pc/add/?userId=${res.data}&stageId=${id}`,{PC_class:valB})
            if(!blockS)
                axios.post(`http://localhost:8000/party/pc/add/?userId=${res.data}&stageId=${id}`,{PC_class:valS})
            if(!blockBR)
                axios.post(`http://localhost:8000/party/pc/add/?userId=${res.data}&stageId=${id}`,{PC_class:valBR})
        })
        navigate('/calendar',{state:{reload:true}})
    }
    return (
        <div className={style.main_cont}>
            <div className={style.cont_shadow}>
                <div className={style.cont_flex}>
                    <div className={style.query_text}>Регистрация Финал г. Волгоград</div>
                    <div className={style.cont_query}>
                        <div className="flex-col flex-wrap items-center justify-center">
                            <div className="inline-flex gap-3 mb-2">
                                <input type="checkbox" onChange={()=>!blockF?setF(true):setF(false)} id="bf" className="text-white"/>
                                <label for="bf" className="text-white">Не учавствую</label>
                            </div>
                            <QuerySelect  block={blockF} query="BFSPL" val={(val)=>setValF(val)} data={["Gate 1-6", "Wicket 6-10", "Wicket 10+"]}/>
                        </div>
                        <div className="flex-col flex-wrap box-border items-center justify-center">
                            <div className="inline-flex gap-3 mb-2">
                                <input type="checkbox" onChange={()=>!blockB?setB(true):setB(false)} id="bd" className="text-white"/>
                                <label for="bd" className="text-white">Не учавствую</label>
                            </div>
                            <QuerySelect block={blockB} query="BDWSPL" val={(val)=>setValB(val)} data={["BDW", "BDW Ex"]}/>
                        </div>
                        <div className="flex-col flex-wrap box-border items-center justify-center">
                            <div className="inline-flex gap-3 mb-2">
                                <input type="checkbox" id="spl" onChange={()=>!blockS?setS(true):setS(false)} className="text-white"/>
                                <label for="spl" className="text-white">Не учавствую</label>
                            </div>
                            <QuerySelect block={blockS} query="SPL" val={(val)=>setValS(val)}
                                         data={["SPL Limited", "SPL 1x2", "SPL 2x2", "SPL Nolim", "SPL Sedan", "SPL Coffin", "SPL Wall", "SPL Wall+", "SPL MadX"]}/>
                        </div>
                        <div className="flex-col flex-wrap box-border items-center justify-center">
                            <div className="inline-flex gap-3 mb-2">
                                <input type="checkbox" id="bs" onChange={()=>!blockBR?setBR(true):setBR(false)} className="text-white"/>
                                <label for="bs" className="text-white">Не учавствую</label>
                            </div>
                            <QuerySelect block={blockBR} val={(val)=>setValBR(val)} query="BassRace" data={["BR 129.9", "BR 139.9", "BR 149.9"]}/>
                        </div>

                    </div>

                    <div className={style.query_button}>
                        {userId?
                        <button onClick={reg}>Зарегистрироваться</button>:
                            <p>Авторизуйтесь</p>}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;