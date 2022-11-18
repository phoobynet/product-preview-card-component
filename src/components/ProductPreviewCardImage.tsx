import { Product } from '../types/Product'

type Props = {
  product: Product
}

export default function ProductPreviewCardImage({ product }: Props) {
  return (
    <>
      <img
        src={product.image.desktopSrc}
        className="hidden object-cover md:block"
        alt="Product"
      />
      <img
        src={product.image.mobileSrc}
        className="object-cover md:hidden"
        alt="Product"
      />
    </>
  )
}
