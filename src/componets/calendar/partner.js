import React, {useEffect, useState} from 'react';
import style from "./calendar.module.scss"
import axios from "axios";
const Partner = ({data}) => {
    const [dataPart,setDataPart]=useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/partners/partner/?partId='+data).then((res)=>setDataPart(res.data))
    }, []);

    return (
        <div className={style.info_part_cont_shadow}>
            {dataPart.map((item)=>
                <div className={style.info_part_elem}>
                    <div className={style.info_part_img}>
                        <img src={"http://127.0.0.1:8000/img/?path="+item.partner_logo}/>
                    </div>
                    <div className={style.info_part_name}>{item.partner_name}</div>
                </div>
            )}
        </div>
    );
};

export default Partner;