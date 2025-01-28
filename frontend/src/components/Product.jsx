import Link from "next/link";

export default function Product({ product }) {
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
                <div className="space-x-2 mt-3">
                    {
                        product.sizes.map(size => (
                            <span key={size} className="border border-black p-1 font-semibold">{size}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}