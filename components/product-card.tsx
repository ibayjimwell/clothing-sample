"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/types"
import { useStore } from "@/lib/store-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore()
  const router = useRouter()

  const handleBuyNow = () => {
    addToCart(product, 1)
    router.push("/checkout")
  }

  return (
    <Card className="group overflow-hidden border-0 bg-transparent shadow-none">
      <CardContent className="p-0">
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="font-medium text-foreground">{product.name}</h3>
          <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent" onClick={() => addToCart(product, 1)}>
              Add to Cart
            </Button>
            <Button size="sm" className="flex-1" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
