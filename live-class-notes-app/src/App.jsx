import { useState } from 'react'
import './App.css'
import ProductListing from './Components/ProductListing'

function App() {

  const [products] = useState([
    //This is a list of objects or mini database
    {
      id:1,
      name: "labtop",
      price:"1200",
      description: "Hight Performance Laptop"
    },

    {
      id:2,
      name: "Playstation",
      price:"600",
      description: "Sony Gaming System"
    },

    {
      id:3,
      name: "XBox",
      price:"600",
      description: "Microsoft Gaming System"
    },


    {
      id:4,
      name: "Galaxy s25 Ultra",
      price:"1400",
      description: "Newest Galaxy Phone. High Performance"
    }


  ])

  return (
    <div>

      <h1>Our Products</h1>

      <ProductListing allproducts={products} />

    </div>
  )

  }

export default App
