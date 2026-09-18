import React from 'react'
import { Link, NavLink} from 'react-router-dom'

export default function NavBar() {
  return <>
  <nav className ="bg-danger text-center fixed-top">
    <div className="container p-2">
      <ul className="list-unstyled d-flex gap-3 mb-0 pb-0">
      <li><NavLink className="nav-link text-white" to="/">Home</NavLink></li>
      <li><NavLink className="nav-link text-white" to="parent">Parent</NavLink></li>
      <li><NavLink className="nav-link text-white" to="gallery">Gallery</NavLink></li>
      <li><NavLink className="nav-link text-white" to="products">Products</NavLink> </li>
      </ul>
    </div>
  </nav>
  </>
  
}
