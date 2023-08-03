// 추후 .env로 분리
export const serverApi = async (url:URL|RequestInfo,options?:RequestInit):Promise<Response> => await fetch(`http://localhost:8083${url}`,options)