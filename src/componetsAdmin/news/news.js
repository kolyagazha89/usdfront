import React, {useEffect, useState} from 'react';
import {CalendarIcon, CheckIcon, PencilIcon, PlusIcon, TrashIcon, XMarkIcon} from "@heroicons/react/24/outline";
import axios from "axios";
import {Link} from "react-router-dom";

const News = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/users/me', {
            headers: {
                'accept': 'application/json'
            },
            withCredentials: true
        }).then((res) => setUser(res.data))
    }, []);
    return (
        <div className="flex-wrap items-start flex">
            <div
                className="w-[978px] h-fit mt-[15px] rounded-[20px] flex-col justify-center items-center inline-flex">
                <div className="h-[661px] flex-col justify-start items-center gap-10 flex">
                    <div className="w-[948px] justify-start items-center gap-10 inline-flex">
                        <div
                            className="w-[440px] px-2.5 pt-2.5 pb-[30px] bg-white rounded-[20px]  flex-col justify-start items-center gap-6 inline-flex">
                            <div
                                className="self-stretch h-[337px] rounded-[20px] border border-stone-900 justify-center items-center inline-flex">
                                <img className="w-[540px] h-[335px] rounded-[20px]"
                                     src={"http://127.0.0.1:8000/img/?path=" + "news.jpg"}/>
                            </div>
                            <div className="self-stretch justify-start items-center inline-flex">
                                <div className="grow shrink basis-0 h-[50px] justify-start items-center gap-2 flex">
                                    <img className="w-[50px] h-[50px] rounded-[100px]"
                                         src={"http://127.0.0.1:8000/img/?path=" + user.photo}/>
                                    <div
                                        className="grow shrink basis-0 text-black text-base font-normal font-['Sora'] leading-normal">{user.username}
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-2 flex">
                                    <div
                                        className="px-3.5 py-2.5 rounded-[100px] border border-stone-900 justify-start items-center gap-2.5 flex">
                                        <CalendarIcon className="size-5"/>
                                        <div
                                            className="text-neutral-700 text-base font-normal font-['Sora'] leading-normal">Сентбярь
                                            2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[113px] flex-col justify-start items-start gap-3.5 flex">
                                <div
                                    className="self-stretch text-black text-lg font-semibold font-['Sora'] leading-[27px]">Завершение
                                    сезона 2023
                                </div>
                                <div
                                    className="self-stretch text-stone-900 text-base font-normal font-['Sora'] leading-normal">Ну
                                    вот и завершился сезон 2023. Финал состоялся по истине фееричный. Мы обещали, что
                                    это, будет САМЫЙ КРУТОЙ ФИНАЛ....
                                </div>
                            </div>
                            <div className="inline-flex gap-5 justify-around">
                                <div
                                    className="px-6 py-3.5 bg-white rounded-[74px] border border-neutral-800 justify-center items-center gap-2.5 inline-flex">
                                    <div
                                        className="text-black text-sm font-normal font-['Sora'] leading-[21px]">Смотреть
                                        больше
                                    </div>
                                </div>
                                <div className="inline-flex gap-4">
                                    <button>
                                        <PencilIcon className="size-5"/>
                                    </button>
                                    <button>
                                        <TrashIcon className="size-5 text-red-700"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="ml-[30px] mt-[15px]  bg-white w-[152px] h-[40px] rounded-[14px]  inline-flex justify-center items-center">
                <PlusIcon className="size-5"/>
                <p className="text-center text-black text-sm font-bold font-['Roboto'] leading-[15px] tracking-tight">Добавить
                    новость</p>
            </button>
        </div>
    );
};

export default News;