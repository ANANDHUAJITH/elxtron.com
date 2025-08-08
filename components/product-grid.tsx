"use client"

import ProductCard from "./product-card"

export interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice: number | null
  imageUrl: string
}

interface ProductsSectionProps {
  products: Product[]
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
