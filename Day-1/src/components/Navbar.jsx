import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav>
      <Link to="/">Home</Link>
      <Link to="/course">Course</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  )
}

export default Navbar
