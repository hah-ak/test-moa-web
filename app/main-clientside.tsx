"use client";
import React, {useEffect, useState} from 'react';
import {
    RoomMessageBrokerProvider,
    useRoomMessageBrokerContext
} from "@/contexts/socket/room/useRoomBrokerContext";
import {IMessage} from "@stomp/stompjs";
import useTopicHelloBroker from "@/contexts/socket/room/useTopicHelloBroker";

const Children = () => {

    const [brokerNewData, sendMessage] = useTopicHelloBroker();
    const [brokerDataList, setBrokerDataList] = useState<IMessage[]>([])
    const [webSocket, setWebSocket] = useState(()=>new WebSocket("ws://localhost:9103/room"))
    const [socketData, setSocketData] = useState<string[]>([])
    webSocket.addEventListener('message',(e)=>{
        setSocketData([...socketData,e.data])
    })

    useEffect(()=>{
        return ()=>{webSocket.close()}
    },[])

    useEffect(()=>{
        if (brokerNewData) setBrokerDataList([...brokerDataList, brokerNewData])
    },[brokerNewData])


    const sendData = () => {
        webSocket.send("evachachi")
    }
    return (
        <div>
            <div onClick={sendData}>send data</div>
            {socketData.map(value => (<div>{value}</div>))}
            <br/>
            <div onClick={sendMessage}>send broker message</div>
            {brokerDataList.map((value, index) => (<div key={value.body + index}>{value.body}</div>))}
        </div>
    )
}
const MainClientside = () => {
    return (
        <RoomMessageBrokerProvider>
            <Children/>
        </RoomMessageBrokerProvider>

    );
};

export default MainClientside;