import MainClientside from "@/app/component/main-clientside";
import NavBar from "@/app/component/nav-bar/nav-bar";
export default async function Home() {

    const getData = async ():Promise<{curRooms:string[];members:any[]}> => {
        "use server"
        const fetchData = await fetch("http://localhost:8083/member/members",{method:'GET'})
        const memberString = await fetchData.json()
        const members = ['a']
        const curRooms:string[] = await new Promise<string[]>((resolve, reject) => setTimeout(()=>resolve(['a','b','c']),1000))
        return {members,curRooms}
    }
    const {curRooms,members} = await getData()

    return (
        <>
            <NavBar/>
            <MainClientside curRooms={curRooms} members={members}/>
        </>
    )
}
