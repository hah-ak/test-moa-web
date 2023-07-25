import React from 'react';
import {createPortal} from "react-dom";
import {randomUUID} from "crypto";

const usePortal = ({children,key}:{children:React.ReactNode;key?:string}) => {
    if(!key) {
        key = randomUUID();
    }
    const Portal = () => <div>{createPortal(children,document.body,key)}</div>

    return {
        Portal
    }
};

export default usePortal;