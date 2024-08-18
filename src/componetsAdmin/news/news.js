import React, {useEffect, useState} from 'react';
import {CalendarIcon, CheckIcon, PencilIcon, PlusIcon, TrashIcon, XMarkIcon} from "@heroicons/react/24/outline";
import axios from "axios";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";

const News = () => {
    const navigate=useNavigate()
    const [user, setUser] = useState([])
    const [news, setNews]=useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/users/me', {
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res) => setUser(res.data))
        axios.get('http://localhost:8000/news/').then((res)=>setNews(res.data))
    }, []);
    const deleteNews = (newsid)=>{
        setNews(news.filter((elem)=>Number(elem.id_news) !== Number(newsid)))
    }
    return (
        <div className="flex-wrap items-start flex mb-10">
            <div
                className="w-[978px] h-fit mt-[15px] rounded-[20px] flex-col justify-center items-center inline-flex">
                <div className="h-fit flex-col justify-start items-center gap-10 flex">
                    <div className="w-[948px] justify-start items-center gap-10 inline-flex">
                        {news.map(item=>
                            <div className="w-[220px] px-2.5 pt-2.5 pb-[30px] bg-white rounded-[20px]  flex-col justify-start items-center gap-6 inline-flex">
                                <div
                                    className="self-stretch  rounded-[20px] border border-stone-900 justify-center items-center inline-flex">
                                    <img className="w-[200px] h-[120px] rounded-[20px]"
                                         src={"http://127.0.0.1:8000/img/?path=" + item.photo_news}/>
                                </div>
                                <div className="self-stretch  flex-col justify-center items-center gap-3.5 flex">
                                    <div
                                        className="self-stretch text-black text-lg font-semibold font-['Sora'] leading-[27px]">{item.name_news}
                                    </div>
                                </div>
                                <div className="inline-flex gap-5 justify-around">
                                    <div className="inline-flex gap-4">
                                        <button onClick={()=>navigate(`/admin/news/add/${item.id_news}`)}>
                                            <PencilIcon className="size-5"/>
                                        </button>
                                        <button onClick={()=>axios.post(`http://localhost:8000/news/delete/?newsId=${item.id_news}`).
                                                then((res)=>{if (res.data==='succes'){deleteNews(item.id_news)}})}>
                                            <TrashIcon className="size-5 text-red-700"/>
                                        </button>
                                    </div>
                                </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <Link to="/admin/news/add"
                className="ml-[30px] mt-[15px]  bg-white w-[152px] h-[40px] rounded-[14px]  inline-flex justify-center items-center">
                <PlusIcon className="size-5"/>
                <p className="text-center text-black text-sm font-bold font-['Roboto'] leading-[15px] tracking-tight">Добавить
                    новость</p>
            </Link>
        </div>
    );
};

export default News;