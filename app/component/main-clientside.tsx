"use client";
import React from 'react';
import {CheckIcon} from "@heroicons/react/20/solid";
import MainButtons from "@/app/component/main-buttons";
const MainClientside = ({curRooms}:{curRooms:string[]}) => {



    return (
        <div className={`md:container p-2`}>
            <div className={`h-5 m-1`}></div>
            <div className={`h-72 m-1`}>
                <div className={`grid grid-cols-6 grid-rows-7`}>
                    <div className={`col-span-6 row-span-1 border-2 border-s-blue-500`}>
                        a
                    </div>
                    <div className={`col-span-5 row-span-3 border-2 border-s-blue-500`}>
                        <div className={`grid grid-cols-2 grid-rows-3`}>
                            {curRooms.map((value, index) => (<div key={index}>{value}</div>))}
                        </div>
                    </div>
                    <div className={`col-span-1 row-span-6 border-2 border-s-blue-500`}>
                        members
                    </div>
                    <div className={`col-span-5 row-span-3 border-2 border-s-blue-500`}>
                        c
                    </div>
                </div>
            </div>
            <div className={`h-28 m-1`}>
                <MainButtons/>
            </div>
        </div>
    );
};

export default MainClientside;