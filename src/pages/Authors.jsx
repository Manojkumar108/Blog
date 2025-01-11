import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

const Authors = () => {
  // const authorsData = [
  //   {
  //     "id": 1,
  //     "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
  //     "name": "John Doe",
  //     "posts": 23
  //   },
  //   {
  //     "id": 2,
  //     "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
  //     "name": "Jane Smith",
  //     "posts": 45
  //   },
  //   {
  //     "id": 3,
  //     "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
  //     "name": "Michael Johnson",
  //     "posts": 12
  //   },
  //   {
  //     "id": 4,
  //     "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
  //     "name": "Emily Davis",
  //     "posts": 31
  //   },
  //   {
  //     "id": 5,
  //     "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
  //     "name": "David Brown",
  //     "posts": 27
  //   }
  // ]

  const [authors,setAuthors] = useState([])
  const [isLoading , setIsLoading] = useState(false)

  useEffect(()=>{
    const getAuthors = async ()=>{
      setIsLoading(true)
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/users`)
        setAuthors(response.data)
      } catch (error) {
        console.log(error);
        
      }
      setIsLoading(false)
    }
    getAuthors()
  },[])

  if (isLoading) {
    return <Loader/>
  }


  
  return (
    <section className="authors">
      {authors.length > 0 ?<div className="container authors__container">
        {
          authors.map(({_id:id, avatar,name,posts})=>{
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={`${import.meta.env.VITE_APP_ASSETS_URL}/uploads/${avatar}`} alt={`image of ${name}`} />
              </div>
              <div className="author__info">
                <h4>{name} </h4>
                <p>{posts} </p>
              </div>
            </Link>

          })
        }

      </div>: <h2 className='center'> No author/user found</h2>}
    </section>
  )
}

export default Authors