import { Product } from '../types/Product'
import { useContext } from 'react'
import { ProductPreviewCardContext } from './ProductPreviewCardContext'

export default function ProductPreviewCardCategory() {
  const product = useContext<Product | undefined>(ProductPreviewCardContext)

  if (!product) {
    return <></>
  }
  return (
    <div
      className="font-sans uppercase text-aurometalSaurus"
      style={{ letterSpacing: '5px' }}
    >
      {product.category}
    </div>
  )
}
