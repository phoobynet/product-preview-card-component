import { Product } from '../types/Product'

type Props = {
  product: Product
}

export default function ProductPreviewCardCategory({ product }: Props) {
  return (
    <div
      className="font-sans uppercase text-aurometalSaurus"
      style={{ letterSpacing: '5px' }}
    >
      {product.category}
    </div>
  )
}
