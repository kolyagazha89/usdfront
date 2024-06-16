import React, {useEffect, useState} from 'react';
import style from "./calendar.module.scss"
import axios from "axios";
const Prim = ({text}) => {
    const [dataPart,setDataPart]=useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/tags/tag/?tagId='+text).then((res)=>setDataPart(res.data))
    }, []);
    return (
        <div className={style.prim}>
            {dataPart.map((item)=>
            <div className={style.prim_text}>{item.tag_name}
            </div>
            )}
        </div>
    );
};

export default Prim;