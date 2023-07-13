import MainClientside from "@/app/main-clientside";
export default async function Home() {

    const getData = async ():Promise => {
        "use server"
        return new Promise((resolve, reject) => setTimeout(resolve(['a','b','c']),1000));
    }
    const listData = await getData()

    return (
        <>
            <MainClientside curRooms={listData}/>
        </>
    )
}
