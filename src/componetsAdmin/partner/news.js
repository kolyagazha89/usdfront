import React from 'react';
import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline";

const News = () => {
    return (
        <div className="flex-col justify-start items-start gap-[21px] inline-flex bg-white rounded-[18px] p-3">
            <div className="self-stretch h-[303px] flex-col justify-start items-start gap-[30px] flex">
                <div
                    className="w-[431px] h-[214px] rounded-[20px] border border-neutral-800 flex-col justify-start items-start gap-[30px] flex">
                    <img className="w-[431px] h-[214px] rounded-[20px]"
                         src={"http://127.0.0.1:8000/img/?path=" + "news_partner.jpg"}/>
                </div>
                <div className="inline-flex gap-5 w-[430px] justify-between">
                    <div className="justify-center items-center gap-3.5 inline-flex">
                        <img className="w-[58px] h-[58px] rounded-[20px]"
                             src={"http://127.0.0.1:8000/img/?path=" + "logopart.jpg"}/>
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                            <div
                                className="self-stretch text-black text-xl font-normal font-['Sora'] leading-[30px]">Alphard
                                Group
                            </div>
                            <div
                                className="self-stretch text-zinc-500 text-lg font-light font-['Sora'] leading-[27px]">Генеральный
                                партнер
                            </div>

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
    );
};

export default News;