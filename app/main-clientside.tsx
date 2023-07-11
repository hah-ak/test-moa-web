"use client";
import React, {useEffect, useRef, useState} from 'react';
import {RoomMessageBrokerProvider} from "@/contexts/socket/hello/usehelloContext";
import {IMessage} from "@stomp/stompjs";
import useTopicGreetingPubSub from "@/contexts/socket/hello/useTopicGreetingPubSub";
import {useRoomWebSocket} from "@/contexts/socket/room/useRoomWebSocket";
import {File} from "buffer";
import {text} from "stream/consumers";

const Children = () => {

    const [brokerNewData, sendMessage] = useTopicGreetingPubSub();
    const [newData, sendData] = useRoomWebSocket()

    const [brokerDataList, setBrokerDataList] = useState<IMessage[]>([])
    const [socketData, setSocketData] = useState<(string | React.JSX.Element)[]>([])

    const fileRef = useRef<HTMLInputElement>(null)
    const textRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (brokerNewData) setBrokerDataList([...brokerDataList, brokerNewData])
    }, [brokerNewData])

    useEffect(() => {
        if (typeof newData === 'string') {
            setSocketData([...socketData, newData])
        }
        else if (newData instanceof Blob) {
            const reader = new FileReader()
            reader.readAsDataURL(new Blob([newData]))
            reader.onloadend = (ev) => { typeof reader.result === 'string' ? setSocketData([...socketData, <img src={reader.result}/>]) : ''}
        } else  {

        }
    }, [newData])

    const sendSocketData = () => {

        if (fileRef.current?.files?.length) {
            const files = fileRef.current.files[Symbol.iterator]();
            while (true) {
                const {value, done} = files.next();
                sendData(new Blob([value]))
                if (!done) break;
            }
            fileRef.current.value = ""
        }

        if (textRef.current?.value) {
            sendData(textRef.current.value)
            textRef.current.value = ""
        }


    }

    return (

        <div>
            <div onClick={sendSocketData}>send data</div>
            <input type={"file"} multiple={true} ref={fileRef}/>
            <input type={"text"} ref={textRef}/>
            {socketData.map((value, index) => (<div key={index}>{}</div>))}
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