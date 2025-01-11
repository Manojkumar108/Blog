import React from 'react'
import { useState ,useContext} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Login = () => {
  const [userData, setUserData] = useState({
    email:'',
    password:'',

  })
  const [error ,setError]=useState("")
  const navigate = useNavigate()
  const {setCurrentUser}= useContext(UserContext)
  const changeInputHandle =(e)=>{
    setUserData(prevState =>{
      return {...prevState,[e.target.name]:e.target.value}
    })
  }
  const loginUser = async(e)=>{
    e.preventDefault();
    setError('')
    try {
      const response = axios.post(`${import.meta.env.VITE_APP_BASE_URL}/users/login`,userData)
      const user = (await response).data;
      setCurrentUser(user)
      navigate('/')
    } catch (error) {
      setError(error.response.data.msg)
    }
  }


  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form  className="form login__form"  onSubmit={loginUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input type="text"  placeholder='Email' name='email' value={userData.email} onChange={changeInputHandle} autoFocus/>
          <input type="password"  placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle}/>
          <button type="submit"className='btn primary'>Login</button>
        </form>
        <small>Don't have an account? <Link to='/register'>Sign in</Link> </small>
      </div>
    </section>
  )
}

export default Login