"use client";
import React from 'react';
import {RoomMessageBrokerProvider} from "@/contexts/socket/hello/usehelloContext";
const Children = () => {


    return (

        <div>
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