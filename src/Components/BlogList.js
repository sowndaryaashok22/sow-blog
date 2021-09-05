import React from 'react'
import Blog from './Blog'


const BlogList = ({blogs, onDelete}) => {

   
    
    
    return (
        <div>
           <div className='blog-preview' > 
           {blogs.map((blog) =>
               
                <Blog blog={blog} key ={blog.id} onDelete={onDelete} / >
               
            )}
            
           </div>
        </div>
    )
}

export default BlogList
