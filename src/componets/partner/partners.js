import React, {useEffect, useState} from 'react';
import style from "./partner.module.scss"
import PartElem from "./part_elem";
import axios from "axios";
const Partners = () => {
    const [partner, SetPatner] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/partners/').then((res)=>{
            SetPatner(res.data)
        })
    }, []);
    return (
        <div className={style.main_cont}>
            <div className={style.main_cont1}>
                <div className={style.main_cont2}>
                    {partner.map(item=>
                        <PartElem data={[item.partner_name,item.partner_desc,item.partner_logo]}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Partners;