"use client"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function ButtonLogOut(){

    const route = useRouter()

    async function signout() {
        await signOut({
            redirect: false
        })

        route.replace("/")
    }    


    return (
        <button className="p-2 w-40 border border-gray-300 rounded-md" onClick={signout}>
            sair
        </button>

    )
}