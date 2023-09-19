import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
  <section>
     <h1>
      the product page
    </h1>
  <ul>
    <li>
      <Link to='products/p11'>A Book</Link>
      </li>
    <li>
    <Link to='products/p2'>A Cart</Link>
      </li>
    <li>
    <Link to='products/p3'>The Cours</Link>
      </li>
    <li>
    <Link to='products/p4'>mobile shop</Link>
    </li>
  </ul>
  </section>

)
}

export default Products
