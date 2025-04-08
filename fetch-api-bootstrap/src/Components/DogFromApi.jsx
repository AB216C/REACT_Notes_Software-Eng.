import {useState, useEffect} from 'react'
import axios from 'axios'
import { Button, Spinner} from 'react-bootstrap'

function DogFromApi() {

  const [dogImage, setDogImage] = useState(false)
  const [isLoading,SetIsLoading] = useState(true)

  const FetchDogImage =() => {
    SetIsLoading(true)
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setDogImage(response.data.message)
        SetIsLoading(false)
      })
      .catch(error=> {
        console.log("Error fetching dog image", error)
        SetIsLoading(false)
      })
  }

  const HideDogImage =() => {
    setDogImage(false)
  }

  useEffect(()=> {
    FetchDogImage();
  }, [])   //[], will run once.


  return (
    <div className="d-flex flex-column justify-content-center" >
      <h1>That's my Dog</h1> 
      {/*IsLoading: Diplay a centered spinner animation, Else display dog image*/}

      {isLoading? (
        <div className="d-flex justify-content-center" >
          <Spinner animation="border"/>
        </div>
      ): (
          <img src={dogImage} style={{maxWidth: "100%", maxHeight: "300px", objectFit: "contain"}} />
      )}

      <Button variant="primary"  onClick={FetchDogImage} className="m-2" >Get another dog</Button>
      <Button variant="primary"  onClick={HideDogImage} className="m-2" >Hide dog Image</Button>
    </div>
  )
}

export default DogFromApi