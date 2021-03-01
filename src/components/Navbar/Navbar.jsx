import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
  return(
    <nav className={s.nav}>
      <p><a href="">Profile</a></p>
      <p><a href="">Messages</a></p>
      <p><a href="">News</a></p>
      <p><a href="">Music</a></p>
      <p><a href="">Settings</a></p>
    </nav>
  )
}

export default Navbar;