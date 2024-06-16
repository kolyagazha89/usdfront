import React from 'react';
import "./result.module.scss"
const TdZag = ({isPlace,data}) => {
    if (isPlace===1) {
        return (
            <div className="w-[51px] self-stretch  flex-col justify-center items-center inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-xl font-semibold font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===2){
        return (
            <div className="w-[300px]  self-stretch border-l border-zinc-600 flex-col justify-center items-center inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-xl font-semibold font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===3){
        return (
            <div className="w-[110px]  self-stretch border-l border-zinc-600 flex-col justify-center items-center inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-xl font-semibold font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===4){
        return (
            <div className="w-[200px]  self-stretch border-l border-zinc-600 flex-col justify-center items-center inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-xl font-semibold font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===5){
        return (
            <div className="w-[150px]  self-stretch border-l border-zinc-600 flex-col justify-center items-center inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-xl font-semibold font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===6){
        return (
            <div className="w-[150px]  self-stretch border-l border-zinc-600 flex-col justify-center items-center inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-xl font-semibold font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===7){
        return (
            <div className="w-[200px]  self-stretch border-l border-zinc-600 flex-col justify-center items-center inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 text-center text-white text-xl font-semibold font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }

};

export default TdZag;