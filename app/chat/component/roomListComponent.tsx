import React from 'react';
import Link from "next/link";

const RoomListComponent = ({roomNumber}:{roomNumber:string}) => {
    return (
        <>
            <Link href={`/chat/${roomNumber}`} onClick={sendData}>room enter</Link>
        </>
    );
};

export default RoomListComponent;