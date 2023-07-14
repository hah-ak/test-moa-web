import React from 'react';
import Link from "next/link";

const RoomListComponent = ({roomNumber}:{roomNumber:string}) => {
    return (
        <>
            <Link href={`/chat/${roomNumber}`}>room enter</Link>
        </>
    );
};

export default RoomListComponent;