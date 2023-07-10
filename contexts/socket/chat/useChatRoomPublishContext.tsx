import React, {createContext, ReactNode, useEffect, useRef} from 'react';
import {Client} from "@stomp/stompjs";


export const ChatRoomMessageBroker = createContext<{client:Client}>({client : new Client()})
const ChatRoomMessageBrokerProvider = ({children}:{children:React.JSX.Element}) => {
    const {current:brokerClient} = useRef(new Client({
        brokerURL : 'ws://localhost:9103/hello',
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

export default ChatRoomMessageBrokerProvider;