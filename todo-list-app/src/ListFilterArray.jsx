function FilteredList() {

  const fruits = [
    {id:1, name: "Apple", Calories:95},
    {id:2, name: "Strawberry", Calories:67},
    {id:3, name: "Banana", Calories:125},
    {id:4, name: "Cherries", Calories:79},
    {id:5, name: "Orange", Calories:102}
  ]

  const lowCalFruits = fruits.filter(fruit=> fruit.Calories < 80)

  const ListItems = lowCalFruits.map(fruit=> <li key= {fruit.id}> {fruit.name}:&nbsp;<b>{fruit.Calories} </b>

  </li> )


  return (<ul>{ListItems} </ul>)

}

export default FilteredList