'use client'
import React from 'react';
import useChatRoomPubSub from "@/contexts/socket/chat/useChatRoomPubSub";
import ChatRoomMessageBrokerProvider from "@/contexts/socket/chat/useChatRoomContext";

const RoomEnterClientside = () => {

    const [sendData, newDta] = useChatRoomPubSub();

    return (
        <ChatRoomMessageBrokerProvider>
            <div onClick={sendData}>room enter</div>
            <div>{newDta}</div>
        </ChatRoomMessageBrokerProvider>
    );
};

export default RoomEnterClientside;