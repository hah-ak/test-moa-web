'use client'
import React, {Dispatch, Fragment, useState} from 'react';
import {Dialog, Menu, Transition} from "@headlessui/react";
import {useAppDisPatch, useAppSelector} from "@/app/_globalRedux/hooks";
import usePortal from "@/app/_globalHook/client/usePortal";
import {AvatarDefault} from "@/components/avatar/avatarComponents";
import MenuItems from "@/app/_component/navbar/dropdown/menu-items";
import SignInDialogComponent from "@/components/sign/in/sign-in-component";


const memberImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

const MenuBtn = ({isLogin}: { isLogin: boolean }) => {
    return (

            <div className={`className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"`}>
                <AvatarDefault rounded={true} src={isLogin ? memberImage : ''}/>
            </div>

    )
}
const MyMenu = ({isLogin}: { isLogin: boolean }) => {
    const dispatch = useAppDisPatch();
    const session = useAppSelector(state => state.session);
    const [open, setOpen] = useState(false)
    if (isLogin) {
        return (
            <Menu as="div" className="relative ml-3">
                <Menu.Button id={'profile'}>
                    <MenuBtn isLogin={isLogin}/>
                </Menu.Button>
                <MenuItems/>
            </Menu>
        )
    }

    return (
        <div className={'relative ml-3'} onClick={()=>setOpen(!open)}>
            <MenuBtn isLogin={isLogin}/>
            <SignInDialogComponent open={open} onClose={()=>setOpen(false)}/>
        </div>
    );
};

export default MyMenu;