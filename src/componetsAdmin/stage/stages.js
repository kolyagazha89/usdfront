import React, {createRef, useEffect, useState} from 'react';
import StageComp from "./stageComp";
import Button from "../layout/container/button";
import {PlusIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import axios from "axios";

const Stages = () => {
    const refComponent = createRef();
    const [button, setButton]=useState(false)
    const [stage, SetStage] = useState([])
    const [y,setY]=useState(0)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/stages').then((res)=>SetStage(res.data))
    }, []);
    useEffect(() => {
        const height = refComponent.current.getBoundingClientRect().height;
        setY(height)
    }, [refComponent]);
    useEffect(() => {
        if(button){
            SetStage([...stage,
                {
                    stage_id:""
                }])
            setButton(false)
        }
        window.scroll(0,y)
    },[button]);
    const deleteStage=(id)=>{
        SetStage(stage.filter((elem)=>elem.stage_id !== id))
    }
    return (
        <div className="flex-wrap items-start flex">
            <div ref={refComponent} className="w-[960px] h-fit justify-start items-center gap-4 inline-flex ml-[15px] mt-[15px] flex-wrap ">
                {stage.map((item)=>
                    <StageComp data={item} deletePart={(id)=>deleteStage(id) }></StageComp>
                )}
            </div>
            <Link to="/admin/stage/add"
                    className="ml-[30px] mt-[15px]  bg-white w-[152px] h-[40px] rounded-[14px]  inline-flex justify-center items-center">
                <PlusIcon className="size-5"/>
                <p className="text-center text-black text-sm font-bold font-['Roboto'] leading-[15px] tracking-tight">Добавить этап</p>
            </Link>
        </div>
    );
};

export default Stages;