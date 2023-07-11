import React, {useEffect, useState} from 'react';
import useChatRoomPublishContext, {
    useChatRoomMessageBrokerContext
} from "@/contexts/socket/chat/useChatRoomContext";

const useChatRoomPubSub = ():[sendDta:()=>void, newData:string|null] => {
    const {client} = useChatRoomMessageBrokerContext();
    const [newData, setNewData] = useState<string>(null)

    useEffect(() => {
        client.onConnect = ()=>client.subscribe("/chat/room/9",(message) => {
            setNewData(message.body)
        })

        return () => {}
    },[])

    const sendData = () => {
        client.publish({destination:"/app/chat/room/9", body:"myId"})
    }

    return [sendData, newData]
};

export default useChatRoomPubSub;