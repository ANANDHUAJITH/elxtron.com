import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    price: number
    originalPrice?: number | null
    imageUrl: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center justify-between w-[280px] h-[380px] border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white p-2">
      <div className="relative w-full h-[200px]">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col items-center p-2 w-full flex-grow">
        <h3 className="text-lg font-bold mt-2 mb-1 text-center line-clamp-2">{product.name}</h3>
        <p className="text-xs text-center mb-2 text-gray-600 line-clamp-3">{product.description}</p>
        <div className="text-base font-bold mb-2 text-orange-500">
          {product.originalPrice ? (
            <div className="flex items-center gap-1">
              <span className="line-through text-gray-400 text-xs">${product.originalPrice.toFixed(2)}</span>
              <span className="text-orange-500 text-base font-bold">${product.price.toFixed(2)}</span>
            </div>
          ) : (
            <span>${product.price.toFixed(2)}</span>
          )}
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-lg text-sm mt-auto">
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
