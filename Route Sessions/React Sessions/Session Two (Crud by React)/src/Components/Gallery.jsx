import React from 'react'
import { Link } from 'react-router-dom'
import {Outlet} from 'react-router-dom'

export default function Gallery() {

  return (
    <div>
      <h1>Gallery</h1>
      <p>This is the gallery page.</p>
      <ul className="list-unstyled d-flex gap-3 mb-4 pb-0 mt-4">
        <li><Link to="">Web</Link></li>
        <li><Link to="graphic">Graphic</Link></li>
        <li><Link to="photography">Photography</Link></li>
      </ul>
      <Outlet />

    </div>
  )
}
