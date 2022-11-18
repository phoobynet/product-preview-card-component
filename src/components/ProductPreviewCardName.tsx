import { Product } from '../types/Product'

type Props = {
  product: Product
}

export default function ProductPreviewCardName({ product }: Props) {
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
