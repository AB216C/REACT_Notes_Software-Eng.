
function ListArray() {

  const fruits = [
    {id:1, name: "Apple", Calories:95},
    {id:2, name: "Strawberry", Calories:67},
    {id:3, name: "Banana", Calories:95},
    {id:4, name: "Cherries", Calories:79},
    {id:5, name: "Orange", Calories:102}
  ]

  //Sorting array/list alphabetically

  fruits.sort((a,b)=> a.name.localeCompare(b.name))

   //Sorting array/list alphabetically-reverse

   fruits.sort((a,b)=> b.name.localeCompare(a.name))

   // SORTING NUMERIC

   fruits.sort((a,b)=>a.Calories-b.Calories)



  //Add &nbsp; : To add space

  const ListItems = fruits.map(fruit => <li key={fruit.id} > {fruit.name}: &nbsp; <b>{fruit.Calories}</b></li> )
  return (<ul>{ListItems} </ul>)

}

export default ListArray