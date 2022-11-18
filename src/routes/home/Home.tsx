import ProductPreviewCard from '../../components/ProductPreviewCard'
import styles from './Home.module.scss'
import { useState } from 'react'
import { Product } from '../../types/Product'

export default function Home() {
  const [product] = useState<Product>({
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
  })

  return (
    <div className={styles.home}>
      <ProductPreviewCard product={product}></ProductPreviewCard>
    </div>
  )
}
