function NewList() {
  const fruits = ["apple", "orange", "banana", "coconut", "pineaple"]

  const ListItems = fruits.map(fruit=><li>{fruit} </li>);

  return (<ol>{ListItems} </ol>)
}

export default NewList



