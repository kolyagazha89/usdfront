import React, {useEffect, useState} from 'react';
import axios from "axios";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useParams} from "react-router-dom";

const Tags = ({data,del}) => {
    const [dataTags,setData]=useState([])
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/tags/tag/?tagId='+data).then((res)=>setData(res.data))

    }, []);

    return (

        <div >
            {dataTags.map((item)=>
                <div className="px-[18px] py-3.5 rounded-[100px] border border-stone-900 justify-start items-center gap-2.5 flex">
                    <div className="text-neutral-800 text-[13px] font-normal font-['Sora'] leading-tight">{item.tag_name}
                    </div>
                    <button
                        onClick={() => axios.post(`http://localhost:8000/stages/st/delete/?stageId=${id}&tagsId=${item.tag_id}`).then(del(item.tag_id))}>
                        <XMarkIcon className="size-5 text-red-700"/>
                    </button>
                </div>)}
        </div>
    );
};

export default Tags;