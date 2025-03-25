
//JSX allows to write JS (JAVASSCRIPT ) in HTML

// Two types of components

/*
Functional = Functional programming 
         Within Functionalprograming, we multiple functions where each function servers one purpose
class = Object Oriented Programming paradigm
        Encapsulation and inheritance
*/

import Greeting from "./FunctionGreeting"
import ClassGreeting from "./ClassGreeting"
import Hierarchy from "./HierarchyStyles"

import HelloOne from "./HelloOneStylesReact"
import HelloTwo from "./HelloTwoStylesReact"
import ClassGreetingPro from "./ClassGreetingPro"
import Counter from "./useStateCounter"
import Car from "./useStatePractice2"
import PropApp from "./PropsRe"
import Salutation from "./useStatePractice3"
import Singing from "./PropsReDefaultProp"
import PersonalInfo from "./PropsClassDefaultProps"
import PersonalInfoFunc from "./PropsFunctionalDefaultProps"
// import Socialize from "./PropDrillingFunction"
import UserGreeting from "./ConditionalRendering"
import UserGreetingTernary from "./ConditionalRenderingTernary"
import NewList from "./List"
import NewListState from "./ListUseState"
import ListArray from "./ListArray"
import FilteredList from "./ListFilterArray"


function App() {
  const name = "John"
  const greeting = <h1>Hello, {name}</h1>

  //Introducing Props Drilling
  const customMessage = "Welcome to my React App"


  return (

    <div>
      <h1>Hello World</h1>
      <h1>Hello, {greeting}</h1>

      <hr/>
      
      <Greeting/>
      <ClassGreeting/>

      <hr/>

      <Hierarchy/>


      <h1>TESTING CSS MODULE IN REACT</h1>

      <HelloOne/>
      <HelloTwo/>
      <ClassGreetingPro/>
      <Counter/>
      <Car/>
      <hr/>
      <PropApp/>
      <hr/>
      <Salutation/>
      <hr/>
      <Singing/>
      <hr/>
      <PersonalInfo/>
      <hr/>
      <PersonalInfoFunc/>
      <hr/>
      {/* <Socialize customMessage = {customMessage} /> */}
      <UserGreeting isLoggedIn={true} username="Ferdinand" />
      <hr/>
      <UserGreetingTernary isLoggedIn={true} username="Mary" />

      <hr/>

      <NewList/>
      {/* <NewListState/> */}
      <hr/>

      <ListArray/>

      <hr/>
      <FilteredList/>
    </div>
  )
}

export default App

