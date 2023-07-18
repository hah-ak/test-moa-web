import React from 'react';
import Link from "next/link";
import {PaginationBtn} from "@/component/button/buttonComponents";
import {ArrowPagination} from "@/component/button/paginationComponents";

const ChatRooms = ({data}: { data: any[] }) => {
    return (
        <>
            <div className={`grid grid-cols-2 grid-rows-3 gap-4 col-span-5 row-span-3`}>
                {data.map((value, index) => (
                    <Link href="#" key={index}
                          className="block bg-white text-gray-700 rounded transition-colors duration-300 hover:bg-gray-300 p-4 shadow-md"
                    >
                        <h2 className="text-lg font-bold mb-2">Chat Room 1</h2>
                        <p className="text-sm">Hosts: 3</p>
                    </Link>
                ))}
                {new Array(6-data.length ).fill(0).map((value, index) => (
                    <div key={value+index}
                          className="block bg-white rounded transition-colors duration-300 p-4 shadow-md"
                    >
                        <h2 className="text-lg font-bold mb-2"></h2>
                        <p className="text-sm"></p>
                    </div>
                ))}
            </div>
            <div className={`col-span-5 row-span-1 m-1`}>
                <ArrowPagination classes={`items-center justify-center`}>
                    {[1, 2].map((value, index) => (<PaginationBtn key={value}>{value}</PaginationBtn>))}
                </ArrowPagination>
            </div>
        </>
    );
};

export default ChatRooms;