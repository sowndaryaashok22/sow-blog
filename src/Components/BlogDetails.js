import React from 'react'
import { useParams} from 'react-router-dom'
import { useState , useEffect } from 'react'

const BlogDetails = () => {

    const { id } = useParams();
    const [blogData, setBlogData] = useState({})

    useEffect( async() => {
        console.log('useEffect called')
        const fetchData = await fetch(`http://localhost:8000/blogs/${id}`)
        const result = await fetchData.json();
        console.log('result is', result)
        setBlogData(result)
       
    }, [])
    
    return (
        <div className='blog-details'>
          {/*   <h2>Blog Details {id}</h2>  */}
          {blogData && (
          <article>
            <h2>{blogData.title}</h2> 
            <p>Written By : {blogData.author}</p> 
            <div>{blogData.body}</div>
            </article>) } 
          
        </div>
    )
}

export default BlogDetails
