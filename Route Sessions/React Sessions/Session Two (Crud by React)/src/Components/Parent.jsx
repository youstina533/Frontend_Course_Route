import Child from './Child'
import { useState } from 'react'
import ParentCSS from '../assets/Styles/Parent.module.css'

export default function Parent() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Samsung', price: 100, onSale: true, category: 'Mobile' },
        { id: 2, name: 'Apple', price: 200, onSale: false, category: 'Laptop' },
        { id: 3, name: 'Google', price: 150, onSale: true, category: 'Mobile' },
        { id: 4, name: 'Sony', price: 120, onSale: false, category: 'Mobile' },
        { id: 5, name: 'LG', price: 90, onSale: true, category: 'T.V' },
        { id: 6, name: 'HTC', price: 80, onSale: false, category: 'Mobile' }
    ])

    function deleteProduct(id) {
     let myProducts = structuredClone(products); //deep copy wa products array m4 hayt2asr 
     let newArray = myProducts.filter(function(Product) {
       return Product.id !== id;
     });
     setProducts(newArray); // hena al products array hayt2asr al data al 2aslya hattbdl b al newArray deh wa aly kan feh products al 2adem atms7 (4elt al data al 2adema wa 7atet al gdeda)
    }

    function updateProduct(index){
       let myProducts = structuredClone(products); //deep copy wa products array m4 hayt2asr 
       myProducts[index].price += 100;
       setProducts(myProducts); 
    }
  return (
    <>
      <h1>Products List</h1>
      <div className= "container">
          <div className= {` row g-3 ${ParentCSS.bg}`}>
            {products.map((currentProduct, i) =>
             <Child 
             currentProduct = {currentProduct} 
             key={currentProduct.id} 
             deleteProduct={deleteProduct} 
             updateProduct={updateProduct}
             productIndex={i}
             />)
            }
          </div>
      </div>
    </>
  )
}
