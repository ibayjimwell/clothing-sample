"use client"

import { useStore } from "@/lib/store-context"
import { HeroSection } from "@/components/hero-section"
import { ProductCard } from "@/components/product-card"

export default function HomePage() {
  const { products } = useStore()
  const featuredProducts = products.slice(0, 4)

  return (
    <>
      <HeroSection />

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Handpicked selections from our latest collection</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Quality That Speaks</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Every piece in our collection is crafted with attention to detail, using premium materials that ensure
            comfort and longevity.
          </p>
        </div>
      </section>
    </>
  )
}
