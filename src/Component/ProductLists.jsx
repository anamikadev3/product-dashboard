import React from 'react'

const ProductLists = ({products}) => {
  return (
    <div>  {products.map((product) => (
            <div key={product.id}>{product.title}</div>
        ))}</div>
  )
}

export default ProductLists