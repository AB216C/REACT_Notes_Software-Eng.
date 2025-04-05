import React, {useState, useEffect} from 'react' 


function SecondComponent () {

  const [width, setWidth] = useState(window.innerWidth)
  const [height,setHeight] = useState(window.innerHeight)


  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }


  //resizing the browser with no useEffect hook, will add a thousands of event listners. And we only need one when component mount.
  //That's whay use Effect plus empty arrayy(depandancy)

  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("Event Listner Added")

    return () => {
      window.removeEventListener("resize", handleResize)
      console.log("Event Listener removed")
    }
  },[])

  //Let's add another useEffect hook. You can have more than one useEffect hook in one component
  
  useEffect(()=> {
    document.title = `Size: ${width} x ${height}`
  },[width,height])

  return (
    <div>

      <p> Window Width:{width}px </p>
      <p> Window height:{height}px </p>

    </div>
  )
}

export default SecondComponent