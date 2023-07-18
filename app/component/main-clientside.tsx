"use client";
import React from 'react';
import {CheckIcon} from "@heroicons/react/20/solid";
import Buttons from "@/app/component/buttons";
import Link from "next/link";
import ChatRooms from "@/app/component/contents/chat-rooms";
import Members from "@/app/component/contents/members";
import {ArrowPagination} from "@/component/button/paginationComponents";
import {PaginationBtn} from "@/component/button/buttonComponents";
import RowNotice from "@/app/component/contents/row-notice";
const MainClientside = ({curRooms}:{curRooms:string[]}) => {

    return (
        <div className={`md:container p-2`}>
            <div className={`h-5 m-1`}></div>
            <div className={`h-72 m-1`}>
                <div className={`grid grid-cols-6 grid-rows-8`}>
                    <div className={`col-span-6 row-span-1 border-2`}>
                        <RowNotice/>
                    </div>
                    <div className={`col-span-5 row-span-4 border-2`}>
                        <ChatRooms data={curRooms}/>
                    </div>
                    <div className={`col-span-1 row-span-7 border-2`}>
                        <Members />
                    </div>
                    <div className={`col-span-5 row-span-3 border-2`}>
                        c
                    </div>
                </div>
            </div>
            <div className={`h-28 m-1`}>
                {/*<Buttons/>*/}
            </div>
        </div>
    );
};

export default MainClientside;