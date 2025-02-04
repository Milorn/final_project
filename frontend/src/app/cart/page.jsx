"use client"

import { removeFromCart } from "@/lib/cartSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Cart() {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Cart Page</h1>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            {product.name} <button className="text-xs rounded-full bg-red-400 text-white py-0.5 px-2" onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}