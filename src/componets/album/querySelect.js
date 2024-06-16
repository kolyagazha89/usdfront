import React from 'react';
import "./album.module.scss"
const QuerySelect = ({block,val, query, data}) => {
    return (
        <div className="w-[260px] h-[65px] pl-6 pr-4 py-4 bg-[#0F0F0F] rounded-[15px] flex-col justify-center items-start gap-6 inline-flex">
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="opacity-50 text-white text-lg font-bold font-['Raleway'] pl-[5px]">{query}
                    </div>
                    <select disabled={block}
                            onChange={(event) => val(event.nativeEvent.target[event.target.selectedIndex].text)}
                            className="text-white bg-[#0F0F0F] text-xl font-medium font-['Raleway'] w-full">
                        <option selected={true} disabled={true}>Выберите класс</option>
                        {
                            data.map(item =>
                                <option>{item}</option>)
                        }
                    </select>
                </div>

            </div>
        </div>
    );
};

export default QuerySelect;