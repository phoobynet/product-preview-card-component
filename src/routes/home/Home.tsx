import { MouseEventHandler, useState } from 'react'
import { Product } from '@/types/Product'
import { exampleProduct } from '@/data/exampleProduct'
import ProductPreviewCard from '@/components/ProductPreviewCard'

export default function Home() {
  const [product] = useState<Product>(exampleProduct)

  const addToCart: MouseEventHandler<HTMLButtonElement> = () => {
    alert('Added to cart')
  }

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <ProductPreviewCard
        product={product}
        addToCart={addToCart}
      />
    </main>
  )
}
