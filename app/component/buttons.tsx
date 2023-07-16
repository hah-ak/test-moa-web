import React from 'react';
import {CheckIcon} from "@heroicons/react/20/solid";
import {SuccessBtn} from "@/component/button/buttonComponents";

const Buttons = () => {
    return (
        <div className={'grid grid-cols-6 justify-items-stretch'}>
            <div className={`justify-self-start relative`}>
                <SuccessBtn classes={`h-10 w-24`}>
                    <span className={`text-white`}><CheckIcon className={`h-5 inline`}/>success</span>
                </SuccessBtn>
            </div>
            <div className={`justify-self-start relative`}>
                <SuccessBtn classes={`h-10 w-24`}/>
            </div>
            <div className={`justify-self-start relative`}>
                <SuccessBtn classes={`h-10 w-24`}/>
            </div>
            <div></div>
            <div className={`justify-self-end relative`}>
                <SuccessBtn classes={`h-10 w-24`}/>
            </div>
            <div className={`justify-self-end relative`}>
                <SuccessBtn classes={`h-10 w-24`}/>
            </div>
        </div>
    );
};

export default Buttons;