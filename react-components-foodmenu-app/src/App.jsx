
import Coffees from "./Components/CoffeesType"
import Pastries from "./Components/PastriesType"
import Teas from "./Components/TeasType"
import "./Menu.css"


function App() {

  return (
    <div className="menu-board">
      <Coffees/>
      <Teas/>
      <Pastries/>
    </div>
  )

}

export default App
