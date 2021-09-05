import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
   const[author, setAuthor] = useState('')
   const history = useHistory();

   const handleSubmit = async (e) => {
       e.preventDefault();
       const newBlog = {title, body ,author};
       console.log(newBlog);  

       await fetch('http://localhost:8000/blogs',{
           method : 'POST',
           headers : {"Content-Type" : "application/json"},
           body : JSON.stringify(newBlog)
       })
       console.log('newBlog is added'); 
       history.push('/')
    //    setAuthor('')
    //    setBody('')
    //    setTitle('') 

   }

    return (
        <div className='create'>
         <h2>Add a new Blog</h2>
         <form onSubmit={handleSubmit}>
            <label>Blog Title :</label> 
            <input type = 'text'  
            required
            value = {title}
            onChange={(e) => setTitle(e.target.value)} />
             <label>Blog body :</label> 
            <textarea 
            required
            value = {body}
            onChange= {(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog Author:</label>
            <select 
                value ={author}
                onChange={(e) =>setAuthor(e.target.value)}>
                <option value='sow'>sow</option>
                <option value='ash'>ash</option>
                <option value='lava'>lava </option>
            </select>
            <button>Add Blog</button>
            
        </form>   
            
        </div>
    )
}

export default Create
