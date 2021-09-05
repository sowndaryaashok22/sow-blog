import React from 'react'
import { Link } from 'react-router-dom'


const Blog = ({blog,onDelete}) => {
    //console.log('blog prop', blog)
    
    return (
        <div>
           <div className='blog-preview' key={blog.id}> 
           <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title} </h2>
              {blog.body}  
              </Link>
              <button onClick={()=>onDelete(blog.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Blog
