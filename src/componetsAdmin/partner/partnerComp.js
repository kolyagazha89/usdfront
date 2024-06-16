import React, {useEffect, useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {CheckIcon, PencilIcon, PlusIcon, TrashIcon, XMarkIcon} from "@heroicons/react/24/outline";
import style from './partner.module.scss'
import classNames from "classnames";
import axios from "axios";
import {Link} from "react-router-dom";
const PartnerComp = ({deletePart,data,addPart}) => {
    const [hidden, setState] = useState(true)
    const [namePart, setName]=useState(data[0])
    const [descPart, setDesc]=useState(data[1])
    const [readOnly, setRead]=useState(true)
    const [photo, setPhoto]=useState("")
    const [msg, setMsg]=useState("")
    const [type, setType]=useState([])
    const [typeCheck, setTypeCheck]=useState(data[4])
    const [typeIn, setTypeIn]=useState([])
    const classes = classNames({
        hidden:!hidden,
        [style.aprove]:hidden,
    })
    const classesAprove = classNames({
        hidden:hidden,
        [style.aprove]:!hidden,
    })
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/partners/tp/').then((res)=>
            setType(res.data)
        )
        if(typeCheck>0)
            axios.get('http://127.0.0.1:8000/partners/tpelem/?tpId='+typeCheck).then((res) =>
                setTypeIn(res.data)
            )
    },[])
    console.log(typeIn)
    useEffect(() => {
        setName(data[0])
        setDesc(data[1])
    },[data]);
    function hideBtn() {
        if (readOnly){
            setRead(false)
        }
        setState(state=>!state)
    }
    function unHideBtn() {
        if (!readOnly){
            setRead(true)
        }
        setState(state=>!state)
    }
    function changePart(){
        if (data[3]) {
            axios.post(
                'http://127.0.0.1:8000/partners/edit/?partId=' + data[3],
                {partner_name: namePart, partner_desc: descPart, partner_logo: photo,partner_type:typeCheck}).then(()=>
                        addPart()
                        )
        }
        else{
            axios.post("http://127.0.0.1:8000/partners/add",
                {partner_name: namePart, partner_desc: descPart, partner_logo: photo,partner_type:typeCheck}).then(()=>
                        addPart()
            )
        }

        if (!readOnly){
            setRead(true)
        }
        setState(state=>!state)
    }
    const onSelect=(event)=>{
        setTypeCheck(event.target.value)
    }
    const deletePartner = (id)=> {
        if (id) {
            axios.post('http://127.0.0.1:8000/partners/delete/?partId=' + id).then(() => deletePart(id))
        }
    }
    const onFileChange = (event) => {
        setPhoto(event.target.files[0])
    }
    const uploadFileData = (event) => {
        setMsg("")
        const data = new FormData();
        data.append('file', photo);
        axios.post('http://localhost:8000/img/upload', data).then((res) => {
            setMsg("Фото загружено")
            setPhoto(res.data.filename.filename)
            }
        )
    }
    return (
        <div id="Comp" className="w-[960px] p-5 rounded-[15px]  bg-white justify-center items-center gap-[50px] inline-flex">
            {readOnly ?
                <img className="w-[156px] h-[97px] p-2.5 rounded-[20px]"
                             src={"http://127.0.0.1:8000/img/?path=" + data[2]}/>
                :<div className="flex flex-wrap w-[240px] items-center justify-center">
                    <h4 className="flex">{msg}</h4>
                    <input type="file" className="flex" onChange={onFileChange}/>
                    <button disabled={!photo} className="ml-[30px] mt-[15px]  bg-gray-300 w-[152px] h-[40px] rounded-[14px]  inline-flex justify-center items-center" onClick={uploadFileData}>Загрузить</button>
                </div>
            }
                <div className="grow shrink basis-0 px-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch justify-start items-center gap-6 inline-flex">
                    <input type="text" className="grow shrink basis-0 text-black text-[28px] font-semibold font-['Sora'] leading-[42px] outline-0" placeholder="Название" onChange={event=>setName(event.target.value)} readOnly={readOnly} value={namePart}/>
                    {!readOnly ?
                        <select onChange={onSelect} className="rounded-xl p-[5px] border border-stone-900 outline-0 text-center text-black text-sm font-normal font-['Sora'] leading-[21px]">
                            <option selected={true} disabled={true}>Тип партнера</option>
                            {type.map((item)=>
                                <option value={item.TP_id}>{item.TP_name}</option>
                            )}
                        </select>
                        :
                        typeIn.map((elem)=><p>{elem.TP_name}</p>)

                    }
                </div>
                <div
                    className="self-stretch h-fit px-5 pt-2.5 pb-5 bg-white rounded-[20px] border border-stone-900 flex-col justify-start items-start gap-2.5 flex overflow-auto">
                    <div className="self-stretch text-black text-base font-normal font-['Sora'] leading-normal">Описание
                    </div>
                    <TextareaAutosize className="self-stretch text-zinc-800 h-fit text-xl font-normal font-['Sora'] leading-[21px] outline-0 resize-none overflow-hidden" placeholder="Описание" readOnly={readOnly}  onChange={event=>setDesc(event.target.value)} value={descPart}/>
                </div>
                <div >
                    <div className={classes}>
                        <Link to={'/admin/partner/np'} >
                            <PlusIcon className="size-5"/>
                        </Link>
                        <button onClick={hideBtn}>
                            <PencilIcon className="size-5"/>
                        </button>
                        <button onClick={() => deletePartner(data[3])}>
                            <TrashIcon className="size-5 text-red-700"/>
                        </button>
                    </div>
                    <div className={classesAprove}>
                        <button onClick={changePart}>
                        <CheckIcon  className="size-5 text-green-600"/>
                        </button>
                        <button onClick={unHideBtn}>
                            <XMarkIcon className="size-5 text-red-700"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerComp;