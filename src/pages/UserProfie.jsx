import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfie = () => {
  const [avatar , setAvatar] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdsd`} className='btn'> My Posts</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            {/* form to update avatar  */}
            <form action="" className="avatar__form">
              <input type="file" name="avatar" id="avatar" onChange={e=> setAvatar(e.target.files[0])}  accept='png,jpg,jpeg'/>
              <label htmlFor="avatar"><FaEdit/> </label>
            </form>
            <button className="profile__avatar-btn"><FaCheck/> </button>
          </div>
          <h1>Dharm Kumar</h1>
          {/* form to update user details  */}
          <form action="" className="form profile__form">
            <p className="form__error-message">
              this is an error

            </p>
              <input type="text" placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/>
              <input type="email" value={email} placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
              <input type="password" value={currentPassword} placeholder='Current password' onChange={e=>setCurrentPassword(e.target.value)}/>
              <input type="password" placeholder='New password' value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>
              <input type="password" placeholder='Confirm password' value={confirmNewPassword} onChange={e=>setConfirmNewPassword(e.target.value)}/>
              <button type="submit"className='btn primary' >Update details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfie