import React, {useEffect, useState} from 'react';
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import {CheckIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";

const NewsElem = () => {
    const navigate=useNavigate();
    const params = useParams();
    const [name, setName]=useState('')
    const [text, setText]=useState('')
    const [photo, setPhoto]=useState('')
    const [id, setId]=useState(0)
    const idNews = params.id;
    useEffect(() => {
        axios.get('http://localhost:8000/users/me',{
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res)=>setId(res.data.id))
        if (idNews){
            axios.get(`http://localhost:8000/news/news/?newsId=${idNews}`).then((res)=>{
                console.log(res.data)
                res.data.map(item=>{
                    setName(item.name_news)
                    setText(item.text_news)
                    setPhoto(item.photo_news)
                })
            })

        }
    }, []);
    const uploadFileData = (event) => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post('http://localhost:8000/img/upload', data).then((res) => {
            setPhoto(res.data.filename.filename)
        })
    }
    const addNews =()=>{
        if(!idNews){
            axios.post('http://localhost:8000/news/add', {
                name_news:name,
                text_news:text,
                photo_news:photo,
                user_id:id
            }).then((res)=>{
                if(res.data==='succes'){
                    navigate('/admin/news')
                }
            })
        }
        else{
            axios.post(`http://localhost:8000/news/edit/?newsId=${idNews}`,{
                name_news:name,
                text_news:text,
                photo_news:photo,
                user_id:id
            }).then((res)=>{
                if(res.data==='succes'){
                    navigate('/admin/news')
                }
            })
        }

    }
    return (
        <>
            <div
                className="w-[962px] h-fit p-2.5 bg-white rounded-[20px] flex-col justify-center items-center gap-5 ml-[15px] mt-[15px] inline-flex ">
                <div className="justify-center items-center inline-flex">
                    <div
                        className="text-center text-black text-2xl font-bold font-['Roboto'] leading-[15px] tracking-wide">Добавить
                        новость
                    </div>
                </div>
                <div className="justify-center items-center gap-5 inline-flex flex-wrap">
                    <div className="px-2.5 inline-flex justify-start items-center gap-[15px]">
                        <input type="text" onChange={event=>setName(event.target.value)} value={name}
                               className="w-[325px] h-[50px] px-5 py-4 rounded-[10px] border border-zinc-800 justify-center items-center inline-flex "
                               placeholder="Название">
                        </input>
                        <input onChange={uploadFileData} type="file"/>
                    </div>
                    <div
                        className="w-[650px] self-stretch px-2.5 flex-col justify-start items-center gap-[15px] inline-flex">
                        <TextareaAutosize onChange={event=>setText(event.target.value)} value={text}
                            className="outline-0 resize-none px-5 py-4 rounded-[10px] overflow-hidden border border-zinc-800 self-stretch text-neutral-700 text-lg font-normal font-['Sora'] leading-[27px]"
                            placeholder="Текст новости">
                        </TextareaAutosize>
                    </div>
                </div>
                <div className="inline-flex gap-4">
                    <button  onClick={addNews} className="inline-flex justify-center text-center h-fit">
                        <CheckIcon className='size-6 text-green-600'></CheckIcon>
                        <p className="text-green-600 text-xl justify-center text-center font-bold font-['Roboto'] leading-[22px] tracking-tight">ОК</p>
                    </button>
                    <button onClick={()=>navigate('/admin/news')} className="inline-flex justify-center text-center  h-fit">
                        <XMarkIcon className='size-6 text-red-600'></XMarkIcon>
                        <p className="text-red-600 text-xl justify-center text-center font-bold font-['Roboto'] leading-[22px] tracking-tight">ОТМЕНА</p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewsElem;