import React from 'react'

const BlogList = ({blogs}) => {

  return (
    <div className='blog-list'> 
        {blogs.map((bl) =>{
        return (<div className='blog-preview' key={bl.id}>
          <h2>{bl.title}</h2>
          <p> Written by {bl.author}</p>
          </div>
        );
    })}
    </div>
  )
}

export default BlogList