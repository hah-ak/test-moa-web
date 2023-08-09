import {api} from "@/util/fetch";

export const signUp = async (params:FormData) => await api("/sign-in/sign-up-process",params,{method: 'POST'})
export const signIn = async (params:FormData)=> await api("/sign-in/sign-in-process",params,{method:'POST'})
