import React, {useState, useEffect} from 'react';
import BlogList from '../BlogList/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setError]= useState(null)

      const handleDelete = (id)=>{
         const newBlogs = blogs.filter(blog=>blog.id !== id);
         setBlogs(newBlogs);
    }

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok){
          throw Error ('could not fetch data!')
        }
        return res.json()
      })
      .then(
        data=>{
        setBlogs(data);
        setIsPending(false)
        setError(null)
        }
      ).catch(err=>{
        setIsPending(false)
        setError(err.message)
      })
    }, []);

  return (
    <div className="home">
    {error && <div>{error}</div>}  
    {isPending && <div>Loading...</div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
    {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's Blogs"/>}
    </div>
  )
}

export default Home;