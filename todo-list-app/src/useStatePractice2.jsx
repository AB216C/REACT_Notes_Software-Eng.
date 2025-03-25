import {useState} from 'react'

function Car() {
  const [car,setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color:"red"
  })

  const updateCar = () => {
    setCar(()=>{
      return {color:"Gray", brand:"Kia", year:1940, model:"OPTIMA"}

    })
  }

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year} </p>
      <button onClick={updateCar} >Updating my car</button>
    </div>
  )
}

export default Car