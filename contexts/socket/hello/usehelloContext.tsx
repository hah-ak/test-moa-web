import React, {createContext, ReactElement, useContext, useEffect, useRef, useState} from 'react';
import {Client} from "@stomp/stompjs";
import {IMessage} from "@stomp/stompjs/esm6";

type HelloSocketContext = {client:Client,newData:IMessage|null,sendData:()=>void}
const initContext:HelloSocketContext = {client : new Client(),newData:null,sendData:()=>{}}
const RoomMessageBrokerContext = createContext(initContext)

export const RoomMessageBrokerProvider = (props:{children : ReactElement}) => {
    const [brokerNewData, setBrokerNewData] = useState<IMessage|null>(null)
    const {current:brokerClient} = useRef(new Client({
        brokerURL : 'ws://localhost:9103/hello',
        // connectHeaders: {myApplication: 'true'},
        onWebSocketError : (evt) => console.log(evt),
        onStompError : frame => console.log(frame),
    }))

    useEffect(() => {
        brokerClient.onConnect = () => brokerClient.subscribe('/topic/greetings',(message) => {setBrokerNewData(message)})
        brokerClient.activate()
        return () => {brokerClient.deactivate().catch()}
    },[])

    const sendMessage = () => {
        brokerClient.publish({destination: '/app/hello', body : 'broad'})
    }

    return(
        <RoomMessageBrokerContext.Provider value={{client:brokerClient, newData:brokerNewData, sendData:sendMessage}}>
            {props.children}
        </RoomMessageBrokerContext.Provider>
    )

}
export const useRoomMessageBrokerContext = () => {
    return useContext(RoomMessageBrokerContext)
}