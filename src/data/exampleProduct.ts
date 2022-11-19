import { Product } from '@/types/Product'

export const exampleProduct: Product = {
  category: 'perfume',
  name: 'Gabrielle Essence Eau De Parfum',
  description:
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  currentPrice: 149.99,
  originalPrice: 169.99,
  image: {
    desktopSrc: '/images/image-product-desktop.jpg',
    mobileSrc: '/images/image-product-mobile.jpg',
  },
}
