import React, { Dispatch, SetStateAction } from 'react'
import useCart from '../hooks/useCart'
import Nav from './Nav'

type PropsType = {
  viewCart: boolean
  setViewCart: Dispatch<SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart()

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Typescrript Tutorial</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  )

  return content
}

export default Header
