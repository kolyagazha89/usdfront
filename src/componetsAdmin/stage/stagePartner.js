import React, {useEffect, useState} from 'react';
import axios from "axios";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useParams} from "react-router-dom";

const StagePartner = ({data, del}) => {
    const [dataPart,setData]=useState([])
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/partners/partner/?partId='+data).then((res)=>setData(res.data))

    }, []);
    return (
        <div className="flex-col justify-start items-start inline-flex">
            <div
                className="w-[225px] h-[78px] px-2.5 pt-2.5 rounded-[20px] border border-stone-900 flex-col justify-start items-center flex">
                    {dataPart.map((item)=>
                        <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                            <div className="justify-start items-center flex">
                                <img className="w-[60px] h-[60px] rounded-[100px] border-2 border-neutral-950"
                                     src={"http://127.0.0.1:8000/img/?path=" + item.partner_logo}/>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-lg font-normal font-['Sora'] leading-[27px]">{item.partner_name}
                            </div>
                            <button onClick={()=>axios.post(`http://localhost:8000/stages/sp/delete/?stageId=${id}&partId=${item.partner_id}`).then(del(item.partner_id))}>
                                <XMarkIcon className="size-5 text-red-700"/>
                            </button>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default StagePartner;