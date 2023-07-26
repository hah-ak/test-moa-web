import React, {useEffect, useState,use} from 'react';
import {useChatRoomMessageBrokerContext} from "@/contexts/socket/chat/useChatRoomContext";
import Link from "next/link";

const RoomLiClientside = () => {

    const {client, newData, sendData} = useChatRoomMessageBrokerContext();
    const [data, setData] = useState(newData)
    const [test, setTest] = useState<string[]>(['9','10','11'])
    useEffect(() => {
        if (data instanceof Uint8Array) {
            const objectURL = URL.createObjectURL(new Blob([data], {type: 'image/png'}));
            setData(objectURL)
            URL.revokeObjectURL(objectURL)
        } else {
            setData(newData)
        }
    }, [newData])
    return (
        <>
            {test.map(value => <Link href={`/${value}`} key={value}>{value}</Link>)}
        </>
    )
};

export default RoomLiClientside;