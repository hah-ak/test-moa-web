import React, {createContext, ReactElement, useContext, useEffect, useRef, useState} from 'react';
import {Client} from "@stomp/stompjs";
import {subscribe} from "diagnostics_channel";

const RoomMessageBrokerContext = createContext<{client:Client}>({client:new Client()})

export const RoomMessageBrokerProvider = (props:{children : ReactElement}) => {
    const {current:brokerClient} = useRef(new Client({
        brokerURL : 'ws://localhost:9103/hello',
        // connectHeaders: {myApplication: 'true'},
        onConnect : (frame) => {
            brokerClient.subscribe('/topic/greetings',(message) => {console.log(message.body)})
        },
        onWebSocketError : (evt) => console.log(evt),
        onStompError : frame => console.log(frame),
    }))

    useEffect(() => {
        brokerClient.activate()
        return () => {console.log('finish');brokerClient.deactivate().catch()}
    },[])

    return(
        <RoomMessageBrokerContext.Provider value={{client:brokerClient}}>
            {props.children}
        </RoomMessageBrokerContext.Provider>
    )

}
export const useRoomMessageBrokerContext = () => {
    return useContext(RoomMessageBrokerContext)
}