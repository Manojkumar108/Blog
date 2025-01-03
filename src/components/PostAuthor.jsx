import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar .png'

const postAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsedf`} className='post__author'>
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By: Dharam</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default postAuthor