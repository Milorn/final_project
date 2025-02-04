"use client"

import api from "@/lib/api"
import { loginAction } from "@/lib/userSlice"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('password')

    const dispatch = useDispatch()
    const router = useRouter()

    const login = async (e) => {
        try  {
            e.preventDefault()
            const response = await api.post('/login', {email, password})
            localStorage.setItem('token', response.data.token)
            dispatch(loginAction(response.data.user))
            router.push('/')
        } catch(e) {
            alert('Error happened')
        }
    }

    return (
        <div className="flex justify-center items-center">
            <form className="my-20 max-w-2xl flex flex-col gap-4 shadow-xl w-full p-5" onSubmit={login}>
                <input className="border p-2" type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input className="border p-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button className="bg-orange-500 text-white px-5 py-1 font-semibold">Login</button>
            </form>
        </div>
    )
}