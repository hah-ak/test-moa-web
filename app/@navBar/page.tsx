import React from 'react';
import Navbar from "@/app/@navBar/_component/navbar";

export type Navigations = {name:string,href:string}[]
const Page = ({params,searchParams}:{params:any;searchParams:any}) => {
    const navigation:Navigations = [
        { name: 'Home', href: '/' },
        { name: 'Chat', href: '/chat' },
        { name: 'Room', href: '/room' },
        { name: 'Team', href: '/team' },
    ]
    return (
        <Navbar navigation={navigation}></Navbar>
    );
};

export default Page;