"use client"

import Product from "@/components/Product"
import api from "@/lib/api"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Homepage() {
  const [products, setProducts] = useState([])

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')

  const isConnected = useSelector(state => state.user.isConnected)

  const filter = () => {
    api.get('/products', {
      params: {
        category,
        search,
        sortDirection: sort.sortDirection,
        sortBy: sort.sortBy
      }
    }).then((response) => setProducts(response.data))
  }

  useEffect(() => {
    api.get('/products')
      .then((response) => setProducts(response.data))
  }, [])

  return (
    <>
      <h1 className="text-center mt-10 mb-5 font-semibold text-3xl">Shop ({products.length})</h1>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-5 gap-4 mb-5">
          <input type="text" placeholder="Search" className="border border-black py-2 px-2" value={search} onChange={(e) => setSearch(e.target.value)} />
          <select className="border border-black py-2 px-2" defaultValue={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>Filter by category</option>
            <option value="">All</option>
            <option value="Shoes">Shoes</option>
            <option value="Clothes">Clothes</option>
          </select>
          <select className="border border-black py-2 px-2" defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="" disabled>Sort</option>
            <option value={{ sortBy: 'name', sortDirection: 1 }}>A to Z</option>
            <option value={{ sortBy: 'name', sortDirection: -1 }}>Z to A</option>
            <option value={{ sortBy: 'price', sortDirection: 1 }}>Cheapest to most expensive</option>
            <option value={{ sortBy: 'price', sortDirection: -1 }}>Most expensive to cheapest</option>
          </select>

          <button className="bg-black text-white py-2" onClick={filter}>Search</button>
          {
            isConnected && <button className="bg-black text-white py-2">Admin</button>
          }


        </div>
        <div className="grid grid-cols-3 gap-4">
          {
            products.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </>
  )
}