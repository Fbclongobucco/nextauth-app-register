import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthoptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function PrivateLayout({children}: {children: ReactNode}){

    const session = await getServerSession(nextAuthoptions)

    if(session){
        redirect("/dashboard")
    }
    return <>{children}</>

}