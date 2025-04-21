const TestIt = () => {

 const tasks = ["Driving", "Cleaning", "Cooking", "Shopping", "Studing"]

 const products = [
    {id: 1, name: "Laptop"},
    {id: 2, name: "Iphone"},
    {id: 3, name: "Tablet"}
  ]

  return (

    <div>
      <h1>This is my tasks</h1>

      {<ul>

        {tasks.map((task,index)=> (
          <li key={index} >{task}</li>
        ))}
      
      </ul>}


      <h1>This is my products</h1>

      {<ul>

        {products.map((product)=> (
          <li key={product.id} >{product.name} </li>
        ))}
      
      
      </ul>}
    </div>
  )
}

export default TestIt