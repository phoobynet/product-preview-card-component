import { Product } from '../types/Product'

type Props = {
  product: Product
}

export default function ProductPreviewCardDescription({ product }: Props) {
  return (
    <p className="text-[14px] font-medium text-aurometalSaurus md:text-[13px]">
      {product.description}
    </p>
  )
}
