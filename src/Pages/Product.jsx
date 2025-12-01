import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Product() {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await response.json()
                setProduct(data)
            } catch (error) {
                console.error("Error fetching product:", error)
            }
        }
        fetchProduct()
    }, [id])

    if (!product) return <p className="text-center mt-20 text-lg">Loading...</p>

    return (
        <div className="max-w-5xl mx-auto mt-10 p-4">
            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                {product.title}
            </h1>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Product Images */}
                <div className="md:w-1/2 flex flex-col gap-4">
                    {product.images?.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${product.title} ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-all duration-300"
                        />
                    ))}
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 flex flex-col justify-between">
                    <p className="text-gray-700 text-lg mb-4">{product.description}</p>

                    <span className="text-2xl font-bold text-blue-600 mb-4">
                        ₹{product.price}
                    </span>

                    <div className="flex gap-4">
                        <button className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                            Add to Cart
                        </button>

                        <Link
                            to="/"
                            className="flex-1 border border-blue-600 text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 text-center"
                        >
                            Back to Products
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
