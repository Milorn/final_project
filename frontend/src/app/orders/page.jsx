"use client"

import { useSelector } from "react-redux"


export default function Orders() {

    const isConnected = useSelector(state => state.user.isConnected)
    const user = useSelector(state => state.user.user)

    if (!isConnected || user.type != 'admin') {
        return (
            <h1>You don't have the right to view this page. </h1>
        )
    }

    return (
        <>
            <h1>Orders Page</h1>
        </>
    )
}