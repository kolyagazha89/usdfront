import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
export const authContext=createContext()
const Context = (props) => {
    const [auth,setAuth]=useState(false)
    const [authAdmin,setAuthAdmin]=useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/protected-route',{
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res)=>setAuth(true)
        ).catch((exp)=>setAuth(false))
        axios.get('http://localhost:8000/protected-route/super',{
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res)=>setAuthAdmin(true)
        ).catch((exp)=>setAuthAdmin(false))
    }, []);
    const sucessAuth=(val)=>{
        if(val) {
            axios.get('http://localhost:8000/protected-route', {
                headers: {
                    'accept': 'application/json'
                },
                withCredentials: true
            }).then((res) => setAuth(true)
            ).catch((exp) => setAuth(false))
            axios.get('http://localhost:8000/protected-route/super',{
                headers: {
                    'accept': 'application/json'
                },
                withCredentials: true
            }).then((res)=>setAuthAdmin(true)
            ).catch((exp)=>setAuthAdmin(false))
        }else{
            setAuth(false)
            setAuthAdmin(false)
        }
    }
    const value={
        auth,
        authAdmin,
        sucessAuth
    }
    return (
        <authContext.Provider value={value}>{props.children}</authContext.Provider>
    );
};

export default Context;