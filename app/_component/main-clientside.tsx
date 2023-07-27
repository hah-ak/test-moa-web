"use client";
import React from 'react';
import ChatRooms from "@/app/_component/contents/chat-rooms";
import Members from "@/app/_component/contents/members";
import RowNotice from "@/app/_component/contents/row-notice";
import ServerChat from "@/app/_component/contents/server-chat";


const MainClientside = ({curRooms, members}: { curRooms: string[]; members:any[]}) => {
    return (
        <div className={`p-2`}>
            <div className={`h-5 m-1`}></div>
            <div className={`h-auto m-1`}>
                <div className={`grid grid-cols-5 grid-rows-9 md:grid-cols-6 md:grid-rows-8`}>
                    <div className={`col-span-5 row-span-1 border-2 md:col-span-6`}>
                        <RowNotice/>
                    </div>
                    <div className={`col-span-5 row-span-4 border-2`}>
                        <ChatRooms data={curRooms}/>
                    </div>
                    <div className={`border-2 row-span-1 col-span-5 md:col-span-1 md:row-span-7`}>
                        <Members members={members}/>
                    </div>
                    <div className={`col-span-5 row-span-3 border-2`}>
                        <ServerChat />
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