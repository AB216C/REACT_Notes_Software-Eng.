// onChange = Event handler used primarily with forms elements

// Example: <input>, <textarea>, <select>, <radio>

//It triggers a function anytime the value of input changes

import React, {useState} from 'react'

function FerdNiyo() {

const [name,setName] = useState("Guest")    //Let's set inital value to be "guest", instead of empty string " "
const [quantity, setQuantity] = useState()
const [comment, setComment] = useState("")
const [payment, setPayment] = useState("")
const [shipping,setShipping] = useState("Delivery")

function handleNameChange (event) {
     setName(event.target.value)
}

function handleQuantityChange(event) {
  setQuantity(event.target.value)
}

function handleCommentsChange(event) {
  setComment(event.target.value)
}

function handlePaymentChange(event) {
  setPayment(event.target.value)
}

function handleShippingChange(event) {
  setShipping(event.target.value)
}

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name:{name} </p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity} </p>

      <textarea value={comment} onChange={handleCommentsChange} placeholder="Enter Delivery instrunctions" ></textarea>
      <p>Comments:{comment} </p>

      <select value={payment} onChange={handlePaymentChange}>
        <option> Select payment Option</option>
        <option>VISA</option>
        <option>MasterCard</option>
        <option>GiftCard</option>
      </select>
      <p>Payment Method: {payment}</p>


      <label>
        <input type="radio" value="Delivery" 
           checked = {shipping === "Delivery"}
           onChange = {handleShippingChange}
        />
        Delivery</label>

      <br></br>

      <label>
        <input type="radio" value= "Pick Up" 
              checked = {shipping === "Pick Up"}
              onChange = {handleShippingChange}
        />
        Pick Up</label>

      <p>Shipping: {shipping} </p>

    </div>
  )
}

export default FerdNiyo




