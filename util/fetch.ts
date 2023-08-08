// 추후 .env로 분리
const isJson = (sendData:any) => {
    try {
        const json = JSON.parse(sendData)
        return typeof json === 'object'
    } catch (e) {
        return false
    }
}
const createServerFetch = (sendData:any, requestInit:Omit<RequestInit, 'body'>={}):RequestInit => {
    let type = ""
    if (sendData instanceof FormData) {
        type = ""
    } else if (typeof sendData === 'string'){
        type = 'text/plain'
    } else if (isJson(sendData)){
        type = 'application/json'
    } else {
        type = 'application/octet-stream'
    }

    return {
        body:sendData,
        mode:'cors',
        credentials:'include',
        headers:{
            'Content-Type':type
        },
        ...requestInit,
    }
}
export const serverApi = async (url:URL|RequestInfo,sendData:any,options?:Omit<RequestInit, 'body'>):Promise<Response> => await fetch(`http://localhost:8083${url}`,createServerFetch(sendData, options))