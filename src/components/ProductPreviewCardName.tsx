import { Product } from '@/types/Product'
import { useContext } from 'react'
import { ProductPreviewCardContext } from './ProductPreviewCardContext'

export default function ProductPreviewCardName() {
  const product = useContext<Product | undefined>(ProductPreviewCardContext)

  if (!product) {
    return <></>
  }

  return (
    <div
      className="font-display"
      style={{
        fontSize: '32px',
        lineHeight: '32px',
      }}
    >
      {product.name}
    </div>
  )
}
