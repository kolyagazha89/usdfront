import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Bars3Icon} from "@heroicons/react/24/solid";

const HeaderAdmin = () => {
    const [user,setUser]=useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/users/me',{
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res)=>setUser(res.data))
    }, []);
    return (
        <div
            className="w-[1440px]  h-16 px-[15px] sm:mx-[20px] sm:h-[100px] lg:mx-[200px] bg-white rounded-b-[14px] justify-between items-center gap-[276px] inline-flex mx-[200px]">
            <div className="h-10 justify-start items-center gap-2.5 flex ml-[5px]">
                <div className="w-[70px] h-[70px] ">
                    <img className="w-[150px] h-[70px] rounded-full" src={"http://127.0.0.1:8000/img/?path="+user.photo}/>
                </div>
                <div
                    className="w-[250px] h-[26px] text-black text-[30px] font-medium font-['Roboto'] leading-[30px] tracking-tight">{user.username}
                </div>
            </div>
            <Bars3Icon className="size-7"></Bars3Icon>
        </div>
    );
};

export default HeaderAdmin;