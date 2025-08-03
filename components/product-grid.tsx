// This component is now a Server Component
import ProductCard from "./product-card" // ProductCard can still render client components like Button

interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number | null
  imageUrl: string
}

interface ProductGridProps {
  products: Product[]
  title: string
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="parent-grid-container">
        <div className="grid-area-left-sidebar border-thin bg-white"></div>
        <div className="grid-area-right-sidebar border-thin bg-white"></div>
        <div className="grid-area-top-left border-thin bg-white"></div>
        <div className="grid-area-top-right border-thin bg-white"></div>

        {/* This div is now a placeholder to maintain grid structure */}
        <div className="grid-area-heading-placeholder border-thin bg-white"></div>

        <div className="grid-area-products-section border-thin bg-white p-4 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
