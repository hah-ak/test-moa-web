import React, {Fragment, useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import {randomUUID} from "crypto";
import {Dialog, Transition} from "@headlessui/react";

const usePortal = ({children, key}: { children: React.ReactNode; key?: string }) => {
    const [isMount, setIsMount] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    if (!key) {
        key = randomUUID();
    }

    useEffect(() => {
        setIsMount(true)
    }, [])

    const Portal = () => isMount && isOpen && createPortal(
            <Dialog as={"div"} className={"relative z-50"} open={isOpen} onClose={()=>setIsOpen(false)}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            {/*    <Transition.Child*/}
            {/*        as={Fragment}*/}
            {/*        enter="ease-out duration-300"*/}
            {/*        enterFrom="opacity-0"*/}
            {/*        enterTo="opacity-100"*/}
            {/*        leave="ease-in duration-200"*/}
            {/*        leaveFrom="opacity-100"*/}
            {/*        leaveTo="opacity-0"*/}
            {/*    >*/}
            {/*        <div className="fixed inset-0 bg-black bg-opacity-25" />*/}
            {/*    </Transition.Child>*/}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel>
                        {children}
                    </Dialog.Panel>
                </div>
            </Dialog>
        ,
        document.getElementById("modal-root") as Element,
        key)

    return {
        setIsOpen,
        Portal
    }
};

export default usePortal;