import React, { Dispatch, SetStateAction } from 'react'

type PropsType = {
  viewCart: boolean
  setViewCart: Dispatch<SetStateAction<boolean>>
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>View Products</button>
  ) : (
    <button onClick={() => setViewCart(true)}>View Cart</button>
  )

  const content = <nav className="nav">{button}</nav>
  return content
}

export default Nav
