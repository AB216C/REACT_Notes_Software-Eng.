//Component hierarchy and Composition

/*
React Encourange you to break down your UI into smaller and reusable components. 
A component can contain other componets to form a tree like structure called  component hierachy
*/

//Adding syling to our functions
import './Style.css'

function Hierarchy() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

function Header() {
  return <header><h1 className="header" >Welcome to My site</h1></header>
}

function Main() {
  return <main><p className="main" >This is my main content</p></main>
}

function Footer() {
  return <footer><p className="footer" >&copy;2024 My Site</p></footer>
}

export default Hierarchy