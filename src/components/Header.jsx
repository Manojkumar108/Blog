import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import {AiOutlineClose} from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true :false)

  const closeNavHandler =()=>{
    if (window.innerWidth <800) {
      setIsNavShowing(false)
    }else{
      setIsNavShowing(true)
    }
  }
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='nav__logo' onClick={closeNavHandler}> 
         <img src={Logo}/>
        
        </Link>
        {isNavShowing && <ul className="nav__menu">
          <li><Link to="/profile/uyuh" onClick={closeNavHandler}>Dharam</Link></li>
          <li><Link to='/create'onClick={closeNavHandler}>Create Post</Link></li>
          <li><Link to='/authors'onClick={closeNavHandler}>Author</Link></li>
          {/* <li><Link to="/logout"onClick={closeNavHandler}>Logout</Link></li> */}
          <li><Link to="/login"onClick={closeNavHandler}>login</Link></li>
          <li><Link to="/register"onClick={closeNavHandler}>register</Link></li>
        </ul>}
        <button className="nav__toggle-btn" onClick={()=>setIsNavShowing(!isNavShowing)}>
          {isNavShowing? <AiOutlineClose/>: <FaBars/>}

        </button>
      </div>
    </nav>
  )
}

export default Header