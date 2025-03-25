//Props is very useful in passing data between different Components
//While product.description and product.price can be displayed below product.name, it is not encouranged in react. Thus,
//A differnt component need to be created.
//If you insert all products in the place of props, props is not longer needed. 
//Example ProductListing = ({allproducts}) then allproducts.map((product,index)) will be used instead of the one shown below
//Let's continue using props

//AT this point al is good, however, we don't want product details on product listing. We need to move them to the product details component

import "./product-stylesheet.css"
import ProductDetails from "./ProductDetails"
const ProductListing = (props) => {

  return (
    <div >
      <h1>Product Listing</h1>

      {
        props.allproducts.map((product,index)=>(
          <div key={index} className="products" >
            <ProductDetails oneProduct={product} />
            {/* <h3>{product.name}</h3>
            <p> {product.description}</p> 
            <p>{product.price}</p>    */}
          </div>
        ))
      }

    </div>
  )

}

export default ProductListing


