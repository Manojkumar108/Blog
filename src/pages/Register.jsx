import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [userData, setUserData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const changeInputHandle =(e)=>{
    setUserData(prevState =>{
      return {...prevState,[e.target.name]:e.target.value}
    })
  }

  const [error, setError] = useState('')
  const navigate = useNavigate()
  const registerUser = async()=>{
    e.preventDefault()
    setError('')
      try {
        const respones = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`,userData)
        const newUser = await respones.data;
        console.log(newUser);
        if (!newUser) {
          setError("Could not register. please try again.")
        }
        navigate('/')
      } catch (err) {
        setError(err)
      }
    

  }

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form  className="form register__form" onSubmit={registerUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input type="text"  placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandle}/>
          <input type="text"  placeholder='Email' name='email' value={userData.email} onChange={changeInputHandle}/>
          <input type="password"  placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle}/>
          <input type="password"  placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandle}/>
          <button type="submit"className='btn primary'>Register</button>
        </form>
        <small>Already have an account? <Link to='/login'>Sign in</Link> </small>
      </div>
    </section>
  )
}

export default Register