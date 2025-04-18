"use client"

import React, { SyntheticEvent, useState } from "react"

import { Roboto } from 'next/font/google'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const router = useRouter()

  async function handleLogin(e: SyntheticEvent) {
    e.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      console.log(result)
      return
    }

    router.replace("/dashboard")

  }



  return (
    <form onSubmit={handleLogin} className="w-96 h-96 bg-zinc-400 rounded-lg flax flex-col justify-center ">
      <div className="flex flex-col items-center mt-7 gap-8">
        <h2 className={`text-4xl ${roboto.className} text-blue-950`}>Login</h2>
        <div className="w-full flex justify-center">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="email" className="bg-zinc-200 outline-none rounded-lg p-1 w-[80%]" />
        </div>
        <div className="w-full flex justify-center">
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="senha" className="bg-zinc-200 outline-none rounded-lg p-1 w-[80%]" />
        </div>
        <button type="submit" className="w-[60%] bg-blue-500 rounded-xl p-2 cursor-pointer">entrar</button>
      </div>
      <div className="flex justify-center items-center flex-col mt-2 gap-3">
        <Link href="/recovery" className="text-amber-900">esqueci a senha</Link>
        <Link href="/register"className="text-xl text-blue-950"> cadastrar</Link>
      </div>
    </form>
  )
}


