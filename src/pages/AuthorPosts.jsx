import React, { useState,useEffect } from 'react'
import PostItem from '../components/PostItem'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const AuthorPosts = () => {
  const [posts,setPosts] = useState([]);
  const [isLoading , setIsLoading] = useState(false)

  const {id} = useParams()
  useEffect(()=>{
    const featchPosts = async()=>{
      setIsLoading(true)
      try {
        const respones = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/posts/users/${id}`)
        setPosts(respones?.data)
      } catch (err) {
        console.log(err);
        
      }
      setIsLoading(false)
    
    }
    featchPosts()
  },[])
  if (isLoading) {
    return <Loader/>
  }

return (
  <section className='posts'>
     {posts.length > 0 ?<div className="container posts__container">
          {
                  posts.map(({_id:id,thumbnail,category,title,description,creator,createdAt})=><PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={creator} createdAt ={createdAt} />)
              }
     </div>: <h2 className='center'>No Posts Found</h2>}
  </section>
)
}

export default AuthorPosts