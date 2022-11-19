import { Product } from '@/types/Product'
import { createContext } from 'react'

export const ProductPreviewCardContext = createContext<Product | undefined>(
  undefined,
)

export const ProductPreviewCardProvider = ProductPreviewCardContext.Provider
