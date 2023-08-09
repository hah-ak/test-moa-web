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
    const options:RequestInit = {
        body:sendData,
        mode:'cors',
        credentials:'include',
        ...requestInit,
    }
    if (requestInit.method=== "GET") {
        options.body = null
    }
    if (sendData instanceof FormData) {
        return options;
    } else if (typeof sendData === 'string'){
        return {...options, headers:{'Content-Type': 'text/plain'}}
    } else if (isJson(sendData)){
        return {...options, headers:{'Content-Type': 'application/json'}}
    } else {
        return {...options, headers:{'Content-Type': 'application/octet-stream'}}
    }
}
export const api = async (url:URL|RequestInfo,sendData:any,options:Omit<RequestInit, 'body'>={method:"GET"}):Promise<Response> => await fetch(`${url}`,createServerFetch(sendData, options))
export const serverApi = async (url:URL|RequestInfo,sendData?:any,options:Omit<RequestInit, 'body'>={method:"GET"}):Promise<Response> => await fetch(`http://localhost:8083${url}`,createServerFetch(sendData, options))