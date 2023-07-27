import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import {randomUUID} from "crypto";

const usePortal = ({children, key}: { children: React.ReactNode; key?: string }) => {
    const [isMount, setIsMount] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    if (!key) {
        key = randomUUID();
    }

    useEffect(() => {
        setIsMount(true)
    }, [])

    const Portal = () =>
        isMount && isOpen && createPortal(children, document.querySelector("#modal"), key)


    return {
        Portal
    }
};

export default usePortal;