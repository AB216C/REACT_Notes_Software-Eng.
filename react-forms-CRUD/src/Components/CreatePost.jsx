import {useState} from 'react'


function CreatePost() {

  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const [error,setError] = useState('')
  const [success, setSuccess] = useState('')

//Handle Input Change

const handleTitleChange =(event)=> {
  setTitle(event.target.value)
}

const handleBodyChange =(event)=> {
  setBody(event.target.value)
}

//Form validation

const validateForm = () => {
  if(title.trim()==="||body.trim()===") {
    setError("Both title and body are required")
    return false;
  }

  setError('');
return true
};


const handleSubmit = async(event)=>{
  event.preventDefault();

  if(!validateForm()) {
    return;
  }

  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(
        {title:title,
          body:body,
          userId:1
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8'
        },
    });
  
    if(!response.ok) {
      throw new Error('Failed to create Post')
    }
  
    const data = await response.json()
  
    setTitle('')
    setBody('')
    setSuccess(
  
      <div>
            <p>New Post Created Successfully</p>
            ID: {data.id} <br/>
            Title: {data.title} <br/>
            Body: {data.body}
  
      </div>
  
    )
}

catch(e) {
  setError(e.message)
}

}



return(

  <div>
    <h1>CREATE A NEW POST</h1>

    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="title">Title:</label> <br/>
        <input
        type="text"
        id="title"
        value={title}
        onChange={handleTitleChange}
        placeholder = "Enter Post title"
        />
      </div>

      <div>
        <label htmlFor="body" >Body:</label><br/>
        <textarea 
        id="body"
        value={body}
        onChange={handleBodyChange}
        placeholder= "Enter post content"
        
        />
      </div> <br/>

      <button type="submit" >Create Post</button>

    </form>

    {error&& <div style={{color:"red"}} >{error}</div>}
    {success&& <div style={{color:"green"}} >{success}</div>}



  </div>
)

}

export default CreatePost