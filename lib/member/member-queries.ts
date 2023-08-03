import {serverApi} from "@/util/fetch";
import {SignUp} from "@/lib/member/sing-up"
import * as querystring from "querystring";

export const signUp = async (params:SignUp) => await serverApi("/member/create",{body:querystring.stringify(params),method: 'POST'})
