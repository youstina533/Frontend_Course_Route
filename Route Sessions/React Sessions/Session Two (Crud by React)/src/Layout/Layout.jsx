import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import {Outlet} from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <NavBar /> 
      <div className="conatiner py-5 my-3">
        <Outlet /> 
      </div>
      <Footer /> 
    </div>
  )
}
