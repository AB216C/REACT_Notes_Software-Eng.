import styles from './ProductDetail.module.css'
const ProductDetails = ({oneProduct}) => {


  return (

    <div className={styles.productstyling}>
      <h1>Product Details</h1>
      <h3>{oneProduct.name}</h3>
      <p> {oneProduct.description}</p> 
      <p>{oneProduct.price}</p>  
    </div>
  )
}

export default ProductDetails