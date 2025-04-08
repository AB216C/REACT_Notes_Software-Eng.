# SPA

Single page Application: The entire application is rendered on one page. 

## REACT ROUTING

USING NPM, we install a library called React Router. It offers tools to map routes to react components. This also help to implement navigation on the webpage

npm install react-router-dom 

## CONDITIONAL RENDERING

Rendering a content when a particular condition is met. Same as if statement. React allow us to achieve it with jsx. With jsx, we can insert javaScript expressions such as (the ternary operator) into HTML.

There two types of rendering content conditionaly in react: 

The && operator => '&&'
The Ternary Operator => '?'

## Handling Events in React

It is done by creating functions to handle events. The function is then passed to the event.

const greetMe =()=> {
  alert("Hello, friend")
}

<button onClick="greetMe">Click me!</button>


