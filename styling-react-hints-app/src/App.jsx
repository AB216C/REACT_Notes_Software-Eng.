
import './App.css'
import Character from './Components/Character'

function App() {

  return (

    //By copy and pasting "Character" multiple times, it will go off screen. 
    //This issue is fixed by including what's called flex wrap:wrap.

    <div >
      <h1 className="title" >My First React project</h1>
      <div className="container" >
        <Character/>
        <Character/>
        <Character/>

        <Character/>
        <Character/>
        <Character/>

        <Character/>
  
      </div>
    </div>

  )
}

export default App
