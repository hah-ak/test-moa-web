import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import {randomUUID} from "crypto";

const usePortal = ({children,key}:{children:React.ReactNode;key?:string}) => {
    const [isMount , setIsMount] = useState(false)
    if(!key) {
        key = randomUUID();
    }

    useEffect(()=>{
        setIsMount(true)
    },[])

    const Portal = () => <div>{isMount ? createPortal(children,document.body,key) : null}</div>

    return {
        Portal
    }
};

export default usePortal;