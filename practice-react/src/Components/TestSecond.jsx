
import {useEffect} from 'react'


// const [data, setData] = useState([])
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState(null)

const TestSecond=()=> {


    try {

      const  FetchApiInfo = async() => {

        const response = await fetch('https://jsonplaceholder.typicode.com')

        if(!response.ok) {
          throw new Error("Unable to fetch api")
        }

        const data = await response.json()
        console.log(data.message)
        
      }

      useEffect(()=>{

        FetchApiInfo()

      },[])


    }

    catch(error) {
      console.log(error)
    }

  return (

    <div>

      <h1>The following is my consoled data</h1>

    </div>
  )

}

export default TestSecond