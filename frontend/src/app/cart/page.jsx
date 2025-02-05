"use client"

import api from "@/lib/api"
import { removeFromCart } from "@/lib/cartSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Cart() {
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const items = useSelector(state => state.cart.products)
    const totalPrice = items.reduce((old, item) => old += (item.product.price * item.quantity), 0)
    const dispatch = useDispatch()


    const submit = async(e) => {
        e.preventDefault()
        await api.post('/orders', {
            email, 
            address,
            phone,
            name,
            items
        })
    }

    return (
        <div className="max-w-screen-md mx-auto mb-20">
            <h1 className="text-center text-4xl font-semibold mt-8">My Cart</h1>
            <div className="grid grid-cols-3 gap-10">
                <div className="flex flex-col gap-4 mt-8 col-span-2">
                    {
                        items.map((item, index) => (
                            <div key={item.product.id} className="border border-black flex items-center gap-4">
                                <div className="w-1/3">
                                    <img src={item.product.image} />
                                </div>
                                <div className="w-full flex items-center flex-col">
                                    <h1 className="text-2xl font-semibold">{item.product.name}</h1>
                                    <h4>Quantité: {item.quantity}</h4>
                                    <button className="bg-red-500 rounded-full text-white p-1" onClick={() => dispatch(removeFromCart(index))}>Remove</button>
                                </div>
                            </div>
                        ))
                    }
                    <h1 className="text-center">Total price: <span className="font-semibold">{totalPrice}</span> DZD</h1>
                </div>
                <form className="flex flex-col gap-4" onSubmit={submit}>
                    <input className="border border-black px-2 py-2 w-full" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="border border-black px-2 py-2 w-full" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="border border-black px-2 py-2 w-full" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <input className="border border-black px-2 py-2 w-full" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button className="bg-black text-white py-2">Send</button>
                </form>
            </div>
        </div>
    )
}