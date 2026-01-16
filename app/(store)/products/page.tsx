"use client"

import { useStore } from "@/lib/store-context"
import { ProductCard } from "@/components/product-card"

export default function ProductsPage() {
  const { products } = useStore()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Explore our complete range of premium clothing designed for style and comfort
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No products available at the moment.</p>
        </div>
      )}
    </div>
  )
}
