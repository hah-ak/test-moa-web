import {serverApi} from "@/util/fetch";

export const signUp = async (params:FormData) => await serverApi("/sign-up-process",params,{method: 'POST'})
export const signIn = async (params:FormData)=> await serverApi("/sign-in-process",params,{method:'POST'})
