export interface Product {
  category: string
  name: string
  description: string
  currentPrice: number
  originalPrice: number
  image: {
    desktopSrc: string
    mobileSrc: string
  }
}
