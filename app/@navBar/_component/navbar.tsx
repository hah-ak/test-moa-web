import React from 'react';
import {Navigations} from "@/app/@navBar/page";
import MyMenu from "@/app/@navBar/_component/dropdown/my-menu";
import Link from "next/link";


const Navbar = ({navigation,children}:{navigation:Navigations;children?:React.ReactNode}) => {
    return (
        <nav className="border-gray-200 bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
                </a>
                <div className="flex items-center md:order-2">
                    <MyMenu/>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 mt-4 border rounded-lg bg-gray-900 border-gray-700 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <Link href="/"
                               className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0"
                               aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/chat"}
                               className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white border-gray-700">
                                Chat
                            </Link>
                        </li>
                        <li>
                            <Link href={"/room"}
                               className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white border-gray-700">
                                Room
                            </Link>
                        </li>
                        <li>
                            <Link href={"/team"}
                               className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-whiteborder-gray-700">
                                Team
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
);
};

export default Navbar;