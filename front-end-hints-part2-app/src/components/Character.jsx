import styles from "./Character.module.css"
function Character() {
  //Let's Create Variables
  //Problem with this approach, it doesn't not allow to create different Characters with differnt names.
  //To fix the issue, "props" and "useState" should be incorporated in the next Character2 Component

  const name = "John"
  const type = "Fighter"
  const level = 0

  return (
    <div className={styles.card} >

      <p>Name:{name} </p>
      <p>Type:{type} </p>
      <p>Level:{level} </p>
    </div>
  )
}

export default Character