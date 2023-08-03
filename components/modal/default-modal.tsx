import React from 'react';
import {Dialog} from "@headlessui/react";

const DefaultModal = ({children, open, onClose = () => {}}: { children:React.ReactNode;open: boolean; onClose: () => void }) => {
    return (
        <Dialog open={open} onClose={() => onClose()} className={"relative z-50"}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel>
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default DefaultModal;