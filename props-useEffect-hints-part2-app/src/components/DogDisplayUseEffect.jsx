import {useState} from 'react'
import {useEffect} from 'react'

function DogDisplay() {

  const [dogImage,setDogImage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState(null)

//Note that without, asyn and await, we can't fetch dog image.
  useEffect(()=> {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const result = await response.json();
        setDogImage(result.message)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    };

    fetchDogImage();
  }, [])  //Since dependency is empty, useEffect will only run once up on component's first render. 


  if (loading) return <div>Dog image loading.......</div>
  if (error) return <div>Error {error} </div>


  return (
    <div>
      <h1>Random Dog 😍 Image</h1>
      <img src={dogImage} style= {{width:"300px", height:"auto"}}></img>
    </div>
  )
}

export default DogDisplay