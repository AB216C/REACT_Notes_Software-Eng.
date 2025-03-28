
function Singing ({artist = "Jayz"}) {
  return <h1> {artist} will perform for us next year </h1>
}


Singing.defaultProps = {
  artist : "Rihana"
}


export default Singing