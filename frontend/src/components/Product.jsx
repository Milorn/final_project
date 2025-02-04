"use client"

import { addToCart } from "@/lib/cartSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Product({ product }) {


    const isConnected = useSelector(state => state.user.isConnected)
    const dispatch = useDispatch()

    return (
        <div className="border-2 rounded">
            <Link href={`/products/${product.id}`}>
                <img src={product.image} />
            </Link>

            <div className="p-3">
                <div className="flex justify-between">
                    <h3 className="text-xl">{product.name}</h3>
                    <h4><span className="font-semibold">{product.price}</span> <span className="text-sm">DZD</span></h4>
                </div>
                <span className="text-white bg-black px-1.5 py-0.5 rounded-full text-sm">{product.category}</span>
                <div className="space-x-2 mt-3">
                    {
                        product.colors.map(color => (
                            <span key={color} style={{ backgroundColor: color }} className="size-6 rounded-full inline-block border border-black"></span>
                        ))
                    }
                </div>
                <div className="flex justify-between">
                    <div className="space-x-2 mt-3">
                        {
                            product.sizes.map(size => (
                                <span key={size} className="border border-black p-1 font-semibold">{size}</span>
                            ))
                        }
                    </div>
                    <div className="space-x-3">
                    <button className="bg-black text-white font-semibold px-5 py-2" onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                       { isConnected &&  <button className="bg-red-500 text-white font-semibold px-5 py-2">Delete</button>}
                    </div>

                </div>
            </div>
        </div>
    )
}