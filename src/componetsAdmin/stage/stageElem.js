import React, {useEffect, useState} from 'react';
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import Tags from "./tags";
import {CheckIcon, PlusIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import Partner from "../../componets/calendar/partner";
import StagePartner from "./stagePartner";

const StageElem = () => {
    const params = useParams();
    const id = params.id;
    const [type,setType]=useState([])
    const [tags,setTags]=useState([])
    const [nameTag, setNameTag]=useState("")
    const [msg, setMsg]=useState("")
    const [dataTags,setDataTags]=useState([])
    const [dataPart, setDataPart]=useState([])
    const [part, setPart]=useState([])
    const [button, setButton]=useState(false)
    const navigate = useNavigate()
    const[lastid,setLastid]=useState('')
    //Добавление
    const [name, setName]=useState("")
    const [desc, setDesc]=useState("")
    const [city, setCity]=useState("")
    const [place, setPlace]=useState("")
    const [dateStage, setDateStage]=useState("")
    const [photo, setPhoto]=useState("")
    const [typeStage,setTypeStage]=useState("")
    const deletePart = (partid)=>{
        setPart(part.filter((elem)=>Number(elem.partner_id) !== Number(partid)))
    }
    const deleteTag = (tagid)=>{
        setDataTags(dataTags.filter((elem)=>Number(elem.tag_id) !== Number(tagid)))
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/type/').then((res)=>setType(res.data))
        axios.get('http://127.0.0.1:8000/partners/').then((res)=>setDataPart(res.data))
        if (id){
            axios.get('http://127.0.0.1:8000/stages/stage/?stageId='+id).then((res)=>{
                res.data.map((item)=>{
                    setName(item.stage_name)
                    setDesc(item.stage_desc)
                    setCity(item.stage_city)
                    setPlace(item.stage_place)
                    setDateStage(item.stage_date)
                    setPhoto(item.stage_photo)
                    setTypeStage(item.stage_type)
                })
            })
            axios.get('http://127.0.0.1:8000/stages/sp/?stageId='+id).then((res)=>{
                setPart([...part,
                    ...res.data.map((item)=>({
                        partner_id:item.SP_partner
                    }))
                ])
            })
            axios.get('http://127.0.0.1:8000/stages/st/?stageId='+id).then((res)=>{
                setDataTags([...dataTags,
                    ...res.data.map((item)=>({
                        tag_id:item.ST_tags
                    }))
                ])
            })
        }

    }, []);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/tags/').then((res)=>setTags(res.data))
    }, [button]);
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
    const onSelectTags=(event)=>{
        setDataTags([...dataTags,{
            tag_id:event.target.value,

        }])
        setTags(tags.filter((elem)=>elem.tag_name !== event.nativeEvent.target[event.target.selectedIndex].text))
    }
    const onSelectPart=(event)=>{
        setPart([...part,{
            partner_id:event.target.value
        }])
        setDataPart(dataPart.filter((elem)=>elem.partner_name !== event.nativeEvent.target[event.target.selectedIndex].text))

    }
    const addStage = ()=>{
        if(!id){
            axios.post('http://localhost:8000/stages/add',{
                stage_name:name,
                stage_desc:desc,
                stage_photo:photo,
                stage_city:city,
                stage_place:place,
                stage_date:dateStage,
                stage_type:typeStage
            }).then((res)=>{
                if (res.data === 'succes'){
                    axios.get('http://localhost:8000/stages/lastid').then((res)=>{
                        setLastid(res.data.stage_id)
                        axios.post('http://localhost:8000/stages/sp/add',{
                            SP_stage:lastid,
                            SP_partner:part
                        })
                        axios.post('http://localhost:8000/stages/st/add',{
                            ST_stage:lastid,
                            ST_tags:dataTags
                        })
                    })
                    console.log(lastid)
                    console.log(part)
                    console.log(dataTags)
                    // navigate("/admin/stage")
                }
            })
        }else{
            axios.post('http://localhost:8000/stages/edit/?stageId='+id,{
                stage_name:name,
                stage_desc:desc,
                stage_photo:photo,
                stage_city:city,
                stage_place:place,
                stage_date:dateStage,
                stage_type:typeStage
            }).then((res)=>{
                if (res.data === 'succes'){
                    axios.post('http://localhost:8000/stages/sp/add',{
                        SP_stage:id,
                        SP_partner:part
                    })
                    axios.post('http://localhost:8000/stages/st/add',{
                        ST_stage:id,
                        ST_tags:dataTags
                    })

                    // navigate("/admin/stage")
                }
            })
        }

    }
    return (
        <div className="flex-wrap items-start flex">
            <div
                className="w-[960px] h-fit p-[15px] ml-[15px] mt-[15px] bg-white rounded-[20px] flex-col justify-center items-end gap-[15px] inline-flex">
                <input type="text"
                       className="w-[930px]  outline-0 h-8 text-black text-center text-xl font-medium font-['Roboto'] leading-normal tracking-tight"
                       placeholder="Название" onChange={event=>setName(event.target.value)} value={name}>
                </input>
                <div className=" w-[930px] inline-flex gap-2 items-center justify-center">
                    {photo !== "" ? <img src={'http://localhost:8000/img/?path=' + photo}
                                         className="w-[507px] h-72 bg-gradient-to-b from-black to-black rounded-[20px] border border-black"/> : null}
                    <div className="flex flex-wrap w-[240px] items-center justify-center">
                        <h4 className="flex">{msg}</h4>
                        <input type="file" className="flex" onChange={onFileChange}/>
                        <button disabled={photo === ""}
                                className="ml-[30px] mt-[15px]  bg-gray-300 w-[152px] h-[40px] rounded-[14px]  inline-flex justify-center items-center"
                                onClick={uploadFileData}>Загрузить
                        </button>
                    </div>
                </div>
                <div className="self-stretch h-fit flex-col justify-start items-start gap-[15px] flex">
                    <div className="self-stretch h-fit flex-col justify-start items-start gap-5 flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            {dataTags.map(item => <Tags data={item.tag_id} del={(tagid)=>deleteTag(tagid)}/>)}
                            {dataTags.length < 3 ?
                                <select onChange={onSelectTags}
                                        className="rounded-xl p-[5px] border border-stone-900 outline-0 text-center text-black text-sm font-normal font-['Sora'] leading-[21px]">
                                    <option selected disabled>Примечание этапа</option>
                                    {tags.map(item =>
                                        <option value={item.tag_id}>{item.tag_name}</option>
                                    )}
                                </select> : null}
                        </div>
                    </div>
                    <div
                        className="self-stretch h-fit px-[50px] py-5 bg-white rounded-[20px] border border-stone-900 flex-col justify-start items-start gap-5 flex">
                        <div className="self-stretch h-fit flex-col justify-start items-start gap-3.5 flex">
                            <div
                                className="self-stretch text-black text-[22px] font-normal font-['Sora'] leading-[33px]">Описание
                                этапа
                            </div>
                            <TextareaAutosize
                                className="outline-0 resize-none overflow-hidden self-stretch text-neutral-700 text-lg font-normal font-['Sora'] leading-[27px]"
                                placeholder="Описание этапа" onChange={event=>setDesc(event.target.value)} value={desc}>
                            </TextareaAutosize>
                        </div>
                        <div className="self-stretch h-fit flex-col justify-start items-start gap-[10px] flex">
                            <div
                                className="self-stretch px-[20px] py-[17px] rounded-xl border border-stone-900 justify-between items-center  inline-flex">
                                <div
                                    className="w-[200px]  flex-col justify-center items-center gap-1.5 inline-flex border-gradient-b-border-record-white border-transparent border-solid border-r-[1px]">
                                    <div
                                        className="text-neutral-700 text-xs font-normal font-['Sora'] leading-[18px]">Город
                                    </div>
                                    <input type="text"
                                           className="outline-0 text-center text-black text-sm font-normal font-['Sora'] leading-[21px]"
                                           placeholder="Тюмень" onChange={event=>setCity(event.target.value)} value={city} />
                                </div>
                                <div
                                    className="w-[200px]  flex-col justify-center items-center gap-1.5 inline-flex border-gradient-b-border-record-white border-transparent border-solid border-r-[1px]">
                                    <div
                                        className="text-neutral-700 text-xs font-normal font-['Sora'] leading-[18px]">Место
                                        проведения
                                    </div>
                                    <input type="text"
                                           className="outline-0 text-center text-black text-sm font-normal font-['Sora'] leading-[21px]"
                                           placeholder="ТРЦ Кристалл" onChange={event=>setPlace(event.target.value)} value={place}/>
                                </div>
                                <div
                                    className=" w-[200px]  flex-col justify-center items-center gap-1.5 inline-flex border-gradient-b-border-record-white border-transparent border-solid border-r-[1px]">
                                    <div
                                        className="text-neutral-700 text-xs font-normal font-['Sora'] leading-[18px]">Дата
                                        проведения
                                    </div>
                                    <input type="date"
                                           className=" outline-0 text-center text-black text-sm font-normal font-['Sora'] leading-[21px]" onChange={event=>setDateStage(event.target.value)} value={dateStage}/>
                                </div>
                                <div className="w-[200px]  flex-col justify-center items-center gap-1.5 inline-flex">
                                    <div
                                        className="text-neutral-700 text-xs font-normal font-['Sora'] leading-[18px]">Тип
                                        этапа
                                    </div>
                                    <select onChange={(event) =>setTypeStage(event.target.value) }
                                            className=" outline-0 text-center text-black text-sm font-normal font-['Sora'] leading-[21px]">
                                        {type.map(item =>
                                            <option value={item.type_id}>{item.type_name}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div
                                className="self-stretch h-fit px-[50px] py-2.5 bg-white rounded-[20px] border border-stone-900 flex-col justify-center items-start gap-[15px] flex">
                                <div className="self-stretch text-black text-xl items-center font-normal font-['Sora'] leading-[30px] inline-flex">Партнеры
                                    <select onChange={onSelectPart} className="rounded-xl p-[5px] outline-0 text-center text-black text-sm font-normal font-['Sora'] leading-[21px]">
                                        <option selected disabled>Партнер</option>
                                        {dataPart.map(item =>
                                            <option value={item.partner_id}>{item.partner_name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="self-stretch justify-start items-start flex-wrap gap-5 inline-flex">
                                    {part.map((elem)=>
                                        <StagePartner data={elem.partner_id}  del={(partid)=>deletePart(partid)}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-flex gap-4">
                    <button onClick={addStage} className="inline-flex justify-center text-center h-fit">
                        <CheckIcon  className='size-6 text-green-600'></CheckIcon>
                        <p className="text-green-600 text-xl justify-center text-center font-bold font-['Roboto'] leading-[22px] tracking-tight">ОК</p>
                    </button>
                    <button className="inline-flex justify-center text-center  h-fit">
                        <XMarkIcon className='size-6 text-red-600'></XMarkIcon>
                        <p className="text-red-600 text-xl justify-center text-center font-bold font-['Roboto'] leading-[22px] tracking-tight">ОТМЕНА</p>
                    </button>
                </div>
            </div>
            <div className="w-[160px] flex-col h-fit ">
                {!button ?
                    <button onClick={() => setButton(true)}
                            className="ml-[30px] my-[15px]  bg-white w-[162px] h-[40px] rounded-[14px]  inline-flex justify-center items-center">
                        <PlusIcon className="size-5"/>
                        <p className="text-center text-black text-sm font-bold font-['Roboto'] leading-[15px] tracking-tight">Добавить
                            примечание</p>
                    </button>
                    : <div
                        className=" ml-[30px] mt-[15px] w-[162px] h-fit rounded-[14px]  flex-col justify-center items-center ">
                        <input type="text" placeholder="Название" onChange={event => setNameTag(event.target.value)}
                               className=" outline-0  p-3  bg-white w-[162px] h-[40px] rounded-[14px]  inline-flex justify-center items-center"
                               value={nameTag}/>
                        <div className="inline-flex gap-4 h-fit mt-[5px] w-[162px] justify-center items-center">
                            <button
                                onClick={() => axios.post('http://127.0.0.1:8000/tags/add/', {tag_name: nameTag}).then(() => setButton(false))}>
                            <CheckIcon className="size-5 text-green-600"/>
                            </button>
                            <button onClick={()=>setButton(false)}>
                                <XMarkIcon className="size-5 text-red-700"/>
                            </button>
                        </div>
                    </div>
            }
            <Link to={'/admin/partner'}
                  className="ml-[30px]  bg-white w-[162px] h-[40px] rounded-[14px]  inline-flex justify-center items-center">
                    <PlusIcon className="size-5"/>
                    <p className="text-center text-black text-sm font-bold font-['Roboto'] leading-[15px] tracking-tight">Добавить
                        партнера</p>
                </Link>
            </div>
        </div>
    );
};

export default StageElem;