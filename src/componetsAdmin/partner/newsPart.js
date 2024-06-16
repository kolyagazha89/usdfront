import React from 'react';
import {PlusIcon} from "@heroicons/react/24/outline";
import News from "./news";

const NewsPart = () => {
    return (
        <div className="flex-wrap items-start flex">
            <div className="w-[910px] h-[646px] ml-[15px] mt-[15px] justify-start items-start flex-wrap gap-5 inline-flex  rounded-[15px]">
                <News></News>

            </div>
            <button
                    className="ml-[30px] mt-[15px]  bg-white w-[152px] h-[40px] rounded-[14px]  inline-flex justify-center items-center">
                <PlusIcon className="size-5"/>
                <p className="text-center text-black text-sm font-bold font-['Roboto'] leading-[15px] tracking-tight">Добавить новинку</p>
            </button>
        </div>
    );
};

export default NewsPart;