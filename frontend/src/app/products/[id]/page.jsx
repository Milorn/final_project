"use client"

import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SingleProduct() {
    const [product, setProduct] = useState({})

    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${params.id}`)
            .then((response) => setProduct(response.data))
    })

    return (
        <>
            <h1>{product.name}</h1>
            <img src={product.image} />
        </>
    )   
}