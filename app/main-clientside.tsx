"use client";
import React, {useEffect, useState} from 'react';

const MainClientside = () => {
    const [webSocket, setWebSocket] = useState(()=>new WebSocket("ws://localhost:9103/room"))
    const [socketData, setSocketData] = useState<string[]>([])
    webSocket.addEventListener('message',(e)=>{
        setSocketData([...socketData,e.data])
    })

    useEffect(()=>{
        return ()=>webSocket.close()
    },[])

    const sendData = () => {
        webSocket.send("evachachi")
    }
    return (
        <div>
            <div onClick={sendData}>send data</div>
            {socketData.map(value => (<div>{value}</div>))}
        </div>
    );
};

export default MainClientside;