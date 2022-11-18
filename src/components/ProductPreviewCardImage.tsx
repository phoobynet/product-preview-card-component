import { Product } from '../types/Product'
import { useContext } from 'react'
import { ProductPreviewCardContext } from './ProductPreviewCardContext'

export default function ProductPreviewCardImage() {
  const product = useContext<Product | undefined>(ProductPreviewCardContext)

  if (!product) {
    return <></>
  }

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
