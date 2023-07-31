import React, {ReactNode} from 'react';
import Link from "next/link";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

type LogTimelineLayout = ({items}:{items:LogTimelineItem[]}) => ReactNode
type LogTimelineItem = {
    node:ReactNode
    key:string
}
type LogTimelineParam = {
    profileImage:string
    time:string
    name:string
    link:string
    linkTitle:string
    hashTag:string[]
}

export const LogTimelineLayoutComponent:LogTimelineLayout = ({items}) => {
    return (
        <ol className={"relative border-l border-gray-200 dark:border-gray-700"}>
            {items.map((value) => (<li className={"mb-10 ml-6"} key={value.key}>{value.node}</li>))}
        </ol>
    )
}
export const LogTimelineWithLinkComponent = ({profileImage,time, name, link, linkTitle, hashTag}:LogTimelineParam) => {
    return (
        <>
            <span className={"absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"}>
                <img className={"rounded-full shadow-lg"} src={"/docs/images/people/profile-picture-3.jpg"} alt="Bonnie image"/>
            </span>
            <div className={"items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600"}>
                <time className={"mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"}>{time}</time>
                <div className={"text-sm font-normal text-gray-500 dark:text-gray-300"}>
                    Bonnie moved
                    <Link href="#" className={"font-semibold text-blue-600 dark:text-blue-500 hover:underline"}>
                        Jese
                        Leos
                    </Link>
                    to
                    <span className={"bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300"}>Funny Group</span>
                </div>
            </div>
        </>
    );
};
export const LogTimelineWithTextComponent = () => {
    return (
        <>
            <span className={"absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"}>
                    <img className={"rounded-full shadow-lg"} src={"/docs/images/people/profile-picture-5.jpg"} alt={"Thomas Lean image"}/>
                </span>
            <div className={"p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600"}>
                <div className={"items-center justify-between mb-3 sm:flex"}>
                    <time className={"mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"}>
                        2 hours ago
                    </time>
                    <div className={"text-sm font-normal text-gray-500 lex dark:text-gray-300"}>
                        Thomas Lean commented on
                        <Link href="#" className={"font-semibold text-gray-900 dark:text-white hover:underline"}>Flowbite Pro</Link>
                    </div>
                </div>
                <div className={"p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"}>Hi
                    ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your
                    design system! This is the second session of our new webinar series on #DesignSystems
                    discussions where we'll be speaking about Measurement.
                </div>
            </div>
        </>
    )
}

type ChatTimelineLayout = ({items}:{items:ChatTimelineItem[]}) => ReactNode
type ChatTimelineItem = {
    node:ReactNode
    key:string
}
type ChatTimelineParam = {
    imageUrl:string
    name:string
    content:string
    date:string
}
export const ChatTimelineLayout:ChatTimelineLayout = ({items}) => {
    return(
        <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700 bg-white rounded-md">
            {items.map((value) => (<li key={value.key}>{value.node}</li>))}
        </ol>
    )
}

export const ChatTimelineComponent = ({imageUrl, name, content, date}:ChatTimelineParam) => {
    return (
        <div className={"items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700 relative"}>
            <div className={"text-gray-600 dark:text-gray-400"}>
                {/*<img className={"w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"} src={""} alt="Jese Leos image"/>*/}
                <div className="text-base font-normal">
                    <span className="font-medium text-gray-900 dark:text-white">{name}</span>
                </div>
            </div>
            <div className={"text-gray-600 dark:text-gray-400"}>
                {content}
            </div>
            <span className="absolute right-0 items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                <time className={"mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"}>{date}</time>
            </span>
        </div>
    )
}