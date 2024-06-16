import React, {useEffect, useState} from 'react';
import axios from "axios";
import {PencilIcon, PhotoIcon, TrashIcon,ArrowDownTrayIcon, ArrowUpTrayIcon} from "@heroicons/react/24/outline";
import {useNavigate} from "react-router-dom";


const StageComp = ({data,deletePart}) => {
    const navigate = useNavigate()
    return (
        <div
            className="w-[472px] px-6 py-4 bg-white rounded-[14px] flex-col justify-center items-center gap-3 inline-flex">
            <div
                className="w-56 h-8 text-black text-xl text-center font-medium font-['Roboto'] leading-normal tracking-tight">{data.stage_name}
            </div>
            <img src={"http://127.0.0.1:8000/img/?path=" + data.stage_photo}
                 className="w-[424px] h-[235px] bg-gradient-to-b from-black to-black rounded-[20px] border border-black"/>
            <div
                className="w-[223px] text-neutral-800 text-base font-normal font-['Roboto'] leading-normal tracking-tight">Количество
                участников - 140
            </div>

            <div className="w-[472px] inline-flex gap-5 justify-around">

                <div className="inline-flex gap-4">
                    <button>
                        <ArrowUpTrayIcon className="size-5"/>
                    </button>
                    <button>
                        <ArrowDownTrayIcon className="size-5"/>
                    </button>
                    <button>
                        <PhotoIcon className="size-5"/>
                    </button>
                    <button onClick={()=>navigate(`/admin/stage/add/${data.stage_id}`)}>
                        <PencilIcon className="size-5"/>
                    </button>
                    <button onClick={()=>axios.post('http://localhost:8000/stages/delete/?stageId='+data.stage_id).then(deletePart(data.stage_id))}>
                        <TrashIcon className="size-5 text-red-700"/>
                    </button>
                </div>
            </div>


        </div>

    );
};

export default StageComp;