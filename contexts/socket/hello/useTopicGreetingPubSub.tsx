import React, {useEffect, useState} from 'react';
import {useRoomMessageBrokerContext} from "@/contexts/socket/hello/usehelloContext";
import {Client, IMessage} from "@stomp/stompjs";

const useTopicGreetingPubSub = ():[IMessage|undefined,()=>void] => {
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
export default useTopicGreetingPubSub;