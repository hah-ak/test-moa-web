import React from 'react';
import Link from "next/link";
import {ChatTimelineComponent, ChatTimelineLayout} from "@/component/timeline/timeline-components";

const ServerChat = () => {
    const chatList = [
        {node : <ChatTimelineComponent imageUrl={''} name={'abc'} content={'lllorem'} date={'2023-08-01'}/>, key:'1'},
        {node : <ChatTimelineComponent imageUrl={''} name={'abc'} content={'lllorem'} date={'2023-08-01'}/>, key:'2'},
        {node : <ChatTimelineComponent imageUrl={''} name={'abc'} content={'lllorem'} date={'2023-08-01'}/>, key:'3'},
        {node : <ChatTimelineComponent imageUrl={''} name={'abc'} content={'lllorem'} date={'2023-08-01'}/>, key:'4'},
    ]
    return (
        <ChatTimelineLayout items={chatList}/>
    );
};

export default ServerChat;