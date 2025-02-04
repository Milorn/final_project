"use client"

import api from "@/lib/api"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SingleProduct() {
    const [product, setProduct] = useState({})

    const params = useParams()

    useEffect(() => {
        api.get(`/products/${params.id}`)
            .then((response) => setProduct(response.data))
    })

    return (
        <>
            <h1>{product.name}</h1>
            <img src={product.image} />
        </>
    )   
}