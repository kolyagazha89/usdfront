import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Autorization = ({succes,reg}) => {
    const [login, setLogin]=useState("")
    const [pass, setPass]=useState("")
    const [msg,setMsg]=useState('')
    const navigate=useNavigate()
    const autorize =()=>{
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
        ).then((res)=>
           succes(true)
        ).catch((exp)=> {
            setMsg("Логин или пароль неккоректны")
            succes(false)
            navigate('/')
        })
    }
    return (
        <div className="w-[340px] h-fit  bg-black flex-col border border-neutral-200 justify-start items-center gap-[15px] inline-flex p-2 rounded-[17px]">
            <input type="text" placeholder="Логин"  onChange={event=>setLogin(event.target.value)} className="outline-0 w-[325px] h-[50px] px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex" value={login}/>
            <input type="password" placeholder="Пароль" onChange={event=>setPass(event.target.value)} className="outline-0 w-[325px] h-[50px] px-5 py-4 rounded-[10px] border border-neutral-200 justify-center items-center inline-flex" value={pass}/>
            {msg!==''?
                <div className="text-red-600 text-center">{msg}</div>
                :null}
            <button onClick={reg} className="text-white">Зарегистрироваться</button>
            <button onClick={autorize} className="w-[236px] h-[53px] px-[26px] py-[5px] bg-black rounded-[30px] border border-white justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-xl font-normal font-['Roboto']">Войти</div>
            </button>
        </div>
    );
};

export default Autorization;