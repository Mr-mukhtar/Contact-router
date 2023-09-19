import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
const ProductDetails = () => {
    const params = useParams();
    console.log(params.productID);
  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productID}</p>
    </section>
  )
}

export default ProductDetails
