'use client'
import React, {useEffect, useState} from 'react';
import {useChatRoomMessageBrokerContext} from "@/contexts/socket/chat/useChatRoomContext";
import Link from "next/link";

const RoomLiClientside = () => {
    const {client, newData, sendData} = useChatRoomMessageBrokerContext();
    const [data, setData] = useState(newData)
    const [test, setTest] = useState<string[]>(async () => await new Promise((resolve, reject) => {
            setTimeout(()=>resolve(['9','10','11']),3000)
        }))
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
            {test.map(value => <RoomLiClientside/>)}
        </>
    )
};

export default RoomLiClientside;