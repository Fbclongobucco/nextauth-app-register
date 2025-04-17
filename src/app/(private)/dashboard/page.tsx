import { nextAuthoptions } from "@/app/api/auth/[...nextauth]/route"
import ButtonLogOut from "@/components/logout"
import { getServerSession } from "next-auth"

export default async function Dashboard(){

    const session = await getServerSession(nextAuthoptions)
    

    
    return(
        <main>
            <h2>ola {session?.user.name}, bem vindo!</h2>
            <ButtonLogOut/>
        </main>
    )
}