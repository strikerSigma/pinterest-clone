"use client"
import axios from 'axios';
import React, { useState } from 'react'

const page = () => {
  const [post,setPost] = useState(undefined)
  const [title,setTitle] = useState(undefined)
  const [desc,setDesc] = useState(undefined)

  React.useEffect(() => {
    axios.get('http://localhost:3000/api/pin').then((response) => {
      setPost(response.data.posts);
      console.log(response.data.posts);
    });
  }, []);

  const handleSubmit = () => {
    axios.post('http://localhost:3000/api/pin',{
      title,
      desc
    }).then((response) => {
      setPost(response.data.posts);
      console.log(response.data.posts);
    });
  }
  return (
    <div className='pt-20'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type="text" placeholder='desc'  value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
        <button type="submit">Submit</button>
      </form>
      <div>
        {post && post.map(post => { return <div><h1>{post.title}</h1><p>{post.desc}</p><p>{post.date}</p></div>})}
      </div>
    </div>
  )
}

export default page