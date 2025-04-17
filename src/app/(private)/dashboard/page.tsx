import { nextAuthoptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function Dashboard(){

    const session = await getServerSession(nextAuthoptions)


    
    return(
        <main>
            <h2>ola {session?.user.id}, bem vindo!</h2>
        </main>
    )
}