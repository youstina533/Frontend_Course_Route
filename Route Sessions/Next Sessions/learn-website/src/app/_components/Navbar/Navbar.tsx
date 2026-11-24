"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navbar() {
  const path= usePathname();
  return <>
    <nav className="bg-blue-500 p-5 text-white text-lg">
       <div className="flex justify-between w-3/4 mx-auto">
        <div className="logo">
            LearnApp
        </div>
        <div className="links">
           <ul className="flex gap-4">
            <li><Link className={path === "/" ? "active" : ""} href ={`/`}>Home</Link></li>
            <li><Link className={path === "/about" ? "active" : ""}  href ={`/about`}>About</Link></li>
            <li><Link className={path === "/contact" ? "active" : ""}  href ={`/contact`}>Contact</Link></li>
            <li><Link className={path === "/products" ? "active" : ""}  href ={`/products`}>Products</Link></li>
           </ul>
        </div>
       </div>
    </nav>
  </>
   
}
