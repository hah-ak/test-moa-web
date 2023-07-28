import 'server-only'
import {cookies} from "next/headers";

export const isLogin = () => !!cookies().get("login")

export const getUserInfo = async (params:{id:string;password:string}) => await fetch("http://locahost:8083/member/login",{method:"POST",body:JSON.stringify(params)}).then(value => value.json())