import {useState} from 'react' 
 
 function MytoDolist() {

  const [tasks, setTasks] = useState(["Take shower", "Break fast", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value)

  }

  function addTask() {

    if(newTask.trim()!=="") {
      setTasks(tasks => [...tasks,newTask])
      setNewTask("");
    }

  }

  function deleteTask(index) {

    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);

  }


  function moveTaskUp(index) {

    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index]],[updatedTasks[index-1]] = [updatedTasks[index-1]],[updatedTasks[index]];
      setTasks(updatedTasks)
    }

  }

  function moveTaskDown(index) {
    if (index <tasks.length-1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index]],[updatedTasks[index+1]] = [updatedTasks[index+1]],[updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }


  return (
    <div className="to-do-list" >

      <h1>My to do list app </h1>
      <div>
        <input 
        type="text"
        placeholder="Enter a task"
        value = {newTask}
        onChange={handleInputChange}
        />
        <button className="add-button"
        onClick={addTask}
        >Add</button>
      </div>

      <ol>

        {
          tasks.map((task,index)=>
            <li key={index}>

              <span className="text" >{task} </span>
              <button className="delete-button" onClick={deleteTask} >delete</button>
              <button className= "move-button" onClick={moveTaskUp} >👆</button>
              <button className="move-button" onClick={moveTaskDown} >👇</button>

            </li>
          )
        }
      </ol>

    </div>
  )
 }

 export default MytoDolist