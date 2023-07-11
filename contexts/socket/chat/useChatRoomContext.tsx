import React, {createContext, useContext, useEffect, useRef} from 'react';
import {Client} from "@stomp/stompjs";


const ChatRoomMessageBroker = createContext<{client:Client}>({client : new Client()})
const ChatRoomMessageBrokerProvider = ({children}:{children:React.JSX.Element}) => {
    const {current:brokerClient} = useRef(new Client({
        brokerURL : 'ws://localhost:9103/chat/room',
        // connectHeaders: {myApplication: 'true'},
        onWebSocketError : (evt) => console.log(evt),
        onStompError : frame => console.log(frame),
    }))

    useEffect(() => {
        brokerClient.activate()
        return () => {brokerClient.deactivate().catch()}
    },[])
    return (
        <ChatRoomMessageBroker.Provider value={{client: brokerClient}}>
            {children}
        </ChatRoomMessageBroker.Provider>
    );
};
export const useChatRoomMessageBrokerContext = () => useContext(ChatRoomMessageBroker)
export default ChatRoomMessageBrokerProvider;