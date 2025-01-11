import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';
import Loader from './Loader';
import axios from 'axios'

// import thumbnail1 from '../images/thumbnail1.jpg'
// import thumbnail2 from '../images/thumbnail2.jpg'
// import thumbnail3 from '../images/thumbnail3.jpg'
// import thumbnail4 from '../images/thumbnail4.jpg'
 
// import DUMMY_POSTS from '../dummy';

  

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [isLoading , setIsLoading] = useState(false)
    useEffect(()=>{
      const featchPosts = async()=>{
        setIsLoading(true)
        try {
          const respones = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/posts`)
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

export default Posts