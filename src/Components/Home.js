import React from 'react'
import { useState , useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // const {data, isPending, error} = useFetch('http://localhost:8000/blogs');
  
  const [blogs, setBlogs] = useState();
  const [isPending, setIsPending] = useState(true);
  const [name, setName] = useState('yaso')
  //const [blogsChanged, setBlogsChanged] = useState(false);- false means data is not changed

  

  const filtered = (author)  =>{
    return blogs.filter((blog) => blog.author === author);
  }

  const handleDelete = async (id) => {
    console.log('delete button is clicked')
    const filtertedBlogs = blogs.filter((blog) => {
      return blog.id !== id
    })
    setBlogs(filtertedBlogs)

    const url = 'http://localhost:8000/blogs/'+id; 

    await fetch(url, {
      method : 'DELETE'
    });

    // above code is not getting data from server & that is modifying the data we are having
    //setBlogsChanged(!blogsChanged) - this is used getting data from server. if we use this we dont need filteredblogs 

  }



  useEffect(async()=>{
    
    console.log('useEffect called')
    const fetchData = await fetch('http://localhost:8000/blogs')
    const result = await fetchData.json();
    console.log('result is', result)
    setBlogs(result)
    setIsPending(false)

  }, []) 

// },[blogsChanged]
 
  // console.log('blogs is',blogs)
   
  return (
      <div className = 'home'>
        {isPending && <div> Loading... </div>} 
      {blogs &&  <BlogList blogs={blogs} onDelete={handleDelete} />  }
      {/* <BlogList blogs ={ filtered('sow')}/> */}
      {/* <button onClick={()=>setName('shan')}>change name</button> */}
      {/* <p>{name}</p> */}
      </div>
  )
}

export default Home
