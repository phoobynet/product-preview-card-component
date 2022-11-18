import { Product } from '../types/Product'
import ProductPreviewCardImage from './ProductPreviewCardImage'
import ProductPreviewCardAddToCardButton from './ProductPreviewCardAddToCardButton'
import ProductPreviewCardPrice from './ProductPreviewCardPrice'
import ProductPreviewCardDescription from './ProductPreviewCardDescription'
import ProductPreviewCardCategory from './ProductPreviewCardCategory'
import ProductPreviewCardName from './ProductPreviewCardName'
import { ProductPreviewCardProvider } from './ProductPreviewCardContext'
import { MouseEventHandler } from 'react'

type Props = {
  product: Product
  addToCart: MouseEventHandler<HTMLButtonElement>
}

export default function ProductPreviewCard({ product, addToCart }: Props) {
  return (
    <ProductPreviewCardProvider value={product}>
      <div className="m-2 overflow-hidden rounded-lg bg-white md:m-0 md:max-h-[450px] md:max-w-[600px]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <ProductPreviewCardImage />
          </div>
          <div className="flex flex-1 flex-col space-y-6 p-10">
            <ProductPreviewCardCategory />
            <ProductPreviewCardName />
            <ProductPreviewCardDescription />
            <ProductPreviewCardPrice />
            <ProductPreviewCardAddToCardButton onClick={addToCart} />
          </div>
        </div>
      </div>
    </ProductPreviewCardProvider>
  )
}
