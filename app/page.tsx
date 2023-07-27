import MainClientside from "@/app/_component/main-clientside";
import {getUserInfo, isLogin} from "@/lib/server-data";

export default async function Home() {
    const getData = async ():Promise<{curRooms:string[];members:any[]}> => {
        "use server"
        const fetchData = await fetch("http://localhost:8083/member/members",{method:'GET', cache: 'no-store'})
        const members = await fetchData.json()
        const curRooms:string[] = await new Promise<string[]>((resolve, reject) => setTimeout(()=>resolve(['a','b','c']),1000))
        return {members,curRooms}
    }

    const {curRooms,members} = await getData()

    return (
        <MainClientside curRooms={curRooms} members={members}/>
    )
}
