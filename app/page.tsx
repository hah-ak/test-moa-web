import MainClientside from "@/app/component/main-clientside";
export default async function Home() {

    const getData = async ():Promise<string[]> => {
        "use server"
        return new Promise((resolve, reject) => setTimeout(()=>resolve(['a','b','c']),1000));
    }
    const listData = await getData()

    return (
        <>
            <MainClientside curRooms={listData}/>
        </>
    )
}
