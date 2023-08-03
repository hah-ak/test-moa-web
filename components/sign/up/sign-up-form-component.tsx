import React from 'react';
import {signUp} from "@/lib/member/member-queries";
import {SignUp} from "@/lib/member/sing-up";

const SignUpFormComponent = ({onClose}: { onClose: () => void }) => {
    const isString = (obj:any): obj is string | object => typeof obj === 'string' || typeof obj === 'object'
    const fetchData = async (data:FormData) => {
        const name = data.get('name')
        const password = data.get('password')
        const id = data.get('id')
        if (isString(name) && isString(password) && isString(id)) {
            const sendData:SignUp = {
                name : name,
                id : id,
                password : password
            }
            const result = await signUp(sendData).then(value => value.json())
            console.log(result)
        }
        console.log(typeof id, typeof name)
    }
    return (
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                    onClick={onClose}
            >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign Up</h3>
                <form className="mt-4" action={(formData) => fetchData(formData)}>
                    <label className="block mt-3" htmlFor="email">
                        email
                    </label>
                    <input type="email" name="email" id="email" placeholder="user@email.xyz" defaultValue="devdhaif@gmail.com"
                           className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"/>

                    <label className="block mt-3" htmlFor="password">
                        password
                    </label>
                    <input type="password" name="password" id="password" placeholder="abcd1234!" defaultValue={""}
                           className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"/>

                    <label className="block mt-3" htmlFor="name">
                        name
                    </label>
                    <input type="text" name="name" id="name" placeholder="abcd" defaultValue={""}
                           className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"/>

                    {/*<button type="button"*/}
                    {/*        className="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24"*/}
                    {/*         stroke="currentColor" strokeWidth="2">*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>*/}
                    {/*    </svg>*/}

                    {/*    <span className="mx-2">Add another</span>*/}
                    {/*</button>*/}


                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                        <button type="button"
                                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                            Cancel
                        </button>

                        <button type="submit"
                                className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpFormComponent;