import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const DeletePost = ({postId:id}) => {
  const {currentUser} = useContext(UserContext)
  const location = useLocation();
  const [isLoading , setIsLoading] = useState(false)

  const token = currentUser?.token;
  const navigate = useNavigate()

  useEffect(()=>{
    if (!token) {
      navigate('/login')
    }
  },[])

  const removePost = async()=>{
    setIsLoading(true)
    try {
      const response = await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/posts/${id}`,{withCredentials:true, headers:{Authorization:`Bearer ${token}`}})
      if (response.status==200) {
        if(location.pathname==`/myposts/${currentUser.id}`){
          navigate(0)
        }else{
          navigate('/')
        }
      }
      setIsLoading(false)
    } catch (error) {
      console.log("could not delete post.");
      
    }
  }
  if (isLoading) {
    return <Loader/>
  }
  return (
    <Link className='btn sm danger' onClick={()=> removePost(id)}>Delete</Link>
  )
}

export default DeletePost