import MainClientside from "@/app/component/main-clientside";
import NavBar from "@/app/component/nav-bar/nav-bar";
export default async function Home() {

    const getData = async ():Promise<string[]> => {
        "use server"
        return new Promise((resolve, reject) => setTimeout(()=>resolve(['a','b','c']),1000));
    }
    const listData = await getData()

    return (
        <>
            <NavBar/>
            <MainClientside curRooms={listData}/>
        </>
    )
}
