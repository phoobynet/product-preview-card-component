import { Product } from '../types/Product'
import numeral from 'numeral'
import { useContext } from 'react'
import { ProductPreviewCardContext } from './ProductPreviewCardContext'

export default function ProductPreviewCardPrice() {
  const product = useContext<Product | undefined>(ProductPreviewCardContext)

  const format = (price: number): string => numeral(price).format('$0,0.00')

  if (!product) {
    return <></>
  }

  return (
    <div className="flex items-center space-x-3">
      <div className="font-display text-[32px] text-deepAquaMarine">
        {format(product.currentPrice)}
      </div>
      <div className="text-aurometalSaurus line-through">
        {format(product.originalPrice)}
      </div>
    </div>
  )
}
