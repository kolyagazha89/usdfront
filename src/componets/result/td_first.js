import React from 'react';

const TdFirst = ({isPlace,data}) => {
    if (isPlace===1) {
        return (
            <div className="w-[51px] self-stretch bg-yellow-400 bg-opacity-60  border-t border-zinc-600 flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex">
                    <div className="grow shrink text-center text-white text-xl font-normal font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===2){
        return (
            <div className="w-[300px] self-stretch bg-yellow-400 bg-opacity-60 border-l border-t border-zinc-600 flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="grow shrink text-center text-white text-xl font-normal font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===3){
        return (
            <div className="w-[110px] self-stretch bg-yellow-400 bg-opacity-60 border-l border-t border-zinc-600 flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="row shrink  text-center text-white text-xl font-normal font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===4){
        return (
            <div className="w-[200px] self-stretch bg-yellow-400 bg-opacity-60 border-l border-t border-zinc-600 flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="row shrink  text-center text-white text-xl font-normal font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===5){
        return (
            <div className="w-[150px] self-stretch bg-yellow-400 bg-opacity-60 border-l border-t border-zinc-600 flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="row shrink text-center text-white text-xl font-normal font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===6){
        return (
            <div className="w-[150px] self-stretch bg-yellow-400 bg-opacity-60 border-l border-t border-zinc-600 flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="row shrink  text-center text-white text-xl font-normal font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }
    if (isPlace===7){
        return (
            <div className="w-[200px] self-stretch bg-yellow-400 bg-opacity-60 border-l border-t border-zinc-600 flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex">
                    <div className="row shrink  text-center text-white text-xl font-normal font-['Inter'] leading-none">{data}
                    </div>
                </div>
            </div>
        );
    }

};

export default TdFirst;