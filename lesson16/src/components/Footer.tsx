import React from 'react'
import useCart from '../hooks/useCart'

type PropsType = {
  viewCart: boolean
}

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart()

  const year: number = new Date().getFullYear()

  const pageContent = viewCart ? (
    <p>Typescript tutorial shopping cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Typescript tutorial shopping cart &copy; {year}</p>
    </>
  )

  const content = <footer className="footer">{pageContent}</footer>
  return content
}

export default Footer
