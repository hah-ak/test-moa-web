import React from 'react';

const members: { name: string }[] = [
    {name: "eva"},
    {name: "cham chi"},
    {name: "kkong chi"},
    {name: "kkong chi"},
    {name: "kkong chi"},
    {name: "kkong chi"},
    {name: "kkong chi"}
]
const Members = () => {
    return (
        <div className={`grid grid-rows-6 bg-white rounded-lg shadow-md shadow-gray-200`}>

            <div className={`px-6 py-5 border-b border-gray-100 sm:flex sm:items-center sm:justify-between row-span-1`}>
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

            <div className={`p-6 space-y-6 row-span-6`}>
                {members.map((value, index) => (
                    <div className={`flex items-center justify-between`} key={index}>
                        <div className={`flex items-center`}>
                            <img className={`w-10 h-10 overflow-hidden bg-gray-100 rounded-full object-cover`}/>
                            <span className={`mx-3 text-gray-600`}>{value.name}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Members;