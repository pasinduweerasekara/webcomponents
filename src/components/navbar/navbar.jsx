import React,{useState} from 'react'
import './navbar.css'
import logo from '../../statics/logo.svg' //import logo
import searchIcon from '../../statics/search-thin.svg' //import search icon
import {Link} from 'react-router-dom'





function NavBar() {
    const [ismobile, setismobile] = useState(false);
  
  function handleMenuBtnClick() {
    setismobile(!ismobile)

  }

  return (
    <nav className='nav-container'>
      <div className="logo">
        <img src={logo} alt="logo.svg" id="logo-img" />
      </div>
      <ul className={ismobile?"link-list menu-open":"link-list" }>
        <Link to='/' className="link-item active" >
            <li className="link-text" onClick={()=>{setismobile(false)} }>home</li>
        </Link>

        <Link to='/downloads' className="link-item" >
            <li className="link-text" onClick={()=>{setismobile(false)} }>downloads</li>
        </Link>

        <Link to='/about' className="link-item">
            <li className="link-text" onClick={()=>{setismobile(false)} }>about</li>
        </Link>

        <Link to='/contacts' className="link-item">
            <li className="link-text" onClick={()=>{setismobile(false)} }>contacts</li>
        </Link>
        <div className="search-bar">
          <img src={searchIcon} alt={searchIcon} id="search-icon"/>
      </div>
      </ul>
      <div className={ismobile?"menu-btn close":"menu-btn"} onClick={handleMenuBtnClick}>
        <span className="menu-bar" id="bar1"></span>
        <span className="menu-bar" id="bar2"></span>
        <span className="menu-bar" id="bar3"></span>
    </div>
    </nav>
  )
}

export default NavBar