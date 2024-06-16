import React, {createRef, useEffect, useState} from 'react';
import PartnerComp from "./partnerComp";
import Button from "../layout/container/button";
import axios from "axios";
import PartElem from "../../componets/partner/part_elem";
import {PlusIcon} from "@heroicons/react/24/outline";

const PartnersAdmin = () => {
    const refComponent = createRef();
    const [partner, SetPatner] = useState([])
    const [button, setButton]=useState(false)
    const [y,setY]=useState(0)
    const deletePart = (id)=>{
        SetPatner(partner.filter((elem)=>elem.partner_id !== id))
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/partners/').then((res)=>{
            SetPatner(res.data)
        })

    }, []);
    useEffect(() => {
        const height = refComponent.current.getBoundingClientRect().height;
        setY(height)
    }, [refComponent]);
    useEffect(() => {
        if(button){
            SetPatner([...partner,
                {
                partner_name:"",
                partner_desc:"",
                partner_logo:""
            }])
            setButton(false)
        }
        window.scroll(0,y)
    },[button]);
    return (
        <div className="flex-wrap items-start flex">
            <div ref={refComponent}
                className="w-[960px] h-fit justify-start items-center gap-4 inline-flex ml-[15px] mt-[15px] flex-wrap ">
                {partner.map(item =>
                    <PartnerComp addPart={()=>axios.get('http://127.0.0.1:8000/partners/').then((res)=>{
                        SetPatner(res.data)
                    })} deletePart={(id)=>deletePart(id)} data={[item.partner_name, item.partner_desc, item.partner_logo, item.partner_id ,item.partner_type]}/>
                )}
            </div>
            <button onClick={()=>setButton(true)}
                    className="ml-[30px] mt-[15px]  bg-white w-[152px] h-[40px] rounded-[14px]  inline-flex justify-center items-center">
                <PlusIcon className="size-5"/>
                <p className="text-center text-black text-sm font-bold font-['Roboto'] leading-[15px] tracking-tight">Добавить Партнера</p>
            </button>
        </div>
    );
};

export default PartnersAdmin;