"use client"

import api from "@/lib/api"
import { setItems } from "@/lib/cartSlice"
import { loginAction, logoutAction } from "@/lib/userSlice"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Navbar() {

    const dispatch = useDispatch()

    const isConnected = useSelector(state => state.user.isConnected)
    const cartLength = useSelector(state => state.cart.products).length

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            api.get('/account')
                .then(response => {
                    dispatch(loginAction(response.data))
                })
        }
        const items = localStorage.getItem('items')
        if(items) {
            dispatch(setItems(JSON.parse(items)))
        }
    }, [])


    const logout = () => {
        localStorage.removeItem('token')
        dispatch(logoutAction())
    }

    return (
        <header className="p-5 border-b border-b-black mb-10 flex justify-between">
            <Link href="/" className="text-center">Header</Link>
            <div className="flex items-center gap-5">
                <Link href="/cart">Cart ({cartLength})</Link>
                {
                    isConnected ?
                        <button className="bg-black text-white px-5 py-1" onClick={logout}>Logout</button> :
                        <Link className="bg-black text-white px-5 py-1" href="/login">Login</Link>
                }
            </div>
        </header>
    )
}