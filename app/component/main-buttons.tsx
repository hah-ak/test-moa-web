import React from 'react';
import {CheckIcon} from "@heroicons/react/20/solid";
import {SuccessBtn} from "@/component/button/buttonComponents";

const MainButtons = () => {
    return (
        <div className={'grid grid-cols-6 justify-items-stretch'}>
            <div className={`justify-self-start relative`}>
                <button className={`h-10 w-24 z-0 btn3d btn-success`}>
                    <span className={`text-white`}><CheckIcon className={`h-5 inline`}/>success</span>
                </button>
            </div>
            <div className={`justify-self-start relative`}>
                <button className={`h-10 w-24 btn3d btn-success`}>button</button>
            </div>
            <div className={`justify-self-start relative`}>
                <SuccessBtn />
            </div>
            <div></div>
            <div className={`justify-self-end relative`}>
                <button className={`h-10 w-24 btn3d btn-success`}>button</button>
            </div>
            <div className={`justify-self-end relative`}>
                <button className={`h-10 w-24 btn3d btn-success`}>button</button>
            </div>
        </div>
    );
};

export default MainButtons;