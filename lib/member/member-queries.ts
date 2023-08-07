import {securityApi, serverApi} from "@/util/fetch";

export const signUp = async (params:FormData) => await securityApi("/sign-up-process",params,{method: 'POST'})
export const signIn = async (params:FormData)=> await securityApi("/sign-in-process",params,{method:'POST'})
