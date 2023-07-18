import React, {Fragment, useState} from 'react';
import {Transition} from "@headlessui/react";


const Members = ({members}:{members:any[]}) => {
    const [isOpen, setIsOpen] = useState(true)
    console.error(members)
    return (
        <div className={`bg-white rounded-lg shadow-md shadow-gray-200 flex md:h-full md:flex-col flex-row`}>
            <div
                className={`px-6 py-5 border-b border-gray-100 sm:flex sm:items-center sm:justify-between col-span-1 row-span-1`}>
                <h2 className={`font-medium text-gray-700`}> member </h2>

                <button type="button"
                        className="inline-flex focus:outline-none justify-center mt-2 text-sm font-medium leading-5 text-gray-500 bg-white rounded-lg sm:mt-0 hover:text-gray-600">
                    {/*<span>Descending</span>*/}

                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path fillRule={`evenodd`}
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule={`evenodd`}/>
                    </svg>
                </button>
            </div>

            <div
                className={`p-4 overflow-hidden flex md:h-full flex-row md:flex-col`}>
                {members.map((value, index) => (
                        <div className={`flex items-center bg-gray-100 overflow-hidden h-14 mb-2 rounded-lg`} key={index}>
                            <div className={`flex items-center`}>
                                <img className={`w-10 h-10 bg-gray-100 rounded-full object-cover hidden md:flex`}
                                     src={'https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'}/>
                                <span
                                    className={`mx-3 text-gray-600 whitespace-nowrap`}>{value.name}</span>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );

};

export default Members;