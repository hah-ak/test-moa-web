import React, {useEffect, useState} from 'react';
import {useRoomMessageBrokerContext} from "@/contexts/socket/room/useRoomBrokerContext";
import {Client, IMessage} from "@stomp/stompjs";

const useTopicHelloBroker = ():[IMessage|undefined,()=>void] => {
    const {client} = useRoomMessageBrokerContext();
    const [brokerNewData, setBrokerNewData] = useState<IMessage>()

    useEffect(()=>{
        client.onConnect = () => client.subscribe('/topic/greetings',(message) => {setBrokerNewData(message)})
        return ()=>{}
    },[])

    const sendMessage = () => {
        client.publish({destination: '/app/hello', body : 'broad'})
    }
    return [brokerNewData, sendMessage];
};

export default useTopicHelloBroker;