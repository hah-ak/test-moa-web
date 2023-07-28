'use client'
import React, {Fragment} from 'react';
import {Menu, Transition} from "@headlessui/react";
import {useAppDisPatch, useAppSelector} from "@/app/_globalRedux/hooks";
import usePortal from "@/app/_globalHook/client/usePortal";
import SignInComponent from "@/component/sign/in/sign-in-component";
import {AvatarDefault} from "@/component/avatar/avatarComponents";
import MenuItems from "@/app/_component/navbar/dropdown/menu-items";


const memberImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

const MenuBtn = ({isLogin}: { isLogin: boolean }) => (
    <div>
        <Menu.Button
            id={"profile"}
            className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
            <AvatarDefault rounded={true} src={isLogin ? memberImage : ''}/>
        </Menu.Button>
    </div>
)
const MyMenu = ({isLogin}: { isLogin: boolean }) => {
    const dispatch = useAppDisPatch();
    const session = useAppSelector(state => state.session);
    const {Portal, setIsOpen} = usePortal({children: <SignInComponent/>, key: "signIn"});
    return (
        <Menu as="div" className="relative ml-3">
            {({open}) => {
                if (isLogin) {
                    return (
                        <>
                            <MenuBtn isLogin={isLogin}/>
                            <MenuItems/>
                        </>
                    )
                }
                setIsOpen(open)
                return (
                    <>
                        <MenuBtn isLogin={isLogin}/>
                        <Portal/>
                    </>
                )
            }}
        </Menu>
    );
};

export default MyMenu;