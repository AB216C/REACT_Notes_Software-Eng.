import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ConditionalsWithAnd from './Components/ConditionalsWithAnd.jsx'
import ConditionalWithTernary from './Components/ConditoinalsWithTernary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<App/>} ></Route>
        <Route path="/and" element={<ConditionalsWithAnd/>} ></Route>
        <Route path="/ternary" element={<ConditionalWithTernary/>} ></Route>
      </Routes>
    </Router>
  </StrictMode>
)
