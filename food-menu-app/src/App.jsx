import Coffees from "./CoffeesType"
import Teas from "./TeasType"
import Pastries from "./PastriesType"
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
