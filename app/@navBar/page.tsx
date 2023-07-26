import React from 'react';
import Navbar from "@/app/@navBar/_component/navbar";

export type Navigations = {name:string,href:string}[]
const Page = ({params,searchParams}) => {
    const navigation:Navigations = [
        { name: 'Home', href: '/' },
        { name: 'Chat', href: '/chat' },
        { name: 'Room', href: '/room' },
        { name: 'Team', href: '/team' },
    ]
    console.log(params)
    return (
        <Navbar navigation={navigation}/>
    );
};

export default Page;