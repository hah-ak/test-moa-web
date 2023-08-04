import {securityApi, serverApi} from "@/util/fetch";

export const signUp = async (params:FormData) => await serverApi("/member/create",params,{method: 'POST'})
export const signIn = async (params:FormData)=> await securityApi("/login",params,{method:'POST'})
