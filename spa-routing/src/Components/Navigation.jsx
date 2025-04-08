import {Link} from "react-router-dom"

function Navigation() {

  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link> </li>
        <li><Link  to="/ternary">Ternary Examples</Link> </li>
        <li ><Link to="/and">And Example</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;