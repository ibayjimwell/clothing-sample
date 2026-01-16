"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import type { CartItem as CartItemType } from "@/lib/types"
import { useStore } from "@/lib/store-context"
import { Button } from "@/components/ui/button"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateCartQuantity, removeFromCart } = useStore()
  const { product, quantity } = item
  const subtotal = product.price * quantity

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden bg-secondary">
        <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFromCart(product.id)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Remove item</span>
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => updateCartQuantity(product.id, quantity - 1)}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => updateCartQuantity(product.id, quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
