import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import {Client} from "@stomp/stompjs";

type ChatSocketContext = {client:Client,newData:string|Uint8Array|null,sendData:()=>void}
const initContext:ChatSocketContext = {client : new Client(),newData:null,sendData:()=>{}}
const ChatRoomMessageBroker = createContext(initContext)
const ChatRoomMessageBrokerProvider = ({children}:{children:React.JSX.Element}) => {

    const [newData, setNewData] = useState<string|Uint8Array|null>(null)
    const {current:brokerClient} = useRef(new Client({
        brokerURL : 'ws://localhost:9103/chat/room',
        // connectHeaders: {myApplication: 'true'},
        onWebSocketError : (evt) => console.log(evt),
        onStompError : frame => console.log(frame),
    }))

    useEffect(() => {
        brokerClient.onConnect = () => {
            brokerClient.subscribe("/chat/room/9/enter-notice",(message) => {setNewData(message.body)})
            brokerClient.subscribe("/chat/room/9/talk-message",(message) => {setNewData(message.body)})
        }
        brokerClient.activate()
        return () => {brokerClient.deactivate().catch()}
    },[])

    const sendData = () => {
        brokerClient.publish({destination:"/app/chat/room/9/enter", body:"myId"})
    }

    return (
        <ChatRoomMessageBroker.Provider value={{client: brokerClient, newData, sendData}}>
            {children}
        </ChatRoomMessageBroker.Provider>
    );
};
export const useChatRoomMessageBrokerContext = () => useContext(ChatRoomMessageBroker)
export default ChatRoomMessageBrokerProvider;