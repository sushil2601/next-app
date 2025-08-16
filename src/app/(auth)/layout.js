"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './style.css';


const navLinks = [
  {name : 'Register',href : "/register"},
  {name : 'Login',href : "/login"}
]

export default function AuthLayout({children}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <div>
          {navLinks.map((link)=>{
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
            return (
              <Link 
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
              href={link.href} key={link.name}>{link.name}</Link>
            )
          })}
        </div>
        {children}
        <footer 
          style={{backgroundColor : "gray",padding : "1rem"}}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
