"use client"

import { loginAction, logoutAction } from "@/lib/userSlice"
import axios from "axios"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Navbar() {

    const dispatch = useDispatch()

    const isConnected = useSelector(state => state.user.isConnected)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            axios.get('http://localhost:3000/account', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                dispatch(loginAction(response.data))
            })
        }
    }, [])


    const logout = () => {
        localStorage.removeItem('token')
        dispatch(logoutAction())
    }

    return (
        <header className="p-5 border-b border-b-black mb-10 flex justify-between">
            <h1 className="text-center">Header</h1>
            <div>
                {
                    isConnected ? 
                    <button className="bg-black text-white px-5 py-1"  onClick={logout}>Logout</button> :
                    <Link className="bg-black text-white px-5 py-1" href="/login">Login</Link>
                }
            </div>
        </header>
    )
}