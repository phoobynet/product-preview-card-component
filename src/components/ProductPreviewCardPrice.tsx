import { Product } from '../types/Product'
import numeral from 'numeral'

type Props = {
  product: Product
}

export default function ProductPreviewCardPrice({ product }: Props) {
  const format = (price: number): string => numeral(price).format('$0,0.00')
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
