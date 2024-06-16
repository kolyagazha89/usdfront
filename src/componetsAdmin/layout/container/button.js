import React from 'react';
import {PlusIcon} from "@heroicons/react/24/outline";

const Button = ({data,onclick}) => {
    return (
        <button onClick={onclick} className="ml-[30px] mt-[15px]  bg-white w-[152px] h-[40px] rounded-[14px]  inline-flex justify-center items-center">
            <PlusIcon className="size-5"/>
            <p className="text-center text-black text-sm font-bold font-['Roboto'] leading-[15px] tracking-tight">Добавить {data}</p>
        </button>
    );
};

export default Button;