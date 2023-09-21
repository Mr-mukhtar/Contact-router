import React from 'react'
import { Route, useParams } from 'react-router-dom'
const ProductDetails = () => {
    const params = useParams();
    console.log(params.productID);
  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productID}</p>
      <Route Path={``}></Route>
    </section>
  )
}

export default ProductDetails
