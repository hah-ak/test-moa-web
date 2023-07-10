import React, {forwardRef, useEffect, useRef, useState} from 'react';

export const useRoomWebSocket = ():[SocketReturn,(data:SocketReturn)=>void] => {
    const webSocket = useRef(new WebSocket("ws://localhost:9103/room"))
    const [newSocketData, setNewSocketData] = useState<SocketReturn>("")

    useEffect(()=>{
        return ()=>{webSocket.current.close()}
    },[])

    webSocket.current.addEventListener('message',(e)=>{
        if (typeof e.data === 'string') {
            setNewSocketData(e.data)
        }
    })

    const sendData = (data:SocketReturn) => {
        webSocket.current?.send(data)
    }
    return [newSocketData, sendData]
};
export type SocketReturn = string | ArrayBufferLike | Blob | ArrayBufferView