//Understanding how same class name affect the REACT STYLES:OVERLAPPING
//FIXING ISSUES WITH CSS MODULES
     //remove the first import and add the module.css import
// import "./Style1.css"

import style from "./Hello.module.css"


function HelloOne() {
  return <h3 className={style.greeting}>Hello friends, team1. Welcome to the workshop</h3>
}


export default HelloOne