import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Registarion = ({succes}) => {
    const navigate=useNavigate()
    const [login, setLogin]=useState("")
    const [pass, setPass]=useState("")
    const [confimPass, setConfirmPass]=useState("")
    const [msg,setMsg]=useState('')
    const autorize =()=>{
        if(pass===confimPass){
            axios.post(
                'http://localhost:8000/auth/register',
                {
                    "email": login,
                    "password": pass,
                    "is_active": true,
                    "is_superuser": false,
                    "is_verified": false,
                    "username": "",
                    "grz": "",
                    "team": "",
                    "photo": "",
                    "number_phone": "",
                    "car_model":""
                },
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            ).then((res)=>
                {
                    axios.post(
                        'http://localhost:8000/auth/jwt/login',
                        {
                            'grant_type': '',
                            'username': login,
                            'password': pass,
                            'scope': '',
                            'client_id': '',
                            'client_secret': ''
                        },
                        {
                            headers: {
                                'accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            withCredentials: true
                        }
                    ).then((res)=> {
                        succes(true)
                        navigate('/lk/changeprofile')
                    }
                    )
                }
            ).catch((exp)=>{
                if(exp.response.status===400){
                    setMsg("Пользователь с таким логином уже существует")
                }
            })
        }
        else{
            setMsg("Пароли не совпадают")
        }
    }
    return (
        <div
            className="w-[340px] h-fit  bg-black flex-col border border-neutral-200 justify-start items-center gap-[15px] inline-flex p-2 rounded-[17px]">
            <input  type="text" placeholder="Логин" onChange={event => setLogin(event.target.value)}
                   className="outline-0 w-[325px] h-[50px] px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"
                   value={login}/>
            <input type="password" placeholder="Пароль" onChange={event => setPass(event.target.value)}
                   className="outline-0 w-[325px] h-[50px] px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"
                   value={pass}/>
            <input type="password" placeholder="Подтвердите пароль" onChange={event => setConfirmPass(event.target.value)}
                   className="outline-0 w-[325px] h-[50px] px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex"
                   value={confimPass}/>
            {msg!==''?
                <div className="text-red-600 text-center">{msg}</div>
            :null}
            <button onClick={autorize}
                    className="w-[236px] h-[53px] px-[26px] py-[5px] bg-black rounded-[30px] border border-white justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-xl font-normal font-['Roboto']">Зарегистрироваться</div>
            </button>
        </div>
    );
};

export default Registarion;