import React, {useEffect, useState} from 'react';
import style from "./lk.module.scss";
import logo from "../../img/logoDB.png";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ChangeProfile = () => {
    const navigate=useNavigate()
    const [dataUser,setDataUser]=useState([])
    const [front,setFront]=useState([])
    const [sub,setSub]=useState([])
    const [back,setBack]=useState([])
    const [battery,setBattery]=useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/users/me',{
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res) => {
            setDataUser(res.data)
            axios.get('http://localhost:8000/users/front/?userId='+res.data.id).then((res)=> {
                if (res.data[0])
                    setFront(res.data[0])
                else
                    setFront([{
                        front_din_brand:"",
                        front_amp_brand:"",
                        user_id:res.data.id
                    }])
                })
            axios.get('http://localhost:8000/users/sub/?userId='+res.data.id).then((res)=> {
                if(res.data[0])
                    setSub(res.data[0])
                else
                    setSub([{
                        sub_din_brand:"",
                        sub_amp_brand:"",
                        user_id:res.data.id
                    }])
                })
            axios.get('http://localhost:8000/users/back/?userId='+res.data.id).then((res)=>{
                if(res.data[0])
                    setBack(res.data[0])
                else
                    setBack([{
                        back_din_brand:"",
                        back_amp_brand:"",
                        user_id:res.data.id
                    }])
            })
            axios.get('http://localhost:8000/users/battery/?userId='+res.data.id).then((res)=>{
                if(res.data[0])
                    setBattery(res.data[0])
                else
                    setBattery([{
                        battery_type:"",
                        user_id:res.data.id
                    }])
            })
        }
        ).catch((exp) => null)
    }, []);
    const add=()=>{
        axios.patch(
            'http://localhost:8000/users/me', {
                'username': dataUser.username,
                'grz': dataUser.grz,
                'team': dataUser.team,
                'photo': dataUser.photo,
                'number_phone': dataUser.number_phone,
                'car_model': dataUser.car_model
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                withCredentials:true
            }
        ).then((res)=>{
            if(front.user_id){
                axios.post('http://localhost:8000/users/front/edit/?userId='+dataUser.id,{
                    front_din_brand:front.front_din_brand,
                    front_amp_brand:front.front_amp_brand,
                    user_id:dataUser.id
                })
            }
            else{
                axios.post('http://localhost:8000/users/front/add',{
                    front_din_brand:front.front_din_brand,
                    front_amp_brand:front.front_amp_brand,
                    user_id:dataUser.id
                })
            }
            if(sub.user_id){
                axios.post('http://localhost:8000/users/sub/edit/?userId='+dataUser.id,{
                    sub_din_brand:sub.sub_din_brand,
                    sub_amp_brand:sub.sub_amp_brand,
                    user_id:dataUser.id
                })
            }
            else{
                axios.post('http://localhost:8000/users/sub/add',{
                    sub_din_brand:sub.sub_din_brand,
                    sub_amp_brand:sub.sub_amp_brand,
                    user_id:dataUser.id
                })
            }
            if(back.user_id){
                axios.post('http://localhost:8000/users/back/edit/?userId='+dataUser.id,{
                    back_din_brand:back.back_din_brand,
                    back_amp_brand:back.back_amp_brand,
                    user_id:dataUser.id
                })
            }
            else{
                axios.post('http://localhost:8000/users/back/add',{
                    back_din_brand:back.back_din_brand,
                    back_amp_brand:back.back_amp_brand,
                    user_id:dataUser.id
                })
            }
            if(battery.user_id){
                axios.post('http://localhost:8000/users/battery/edit/?userId='+dataUser.id,{
                    battery_type:battery.battery_type,
                    user_id:dataUser.id
                })
            }
            else{
                axios.post('http://localhost:8000/users/battery/add',{
                    battery_type:battery.battery_type,
                    user_id:dataUser.id
                })
            }
            navigate('/lk/')
        });
    }
    const onchange=(prop,event)=>{
        setDataUser({...dataUser,[prop]:event.target.value})
    }
    const onchangeFront=(prop,event)=>{
        setFront({...front,[prop]:event.target.value})
    }
    const onchangeSub=(prop,event)=>{
        setSub({...sub,[prop]:event.target.value})
    }
    const onchangeBack=(prop,event)=>{
        setBack({...back,[prop]:event.target.value})
    }
    const onchangeBat=(prop,event)=>{
        setBattery({...battery,[prop]:event.target.value})
    }

    const uploadFileData = (event) => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post('http://localhost:8000/img/upload', data).then((res) => {
            setDataUser({...dataUser,photo:res.data.filename.filename})
            axios.patch(
                'http://localhost:8000/users/me', {
                    'username': dataUser.username,
                    'grz': dataUser.grz,
                    'team': dataUser.team,
                    'photo': dataUser.photo,
                    'number_phone': dataUser.number_phone,
                    'car_model': dataUser.car_model
                },
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    withCredentials:true
                }
            ).then((res)=>console.log("sad"))
        })
    }

    return (
        <div className={style.main_cont}>
            <div className={style.cont_info}>
                <div className={style.cont_info_img}>
                    <div className={style.cont_info_border}/>
                    <div className={style.cont_infoImg}>
                        <img className={style.img_pers} src={"http://localhost:8000/img/?path=" + dataUser.photo}/>
                        <div className={style.img_border}/>
                    </div>
                </div>
                <input type="file" onChange={uploadFileData} className="w-[128px]"/>
                <div className={style.cont_personal}>
                    <div className={style.cont_personal_name}>
                        <input type="text" placeholder="Фамилия и имя" className={style.name}
                               onChange={(event) => onchange('username', event)}
                               value={dataUser.username}/>

                    </div>
                </div>
            </div>
            <div className="w-[1400px] h-fit p-2.5 justify-center items-center gap-[50px] flex-col">
                <div className="w-[1400px] h-fit justify-center items-start gap-[30px] inline-flex flex-wrap">
                    <div className=" h-fit flex-col justify-center items-center gap-[15px] inline-flex flex-wrap">
                        <div className="text-white text-2xl font-extrabold font-['Roboto'] leading-[52px]">Персональная
                            информация
                        </div>
                        <input type="text" placeholder="Гос. Номер" onChange={(event)=>onchange('grz',event)}
                               className="w-[325px] bg-black outline-0 text-white h-[50px] px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"
                               value={dataUser.grz}/>
                        <input type="text" placeholder="Марка автомобиля" onChange={(event)=>onchange('car_model',event)}
                               className="w-[325px] bg-black outline-0 text-white h-[50px] px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"
                               value={dataUser.car_model}/>
                        <input type="text" placeholder="Команда" onChange={(event)=>onchange('team',event)}
                               className="w-[325px] h-[50px] bg-black outline-0 text-white px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"
                               value={dataUser.team}/>
                        <input type="text" placeholder="Номер телефона" onChange={(event)=>onchange('number_phone',event)}
                               className="w-[325px] h-[50px] bg-black outline-0 text-white px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"
                               value={dataUser.number_phone}/>
                    </div>
                    <div className="w-[800px] h-fit justify-center items-start gap-[20px] flex flex-wrap">
                        <div className="flex-col justify-center items-center gap-[15px] inline-flex">
                            <div className="text-white text-2xl font-extrabold font-['Roboto'] leading-[52px]">Фронт
                            </div>
                            <input type="text" placeholder="Бренд динамиков" value={front.front_din_brand} onChange={(event)=>onchangeFront('front_din_brand',event)}
                                   className="w-[325px] h-[50px] bg-black outline-0 text-white px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"/>
                            <input type="text" placeholder="Бренд усилителя" value={front.front_amp_brand} onChange={(event)=>onchangeFront('front_amp_brand',event)}
                                   className="w-[325px] h-[50px] bg-black outline-0 text-white px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"/>
                        </div>
                        <div className="flex-col justify-center items-center gap-[15px] inline-flex">
                            <div className="text-white text-2xl font-extrabold font-['Roboto'] leading-[52px]">Сабовое
                                звено
                            </div>
                            <input type="text" placeholder="Бренд динамиков" value={sub.sub_din_brand} onChange={(event)=>onchangeSub('sub_din_brand',event)}
                                   className="w-[325px] h-[50px] bg-black outline-0 text-white px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"/>
                            <input type="text" placeholder="Бренд усилителя" value={sub.sub_amp_brand} onChange={(event)=>onchangeSub('sub_amp_brand',event)}
                                   className="w-[325px] h-[50px] bg-black outline-0 text-white px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"/>
                        </div>
                        <div className="flex-col justify-center items-center gap-[15px] inline-flex">
                            <div className="text-white text-2xl font-extrabold font-['Roboto'] leading-[52px]">Тыл</div>
                            <input type="text" placeholder="Бренд динамиков" value={back.back_din_brand} onChange={(event)=>onchangeBack('back_din_brand',event)}
                                   className="w-[325px] h-[50px] bg-black outline-0 text-white px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"/>
                            <input type="text" placeholder="Бренд усилителя" value={back.back_amp_brand} onChange={(event)=>onchangeBack('back_amp_brand',event)}
                                   className="w-[325px] h-[50px] bg-black outline-0 text-white px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"/>
                        </div>
                        <div className="flex-col justify-center items-center gap-[15px] inline-flex">
                            <div className="text-white text-2xl font-extrabold font-['Roboto'] leading-[52px]">Питание
                            </div>
                            <input type="text" placeholder="Тип питания" value={battery.battery_type} onChange={(event)=>onchangeBat('battery_type',event)}
                                   className="w-[325px] h-[50px] bg-black outline-0 text-white px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-flex gap-4">
                <button onClick={add} className="text-white">Сохранить</button>
                <button onClick={()=>navigate('/lk/')} className="text-white">Отмена</button>
            </div>
        </div>
    );
};

export default ChangeProfile;