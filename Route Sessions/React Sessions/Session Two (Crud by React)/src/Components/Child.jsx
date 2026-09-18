import React from 'react'

export default function Child(props) {
  // export default function Child({currentProduct, deleteProduct, updateProduct, productIndex}) {  // ana mmkn a3ml destruct l aly gwa al props 3latol
  // let {id, name, price, onSale, category} = currentProduct // mn 8er props b2a sa3teha 
  let {id, name, price, onSale, category} = props.currentProduct
  let deleteProduct = props.deleteProduct
  let updateProduct = props.updateProduct
  let productIndex = props.productIndex
  return (
    <>
      <div className = "product-card col-lg-3 col-md-6 col-sm-12 bg-secondary text-white p-3 ms-2 position-relative">
        <div className = "product-card-inner">
            <span className = "product-id">Product Id: {id}</span>
            <h3 className = "product-name">{name}</h3>
            <span className = "product-price">Product Price: {price}</span>
            <br></br>
            <span className = "product-category">Product Category: {category}</span> 
            <button onClick= {() => deleteProduct(id)} className = "btn btn-danger mt-2 w-100">Delete</button>
            <button onClick= {() => updateProduct(productIndex)} className = "btn btn-warning mt-2 w-100">Update</button>
            {onSale &&
            <span className = "product-onsale bg-danger position-absolute top-0 end-0 p-2">sale</span>
            }
            {/* {onSale == true ? <span className = "product-onsale bg-danger position-absolute top-0 end-0 p-2">sale</span>  : null} */}
            {/* {onSale ? <span className = "product-onsale bg-danger position-absolute top-0 end-0 p-2">sale</span>  : null} */}
        </div>
    </div>
    </>
  )
}
