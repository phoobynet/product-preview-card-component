import { Product } from '@/types/Product'
import { useContext } from 'react'
import { ProductPreviewCardContext } from './ProductPreviewCardContext'

export default function ProductPreviewCardDescription() {
  const product = useContext<Product | undefined>(ProductPreviewCardContext)

  if (!product) {
    return <></>
  }

  return (
    <p className="text-[14px] font-medium text-aurometalSaurus md:text-[13px]">
      {product.description}
    </p>
  )
}
