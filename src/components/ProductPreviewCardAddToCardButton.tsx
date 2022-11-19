import { MouseEventHandler } from 'react'

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function ProductPreviewCardAddToCardButton({ onClick }: Props) {
  return (
    <button
      tabIndex={0}
      className="flex h-[48px] w-full items-center justify-center space-x-2 rounded-lg bg-deepAquaMarine py-2 text-center font-medium text-white transition-all duration-300 hover:bg-deepAquaMarineHover"
      onClick={onClick}
    >
      <img
        src="/images/icon-cart.svg"
        alt="cart"
      />
      <span>Add to Cart</span>
    </button>
  )
}
